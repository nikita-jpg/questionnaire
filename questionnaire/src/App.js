import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Quiz from './panels/Quiz/Quiz';
import { Panel, Root } from '@vkontakte/vkui';
import Question from './panels/Question/Question';
import Result from './panels/Result/Result';

const App = ({ quizzes }) => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	// логика переключения между View
	const VIEW_ID_QUIZES = "VIEW_ID_QUIZES";
	const VIEW_ID_QUESTIONES = "VIEW_ID_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";

	const [activeView, setActiveView] = useState(VIEW_ID_QUIZES);

	const goToViewQuizes = () => setActiveView(VIEW_ID_QUIZES);
	const goToViewQuestions = () => setActiveView(VIEW_ID_QUESTIONES);
	const goToViewResult = () => setActiveView(VIEW_ID_RESULT);

	// логика переключения опросов
	const createQuizId = currentIndex => `quiz_${currentIndex}`;

	const [activeQuizPanel, setQuizActivePanel] = useState(createQuizId(0));

	const createGoLeftQuiz = currentIndex => () => { setQuizActivePanel(createQuizId(currentIndex - 1)) };

	const createGoRightQuiz = currentIndex => () => { setQuizActivePanel(createQuizId(currentIndex + 1)) };

	// индекс опроса
	const [indexQuiz, setIndexQuiz] = useState(0);

	// логика переключения вопросов
	const createQuestionId = currentIndex => `question_${currentIndex}`;

	const [activeQuestionPanel, setQuestionActivePanel] = useState(createQuestionId(0));

	// хранит массив индексов ответов
	const [indexesAnswers, setIndexesAnswers] = useState([]);

	const pushIndexAnswer = indexAnswer => setIndexesAnswers([...indexesAnswers, indexAnswer]);

	const removeIndexAnswer = () => setIndexesAnswers(indexesAnswers.slice(0, indexesAnswers.length - 1));

	const [indexResult, setIndexResult] = useState(0);

	const calculateIndexResult = () => {
		const quizze = quizzes[indexQuiz];

		const totalScore = indexesAnswers.reduce((sumScore, indexAnswer, indexQuestion) => {
			return sumScore + quizze.quetions[indexQuestion].answerOptions[indexAnswer].score;
		}, 0);

		quizze.results.forEach(({min, max}, index) => {
			if (totalScore >= min && totalScore <= max) {
				setIndexResult(index);
			}
		});
	}

	const createGoToPrevQuestion = currentIndex => () =>  { 
		removeIndexAnswer()

		if (currentIndex <= 0) {
			goToViewQuizes();
		} else {
			setQuestionActivePanel(createQuestionId(currentIndex - 1));
		}
	};

	const createGoToNextQuestion = (currentIndex, length) => (indexAnswer) =>  { 
		pushIndexAnswer(indexAnswer);

		if (currentIndex + 1 < length) {
			setQuestionActivePanel(createQuestionId(currentIndex + 1));
		} else {
			calculateIndexResult();
			goToViewResult();
		}
	};

	// функция создающая функцию для перехода к вопросам
	const createGoToQuestion = index => () => {
		goToViewQuestions();
		setIndexQuiz(0)
		setQuestionActivePanel(createQuestionId(0));
	}

	return (
		<Root activeView={activeView}>
			<View activePanel={activeQuizPanel} popout={popout} header={false} id={VIEW_ID_QUIZES}>
				{
					quizzes.map((quizze, i) => (
						<Quiz
							id={createQuizId(i)}
							key={createQuizId(i)}
							quizze={quizze}
							goLeftQuiz={createGoLeftQuiz(i)}
							goRightQuiz={createGoRightQuiz(i)}
							hasRightQuiz={i < quizzes.length - 1}
							hasLeftQuiz={i > 0}
							goToViewQuestions={createGoToQuestion(i)}
						/>
					))
				}
			</View>

			<View activePanel={activeQuestionPanel} id={VIEW_ID_QUESTIONES}>
				{
					quizzes[indexQuiz].quetions.map((question, i, arr) => (
						<Question 
							id={createQuestionId(i)}
							key={createQuestionId(i)}
							question={question}
							numberCurrentQuestion={i+1}
							countQuestions={arr.length}
							goToPrevQuestion={createGoToPrevQuestion(i)}
							goToNextQuestion={createGoToNextQuestion(i, arr.length)}
						/>
					))
				}
			</View>

			<View id={VIEW_ID_RESULT} activePanel="PANEL_RESULT">
				<Panel id="PANEL_RESULT">
					<Result
						backgroundImage={quizzes[indexQuiz].results[indexResult].backgroundImage}
						image={quizzes[indexQuiz].results[indexResult].image}
						historyImage={quizzes[indexQuiz].results[indexResult].historyImage}
						wallImage={quizzes[indexQuiz].results[indexResult].wallImage}
						text={quizzes[indexQuiz].results[indexResult].text}
						goBack={goToViewQuizes}
					/>
				</Panel>
			</View>
		</Root>
	);
}

export default App;

