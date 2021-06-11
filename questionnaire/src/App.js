import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import { AdaptivityProvider, Appearance, AppRoot, ConfigProvider, Group, Header, Panel, PanelHeader, Platform, Root, Scheme, SimpleCell, SplitCol, SplitLayout, View } from '@vkontakte/vkui';

import "./App.css";
import StartWindow from './panels/StartWindow/StartWindow';
import ListAge from './panels/ListAge/ListAge';
import ListQuestions from './panels/ListQuestions/ListQuestions';
import Result from './panels/Result/Result';
import ViewListQuizes from './panels/ViewListQuizes/ViewListQuizes';
import AnswersQuestions from './panels/AnswersQuestions/AnswersQuestions';
import Modal from './panels/ListQuestions/IteamListQuestion/Modal/Modal';

const App = ({ eras, results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {

	useEffect(() => {
		//Стилизуем компоненты интерфейса клиента
		bridge
			.send("VKWebAppGetClientVersion")
			.then(data => {
				console.log(data)
				if(data.platform === Platform.IOS){
					bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light"});
				}
				else if (data.platform === Platform.ANDROID){
					bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000","navigation_bar_color":"#000000"});
				}
			})
			.catch(error =>{
				console.log(error)
			})
		
		//Обновляем текущую ширину
		setCurWidth(document.getElementById('root').scrollWidth)
	}, []);

	// логика переключения между View
	const VIEW_ID_START_WINDOW = "VIEW_ID_START_WINDOW";
	const VIEW_ID_LIST_AGE = "VIEW_ID_LIST_AGE";
	const VIEW_ID_LIST_QUIZES = "VIEW_ID_LIST_QUIZES";
	const VIEW_ID_LIST_QUESTIONES = "VIEW_ID_LIST_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";
	const VIEW_ID_ANSWERS_QUESTIONS = "VIEW_ID_ANSWERS_QUESTIONS";

	
	const TEST = "TEST";

	const [activeView, setActiveView] = useState(VIEW_ID_START_WINDOW);
	const [curWidth, setCurWidth] = useState(0)

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

	// функции для StartWindowY
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
	<ConfigProvider>
		<AdaptivityProvider>
			<AppRoot>
				<SplitLayout header={null}>
					<SplitCol >
						<Root activeView={VIEW_ID_LIST_AGE}>
							<StartWindow 
								id={VIEW_ID_START_WINDOW} 
								onClick={onClickStartWindow}
							/>

							<ListAge 
								id={VIEW_ID_LIST_AGE} 
								eras={eras} 
								curWidth={curWidth}
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

							{/* <View activePanel="main" id={TEST}>
										<Panel id="main">
										<PanelHeader>VKUI</PanelHeader>
										<Group header={<Header mode="secondary">Items</Header>}>
											<SimpleCell>Hello</SimpleCell>
											<SimpleCell>World</SimpleCell>
										</Group>
										</Panel>
									</View> */}

							{/* <Modal
								id={MODAL_TEST}
								idInside={activeModal}
							/> */}
						</Root>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
    	</AdaptivityProvider>
    </ConfigProvider>
	);
}

export default App;
