import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import vkBridge from '@vkontakte/vk-bridge'

import { AdaptivityProvider, ModalRoot, AppRoot, ConfigProvider, ModalPage, Header, Panel, PanelHeader, Platform, Root, Scheme, SimpleCell, SplitCol, SplitLayout, View, usePlatform } from '@vkontakte/vkui';

import "./App.css";
import StartWindow from '../views/StartWindow/StartWindow';
import ListAge from '../views/ListAge/ListAge';
import ListQuestions from '../views/ListQuestions/ListQuestions';
// import Result from '..//Result/Result';
import ListQuizes from '../views/ListQuizes/ListQuizes';
// import AnswersQuestions from '..//AnswersQuestions/AnswersQuestions';
// import Modal from '..//ListQuestions/IteamListQuestion/Modal/Modal';
// import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import SpinnerView from '../views/SpinnerView/SpinnerView';
// import testClass from '..//StartWindow/StartWindow';
// import axios from 'axios';

import * as server from '../NotUI/Server/server'
import TestView from '../components/TestView/TestView';
import { Provider, useSelector } from 'react-redux';

import * as appNavigate from './Actions'

import {selectCurrentView} from './Selector'
import PoolView from '../views/PoolView/PoolView';

// import './svg/book.svg'
// import './svg/imgLoader.svg'


// import svgContacts from '..//StartWindow/contacts.svg';

// setActiveView(null)
const App = ({results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {
	

	// логика переключения между View
	const VIEW_ID_START_WINDOW = "VIEW_ID_START_WINDOW";
	const VIEW_ID_LIST_AGE_AND_QUIZES = "VIEW_ID_LIST_AGE_AND_QUIZES";
	const VIEW_ID_LIST_QUESTIONES = "VIEW_ID_LIST_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";
	const VIEW_ID_ANSWERS_QUESTIONS = "VIEW_ID_ANSWERS_QUESTIONS";

	const VIEW_ID_SPINNER = "VIEW_ID_SPINNER";

	// логика переключения между Панелями
	const PANEL_ID_LIST_AGE = "PANEL_ID_LIST_AGE";
	const PANEL_ID_LIST_QUIZES = "PANEL_ID_LIST_QUIZES";


	const [activeViewOld, setActiveView] = useState(VIEW_ID_LIST_AGE_AND_QUIZES);
	const [activePanel, setActivePanel] = useState(PANEL_ID_LIST_AGE);
	const [curWidth, setCurWidth] = useState(0)

	const goToViewStartWindow = () => setActiveView(VIEW_ID_START_WINDOW);
	const goToViewListAgeAndQuizes = () =>setActiveView(VIEW_ID_LIST_AGE_AND_QUIZES)
	const goToViewListQuestions = () => setActiveView(VIEW_ID_LIST_QUESTIONES);
	const goToViewResult = () => setActiveView(VIEW_ID_RESULT);
	const goToViewAnswersQuestions = () => setActiveView(VIEW_ID_ANSWERS_QUESTIONS);
	const goToViewSpinner = () => setActiveView(VIEW_ID_SPINNER);

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


	const [eras, setEras] = useState(
	[
		{
			russianName: "Эра1",
			description: "Описание Эры1",
			image: {
				imageName: "1.jpg",
				sourceImageLink: "Ссылка на картинку1"
			},
			subset: [
				{
					russianName: "Опрос2",
					description: "ОписаниеОпроса2",
					image: {
						imageName: "2.jpg",
						sourceImageLink: "Ссылка на картинку2"
					},
					subset: [
						{
							idQuestion: 2,
							textQuestion: "Вопрос2",
							image: {
								imageName: "3.jpg",
								sourceImageLink: "Ссылка на картинку3"
							},
							answerOptions: [
								{
									idAnswerOption: 8,
									idQuestion: 2,
									text: "Вариант4",
									score: "0"
								},
								{
									idAnswerOption: 7,
									idQuestion: 2,
									text: "Вариант3",
									score: "0"
								},
								{
									idAnswerOption: 6,
									idQuestion: 2,
									text: "Вариант2",
									score: "1"
								},
								{
									idAnswerOption: 5,
									idQuestion: 2,
									text: "Вариант1",
									score: "0"
								}
							],
							userAnswer: null
						}
					]
				}
			]
		}
	]);
	const [isNeedDateLoad,setIsNeedDateLoad] = useState(true)

	useEffect(() => {
		// if(isNeedDateLoad){

		// 	server.firstDownload().then(data=>{
		// 		// setEras(data.eras)

		// 		if(true){
		// 			goToViewStartWindow();
		// 		}else{
		// 			goToViewListAgeAndQuizes();
		// 		}
		// 	})

		// 	setIsNeedDateLoad(false);
		// }

		//Обновляем текущую ширину
		setCurWidth(document.getElementById('root').scrollWidth)
	}, []);



		const downloadQuizeImage = async (index) => {
			await server.downloadImagesArr(eras[indexAge].subset[index].subset)
			goToViewListQuestions()
		}


	//Функции для StartWindow
	
		const onClickStartWindow = () => {
			goToViewListAgeAndQuizes();
		}	


	// Функции для ListAgeAndQuizes

		// Выбор эпохи
		const createOnClickItemAge = (index) => () => {
			goForwardInHistory(PANEL_ID_LIST_QUIZES);
			setIndexAge(index);
			goToPanelListQuizes();
		}

		// Выбор опроса
		const createOnClickItemQuizes = (index) => () => {
			setIndexQuiz(index);
			goToViewListQuestions();
			// goToViewSpinner();
			// downloadQuizeImage(index)
			// if(!eras[indexAge].subset[index].isImageDownloaded)
			// {
			// 	goToViewSpinner();
			// 	downloadQuizeImage(index)
			// 	eras[indexAge].quizzes[index].isImageDownloaded = true;
			// }
				
			// else
			// 	goToViewListQuestions();
		}

		// Возврат от выбранной эпохи к выбору эпохи
		const onBackListQuizes = () => {
			setIsFirstOpenResult(true);
			goBackInHistory(PANEL_ID_LIST_AGE)
		}

		//Возврат от результатов к выбору эпохи
		const goToViewListAgeAndQuizesFromResult = () => {
			goBackInHistory()
			goToViewListAgeAndQuizes()
		}

		//Загружены ли в кеш картинки эпох и опросов (не картинки внутри опросов, их загружают отдельно)
		const [isImageDownloaded, setIsImageDownloaded] = useState(false)



	// История для ListAgeAndQuizes

		const [history, setHistory] = useState([PANEL_ID_LIST_AGE]);
		const goBackInHistory = () => {
			let his = history;
			his.pop()
			if (activePanel === PANEL_ID_LIST_AGE) {
				vkBridge.send('VKWebAppEnableSwipeBack');
			}
			setHistory(his)
			setActivePanel(history[history.length - 1])	
		}

		const goForwardInHistory = (view) => { 
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



	// функции для ListQuestions
		const onBackListQuestions = () => {
			goToViewListAgeAndQuizes();
			goToPanelListQuizes();
		}

		const onFinishListQuestions = (indexesAnswers) => {
			setIndexesAnswers(indexesAnswers);

			let sum = 0;
			for(let i=0;i<indexesAnswers.length;i++){
				if(indexesAnswers[i] !== -1){
					sum+=eras[indexAge].subset[indexQuiz].subset[i].answerOptions[indexesAnswers[i]].score;
				}
			}

			eras[indexAge].subset[indexQuiz].percentProgress = sum;
			if(eras[indexAge].subset[indexQuiz].numberOfQuestions === sum){
				eras[indexAge].subset = eras[indexAge].percentProgress + 1;
			}
			
			setIndexResult(sum)
			goToViewResult();
		}

	// функции для Result
		const onBackResult = () => {
			goToViewListAgeAndQuizes();
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



	const onBackListAge = () => {
		goBackInHistory(PANEL_ID_LIST_AGE)
		goToViewListAgeAndQuizes()
	}

	const activeView = useSelector(selectCurrentView)
	// console.log(eras)

	return (
	<ConfigProvider isWebView={true}>
		<AdaptivityProvider>
			<AppRoot>
				<SplitLayout header={null}>
					<SplitCol animate={true}>
							<Root activeView={activeView}>

								<StartWindow 
									id={VIEW_ID_START_WINDOW} 
									goToPollView={appNavigate.App_goToPollView}/>

								<PoolView
									id={VIEW_ID_LIST_AGE_AND_QUIZES}
									eras={eras}
									curWidth={curWidth}
									indexAge={indexAge}
								/>

								{/* <View 
									id={VIEW_ID_LIST_AGE_AND_QUIZES}
									activePanel={activePanel}
									onSwipeBack={goBackInHistory}
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
										title={eras[indexAge].russianName} 
										quizes={eras[indexAge].subset} 
										onBack={onBackListQuizes} 
										createOnClickItemQuizes={createOnClickItemQuizes}
										goToSurveyView={appNavigate.goToSurveyView}
									/>

								</View> */}

								<ListQuestions 
									id={VIEW_ID_LIST_QUESTIONES}
									curWidth={curWidth}
									arrQuestions={eras[indexAge].subset[indexQuiz].subset}
									onBack={onBackListQuestions}
									onFinish={onFinishListQuestions}
									goToPollView={appNavigate.App_goToPollView}
								/>

								{/* <ListQuestions 
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
									quizes={eras[indexAge].quizzes}
									questions={eras[indexAge].quizzes[indexQuiz].questions}
									indexAge={indexAge}
									eras={eras}
									indexQuiz={indexQuiz}
									indexesAnswers={indexesAnswers}
									createOnClickItemAge={createOnClickItemAge}
									onBack={onBackResult}
									createOnClickItemQuizes={createOnClickItemQuizes}

									onAgain={onAgainResult}
									onGoToAnswersQuestion={onGoToAnswersQuestionResult}
									goToViewListAndQuizes={goToViewListAgeAndQuizesFromResult}

							<Result
								id={VIEW_ID_RESULT}
								percent={results[indexResuslt].percent}
								year={results[indexResuslt].year}
								historicalEvent={results[indexResuslt].historicalEvent}
                                titleAge={eras[indexAge].title}
								quizes={eras[indexAge].quizzes}
								questions={eras[indexAge].quizzes[indexQuiz].questions}
								indexAge={indexAge}
								eras={eras}
								indexQuiz={indexQuiz}
								indexesAnswers={indexesAnswers}
								createOnClickItemAge={createOnClickItemAge}
								onBack={onBackResult}
								createOnClickItemQuizes={createOnClickItemQuizes}

								{/* <AnswersQuestions
									id={VIEW_ID_ANSWERS_QUESTIONS}
									questions={eras[indexAge].quizzes[indexQuiz].questions}
									indexesAnswers={indexesAnswers}
									onBack={onBackAnswersQuestions}
								/> */}

								<SpinnerView
									id={"VIEW_ID_SPINNER"}
								>
								</SpinnerView>

							</Root>
						{/* </Provider> */}
					</SplitCol>
				</SplitLayout>
			</AppRoot>
    	</AdaptivityProvider>
    </ConfigProvider>
	);
}

export default App;
