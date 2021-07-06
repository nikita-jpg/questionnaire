import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import vkBridge from '@vkontakte/vk-bridge'

import { AdaptivityProvider, ModalRoot, AppRoot, ConfigProvider, ModalPage, Header, Panel, PanelHeader, Platform, Root, Scheme, SimpleCell, SplitCol, SplitLayout, View, usePlatform } from '@vkontakte/vkui';

import "./App.css";
import StartWindow from './panels/StartWindow/StartWindow';
import ListAge from './panels/ListAge/ListAge';
import ListQuestions from './panels/ListQuestions/ListQuestions';
import Result from './panels/Result/Result';
import ListQuizes from './panels/ListQuizes/ListQuizes';
import AnswersQuestions from './panels/AnswersQuestions/AnswersQuestions';
import Modal from './panels/ListQuestions/IteamListQuestion/Modal/Modal';
import ModalPageHead from './components/ModalPageHead/ModalPageHead';
import TestView from './panels/TestView/TestView';

const App = ({ eras, results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {

	useEffect(() => {
		//Стилизуем компоненты интерфейса клиента
		bridge
			.send("VKWebAppGetClientVersion")
			.then(data => {
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
	const VIEW_ID_LIST_AGE_AND_QUIZES = "VIEW_ID_LIST_AGE_AND_QUIZES";
	const VIEW_ID_LIST_QUESTIONES = "VIEW_ID_LIST_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";
	const VIEW_ID_ANSWERS_QUESTIONS = "VIEW_ID_ANSWERS_QUESTIONS";

	// логика переключения между Панелями
	const PANEL_ID_LIST_AGE = "PANEL_ID_LIST_AGE";
	const PANEL_ID_LIST_QUIZES = "PANEL_ID_LIST_QUIZES";


	const [activeView, setActiveView] = useState(VIEW_ID_RESULT);
	const [activePanel, setActivePanel] = useState(PANEL_ID_LIST_AGE);
	const [history, setHistory] = useState([PANEL_ID_LIST_AGE]);
	const [curWidth, setCurWidth] = useState(0)

	const goToViewStartWindow = () => setActiveView(VIEW_ID_START_WINDOW);
	const goToViewListAndQuizes = () => setActiveView(VIEW_ID_LIST_AGE_AND_QUIZES)
	const goToViewListQuestions = () => setActiveView(VIEW_ID_LIST_QUESTIONES);
	const goToViewResult = () => setActiveView(VIEW_ID_RESULT);
	const goToViewAnswersQuestions = () => setActiveView(VIEW_ID_ANSWERS_QUESTIONS);

	const goToPanelListAge = () => setActivePanel(PANEL_ID_LIST_AGE);
	const goToPanelListQuizes = () => setActivePanel(PANEL_ID_LIST_QUIZES);

	// логика хранения индексов
	const [indexAge, setIndexAge] = useState(0);
	const [indexQuiz, setIndexQuiz] = useState(0);
	const [indexResuslt, setIndexResult] = useState(0);

	// логика хранения ответов
	const [indexesAnswers, setIndexesAnswers] = useState([-1,-1,-1,-1,-1,-1,-1,-1]);

	// первый раз открываем Result
	const [isFirstOpenResult, setIsFirstOpenResult] = useState(true);

	// функции для StartWindowY
	const onClickStartWindow = () => {
		goToViewListAndQuizes();
	}

	// функции для ListAge
	const createOnClickItemAge = (index) => () => {
		goForward(PANEL_ID_LIST_QUIZES);
		setIndexAge(index);
		goToPanelListQuizes();
	}

	// функции для ListQuizes
	const onBackListQuizes = () => {
		setIsFirstOpenResult(true);
		goBack(PANEL_ID_LIST_AGE)
	}

	const createOnClickItemQuizes = (index) => () => {
		setIndexQuiz(index);
		goToViewListQuestions();
	}

	// функции для ListQuestions
	const onBackListQuestions = () => {
		goToViewListAndQuizes();
		goToPanelListQuizes();
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
		goToViewListAndQuizes();
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

	// история
	const goBack = () => {
		console.log(history)
		let his = history;
		his.pop()
		if (activePanel === PANEL_ID_LIST_AGE) {
			vkBridge.send('VKWebAppEnableSwipeBack');
		  }
		setHistory(his)
		setActivePanel(history[history.length - 1])	
	}

	const goForward = (view) => { 
		let his = history;
		his.push(view);
		if (activePanel === PANEL_ID_LIST_AGE) {
			vkBridge.send('VKWebAppDisableSwipeBack');
			setHistory(his)
		  }
		else{
			setHistory(his)
		}
	}

	return (
	<ConfigProvider isWebView={true}>
		<AdaptivityProvider>
			<AppRoot>
				<SplitLayout header={null}>
					<SplitCol animate={true}>
						<Root activeView={activeView}>

							<StartWindow 
								id={VIEW_ID_START_WINDOW} 
								onClick={onClickStartWindow}/>

							<View 
								id={VIEW_ID_LIST_AGE_AND_QUIZES}
								activePanel={activePanel}
								onSwipeBack={goBack}
								history={history}>

								<ListAge 
									id={PANEL_ID_LIST_AGE} 
									eras={eras} 
									curWidth={curWidth}
									createOnClickItemAge={createOnClickItemAge}
								/>

								<ListQuizes 
									id={PANEL_ID_LIST_QUIZES} 
									curWidth={curWidth}
									// title={eras[indexAge].title} 
									// quizes={eras[indexAge].quizzes} 
									title={eras[0].title} 
									quizes={eras[0].quizzes} 
									onBack={onBackListQuizes} 
									createOnClickItemQuizes={createOnClickItemQuizes}
								/>

							</View>

							<ListQuestions 
								id={VIEW_ID_LIST_QUESTIONES}
								curWidth={curWidth}
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

							<TestView
								id={"VIEW_TEST"}
							>

							</TestView>

						</Root>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
    	</AdaptivityProvider>
    </ConfigProvider>
	);
}

export default App;
