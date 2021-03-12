import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import { Root } from '@vkontakte/vkui';

import "./App.css";
import StartWindow from './panels/StartWindow/StartWindow';
import ListAge from './panels/ListAge/ListAge';
import ListQuestions from './panels/ListQuestions/ListQuestions';
import Result from './panels/Result/Result';
import ViewListQuizes from './panels/ViewListQuizes/ViewListQuizes';
import AnswersQuestions from './panels/AnswersQuestions/AnswersQuestions';

const App = ({ eras, results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {

	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const enablePopout = () => setPopout(<ScreenSpinner size='large' />);
	const disablePopout = () => setPopout(null);

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
			disablePopout();
		}
		fetchData();
	}, []);

	// логика переключения между View
	const VIEW_ID_START_WINDOW = "VIEW_ID_START_WINDOW";
	const VIEW_ID_LIST_AGE = "VIEW_ID_LIST_AGE";
	const VIEW_ID_LIST_QUIZES = "VIEW_ID_LIST_QUIZES";
	const VIEW_ID_LIST_QUESTIONES = "VIEW_ID_LIST_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";
	const VIEW_ID_ANSWERS_QUESTIONS = "VIEW_ID_ANSWERS_QUESTIONS";

	const [activeView, setActiveView] = useState(VIEW_ID_LIST_QUESTIONES);

	const goToViewStartWindow = () => setActiveView(VIEW_ID_START_WINDOW);
	const goToViewListAge = () => setActiveView(VIEW_ID_LIST_AGE);
	const goToViewListQuizes = () => setActiveView(VIEW_ID_LIST_QUIZES);
	const goToViewListQuestions = () => setActiveView(VIEW_ID_LIST_QUESTIONES);
	const goToViewResult = () => setActiveView(VIEW_ID_RESULT);
	const goToViewAnswersQuestions = () => setActiveView(VIEW_ID_ANSWERS_QUESTIONS);

	// логика хранения индексов
	const [indexAge, setIndexAge] = useState(0);
	const [indexQuiz, setIndexQuiz] = useState(0);
	const [indexResuslt, setIndexResult] = useState(0);

	// логика хранения ответов
	const [indexesAnswers, setIndexesAnswers] = useState([]);

	// первый раз открываем Result
	const [isFirstOpenResult, setIsFirstOpenResult] = useState(true);

	// функции для StartWindow
	const onClickStartWindow = () => {
		goToViewListAge();
	}

	// функции для ListAge
	const createOnClickItemAge = (index) => () => {
		setIndexAge(index);
		goToViewListQuizes();
	}

	// функции для ListQuizes
	const onBackListQuizes = () => {
		setIsFirstOpenResult(true);
		goToViewListAge();
	}

	const createOnClickItemQuizes = (index) => () => {
		setIndexQuiz(index);
		goToViewListQuestions();
	}

	// функции для ListQuestions
	const onBackListQuestions = () => {
		goToViewListQuizes();
	}

	const onFinishListQuestions = (totalScore, indexesAnswers) => {
		setIndexesAnswers(indexesAnswers);

		const percent = Math.round(totalScore / MAX_SCORE * 100);
		savePercentQuiz(indexAge, indexQuiz, percent);
		setIndexResult(results.findIndex(res => res.percent === percent));
		goToViewResult();
	}

	// функции для Result
	const onBackResult = () => {
		goToViewListQuizes();
	}

	const onAgainResult = () => {
		goToViewListQuestions();
	}
	
	const onGoToAnswersQuestionResult = () => {
		goToViewAnswersQuestions()
	}

	// функции для AnswersQuestions
	const onBackAnswersQuestions = () => {
		goToViewResult();
	}

	return (
		<Root activeView={activeView}>
			<StartWindow 
				id={VIEW_ID_START_WINDOW} 
				onClick={onClickStartWindow}
			/>

			<ListAge 
				id={VIEW_ID_LIST_AGE} 
				eras={eras} 
				createOnClickItemAge={createOnClickItemAge}
			/>

			<ViewListQuizes 
				id={VIEW_ID_LIST_QUIZES} 
				title={eras[indexAge].shortTitle} 
				quizes={eras[indexAge].quizzes} 
				onBack={onBackListQuizes} 
				createOnClickItemQuizes={createOnClickItemQuizes}
			/>

			<ListQuestions 
				id={VIEW_ID_LIST_QUESTIONES}
				arrQuestions={eras[indexAge].quizzes[indexQuiz].questions}
				onBack={onBackListQuestions}
				onFinish={onFinishListQuestions}
			/>

			<Result
				id={VIEW_ID_RESULT}
				percent={results[indexResuslt].percent}
				year={results[indexResuslt].year}
				historicalEvent={results[indexResuslt].historicalEvent}
				quizes={eras[indexAge].quizzes.filter(quiz => quiz.percentProgress !== 100)}
				onBack={onBackResult}
				createOnClickItemQuizes={createOnClickItemQuizes}
				onAgain={onAgainResult}
				onGoToAnswersQuestion={onGoToAnswersQuestionResult}
				isFirstOpenResult={isFirstOpenResult}
				setIsFirstOpenResult={setIsFirstOpenResult}
			/>

			<AnswersQuestions
				id={VIEW_ID_ANSWERS_QUESTIONS}
				questions={eras[indexAge].quizzes[indexQuiz].questions}
				indexesAnswers={indexesAnswers}
				onBack={onBackAnswersQuestions}
			/>
		</Root>
	);
}

export default App;
