import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import vkBridge from '@vkontakte/vk-bridge'

import { AdaptivityProvider, ModalRoot, AppRoot, ConfigProvider, ModalPage, Header, Panel, PanelHeader, Platform, Root, Scheme, SimpleCell, SplitCol, SplitLayout, View, usePlatform } from '@vkontakte/vkui';

import "./App.css";
import StartWindow from '../views/StartWindow/StartWindow';
import ListAge from '../views/ListAge/ListAge';
import Result from '../views/Result/Result'
import ListQuestions from '../views/ListQuestions/ListQuestions';
// import Result from '..//Result/Result';
import ListQuizes from '../views/ListQuizes/ListQuizes';
// import AnswersQuestions from '..//AnswersQuestions/AnswersQuestions';
// import Modal from '..//ListQuestions/IteamListQuestion/Modal/Modal';
// import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import SpinnerView from '../views/SpinnerView/SpinnerView';
// import testClass from '..//StartWindow/StartWindow';
// import axios from 'axios';

import TestView from '../components/TestView/TestView';
import { Provider, useDispatch, useSelector } from 'react-redux';

//Actions
import * as appNavigate from './Actions'
import * as server from '../NotUI/Server/server'
import * as data from '../NotUI/Data/actions'
import * as poolView from '../views/PoolView/actions'

//Views id
import * as viewsId from './Constants'

// import * as additionalActions from '../Additional/actions'

import {selectCurrentView} from '../Selectors/app_selectors'
import PoolView from '../views/PoolView/PoolView';

// import './svg/book.svg'
// import './svg/imgLoader.svg'


// import svgContacts from '..//StartWindow/contacts.svg';

// setActiveView(null)
const App = ({results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {
	
	const dispatch = useDispatch()

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
	// const goToPanelListQuizes = () => setActivePanel(PANEL_ID_LIST_QUIZES);

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


	useEffect(() => {

		server.firstDownload().then(info=>{
			dispatch(data.Data_setStaticDataFromServer(info))

			if(true){
				goToViewStartWindow();
			}else{
				goToViewListAgeAndQuizes();
			}
		})
		//Обновляем текущую ширину

		// additionalActions.Additional_setCurHeight(document.getElementById('root').scrollHeight)
		// additionalActions.Additional_setCurWidth(document.getElementById('root').scrollWidth)
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
			// goToPanelListQuizes();
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
									id={viewsId.VIEW_ID_START_WINDOW} 
									goToPollView={appNavigate.App_goToPollView}/>

								<PoolView
									id={viewsId.VIEW_ID_LIST_AGE_AND_QUIZES}
									setIndexEraAction={data.Data_setIndexEra}
									setIndexSurveyAction={data.Data_setIndexSurvey}
									goToSurveyViewAction={appNavigate.App_goToSurveyView}
									goToResultViewAction={appNavigate.App_goToResultView}
									goToListAgeAction={poolView.PoolView_goToListAge}
								/>

								<ListQuestions 
									id={viewsId.VIEW_ID_LIST_QUESTIONES}
									onFinish={onFinishListQuestions}
									goToListSurveyAction={poolView.PoolView_goToListSurvey}
									goToPollViewAction={appNavigate.App_goToPollView}
									goToResultViewAction={appNavigate.App_goToResultView}

									saveUserAnswersAction={data.Data_saveUserAnswers}
								/>

								<Result
									id={VIEW_ID_RESULT}
									goToSurveyViewAction={appNavigate.App_goToSurveyView}
									goToPollViewAction={appNavigate.App_goToPollView}
									setCurSurveyIdAction={data.Data_setIndexSurvey}
									setCurQuestionIdAction={data.Data_setIndexQuestion}
									// percent={results[indexResuslt].percent}
									// year={results[indexResuslt].year}
									// historicalEvent={results[indexResuslt].historicalEvent}
									// quizes={eras[indexAge].quizzes}
									// questions={eras[indexAge].quizzes[indexQuiz].questions}
									// indexAge={indexAge}
									// eras={eras}
									// indexQuiz={indexQuiz}
									// indexesAnswers={indexesAnswers}
									// createOnClickItemAge={createOnClickItemAge}
									// onBack={onBackResult}
									// createOnClickItemQuizes={createOnClickItemQuizes}

									// onAgain={onAgainResult}
									// onGoToAnswersQuestion={onGoToAnswersQuestionResult}
									// goToViewListAndQuizes={goToViewListAgeAndQuizesFromResult}
									/>

								{/* <Result
									id={viewsId.VIEW_ID_RESULT}
									percent={results[indexResuslt].percent}
									quizes={eras[indexAge].quizzes}
									questions={eras[indexAge].quizzes[indexQuiz].questions}
									indexAge={indexAge}
									eras={eras}
									indexQuiz={indexQuiz}
									indexesAnswers={indexesAnswers}
									createOnClickItemQuizes={createOnClickItemQuizes}

									onAgain={onAgainResult}
									goToViewListAndQuizes={goToViewListAgeAndQuizesFromResult}

									isFirstOpenResult={isFirstOpenResult}
									setIsFirstOpenResult={setIsFirstOpenResult}
								/> */}

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
