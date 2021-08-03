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
import SpinnerView from './panels/SpinnerView/SpinnerView';
import testClass from './panels/StartWindow/StartWindow';
import axios from 'axios';
// import '@vkontakte/vkui/components.css';

import svgContacts from './panels/StartWindow/contacts.svg';
import { MainBackground } from './components/MainBaclground/MainBackground';

// setActiveView(null)
const App = ({ eras, results, MAX_SCORE, 
	savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {}}) => {
	
	const [isNeedDateLoaded,setIsNeedDateLoaded] = useState(false)

	useEffect(() => {
		if(!isNeedDateLoaded)
			firstDownload()
		// console.log("1454623")
		//Стилизуем компоненты интерфейса клиента
		// bridge
		// 	.send("VKWebAppGetClientVersion")
		// 	.then(data => {
		// 		if(data.platform === Platform.IOS){
		// 			bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light"});
		// 		}
		// 		else if (data.platform === Platform.ANDROID){
		// 			bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000","navigation_bar_color":"#000000"});
		// 		}
		// 	})
		// 	.catch(error =>{
		// 		console.log(error)
		// 	})
		
		//Обновляем текущую ширину
		// setCurWidth(document.getElementById('root').scrollWidth)
	}, []);

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


	const [activeView, setActiveView] = useState(VIEW_ID_SPINNER);
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



	// функции для StartWindow
		const onClickStartWindow = () => {
			goToViewListAgeAndQuizes();
		}



	// Функции для ListAgeAndQuizes

		const firstDownload = async () => {	
			await downloadImagesArr([{imageSrc:svgContacts}]);
			await downloadImagesArr(eras);
			for(let i=0;i<eras.length;i++)
			{
				await downloadImagesArr(eras[i].quizzes)
			}
			setIsNeedDateLoaded(true);
			goToViewStartWindow();
		}


		// Выбор эпохи
		const createOnClickItemAge = (index) => {
			goForwardInHistory(PANEL_ID_LIST_QUIZES);
			setIndexAge(index);
			goToPanelListQuizes();
		}

		// Выбор опроса
		const createOnClickItemQuizes = (index) => () => {
			setIndexQuiz(index);
			if(!eras[indexAge].quizzes[index].isImageDownloaded)
			{
				goToViewSpinner();
				downloadQuizeImage(index)
				eras[indexAge].quizzes[index].isImageDownloaded = true;
			}
				
			else
				goToViewListQuestions();
		}

		const downloadQuizeImage = async (index) => {
			await downloadImagesArr(eras[indexAge].quizzes[index].questions)
			await goToViewListQuestions()
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
					sum+=eras[indexAge].quizzes[indexQuiz].questions[i].answerOptions[indexesAnswers[i]].score;
				}
			}

			eras[indexAge].quizzes[indexQuiz].percentProgress = sum;
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

	const downloadImagesArr = async(arr) => {
		for(let i=0;i<arr.length;i++){
			await new Promise((resolve, reject) => {
				const img = new Image();
				img.src = arr[i].imageSrc;
				// console.log(img.src);
				img.onload = () => {
					resolve()
				}
			});
		}
	}

	// const testFunc = async () => {
	// await document.getElementsByClassName("fixedBackground")[0].style.backgroundColor = "transparent";
	// await onBackListQuizes();
	// await document.getElementsByClassName("fixedBackground")[0].classList.add("fixedBackground__anim--long");
	// }

	let curHeight = document.getElementById('root').scrollHeight;
	return (
	<ConfigProvider isWebView={true}>
		<div className="fixedBackground"></div>
		<AdaptivityProvider>
			<AppRoot>
				<SplitLayout>
					<SplitCol animate={true}>
						<Root activeView={activeView}>

							<StartWindow 
								arrForPreDownload={eras}
								id={VIEW_ID_START_WINDOW} 
								onClick={onClickStartWindow}/>

							<View 
								id={VIEW_ID_LIST_AGE_AND_QUIZES}
								activePanel={activePanel}
								onSwipeBack={()=>{
									document.getElementsByClassName("fixedBackground")[0].classList.add("fixedBackground__anim");
									goBackInHistory()}}
								history={history}>

								<ListAge 
									id={PANEL_ID_LIST_AGE} 
									eras={eras} 
									curWidth={curWidth}
									createOnClickItemAge={(i)=>()=>{
										document.getElementsByClassName("fixedBackground")[0].classList.remove("fixedBackground__anim");
										document.getElementsByClassName("fixedBackground")[0].classList.remove("fixedBackground__anim--long");
										createOnClickItemAge(i)
									}}
								/>

								<ListQuizes 
									id={PANEL_ID_LIST_QUIZES} 
									curWidth={curWidth}
									title={eras[indexAge].title} 
									quizes={eras[indexAge].quizzes} 
									title={eras[indexAge].title} 
									quizes={eras[indexAge].quizzes} 
									onBack={()=>{
										onBackListQuizes();
										document.getElementsByClassName("fixedBackground")[0].classList.add("fixedBackground__anim--long");
									}} 
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
								quizes={eras[indexAge].quizzes}
								questions={eras[indexAge].quizzes[indexQuiz].questions}
								indexQuiz={indexQuiz}
								indexesAnswers={indexesAnswers}
								onBack={onBackResult}
								createOnClickItemQuizes={createOnClickItemQuizes}

								onAgain={onAgainResult}
								onGoToAnswersQuestion={onGoToAnswersQuestionResult}
								goToViewListAndQuizes={goToViewListAgeAndQuizesFromResult}

								isFirstOpenResult={isFirstOpenResult}
								setIsFirstOpenResult={setIsFirstOpenResult}
							/>

							<SpinnerView
								id={VIEW_ID_SPINNER}
							>
							</SpinnerView>

						</Root>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
    	</AdaptivityProvider>
    </ConfigProvider>
	);
}

export default App;
