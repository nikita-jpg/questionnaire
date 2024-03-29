import React, { useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';


import "./App.css";
import StartWindow from '../views/StartWindow/StartWindow';
import Result from '../views/Result/Result'
import ListQuestions from '../views/ListQuestions/ListQuestions';
import SpinnerView from '../views/SpinnerView/SpinnerView';

import { useDispatch, useSelector } from 'react-redux';

//Actions
import * as appNavigate from './Actions'
import * as server from '../NotUI/Server/server'
import * as data from '../NotUI/Data/actions'
import * as poolView from '../views/PoolView/actions'
import * as alert from '../components/Alert/actions'
import * as viewsId from './Constants'


import {selectCurrentView} from '../Selectors/app_selectors'
import PoolView from '../views/PoolView/PoolView';
import { getAlert } from '../Selectors/alert_selectors';
import ModalRootMain from '../components/Modal/ModalRootMain';
import AlertCloseApp from '../components/Alert/AlertCloseApp/AlertCloseApp'
import { AppRoot, ConfigProvider, AdaptivityProvider, SplitCol, Root, SplitLayout } from '@vkontakte/vkui';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Link, BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';


const App = ({}) => {

	const navigate = useNavigate()
	useEffect(()=>{
		// navigate("/4164")
		// navigate("/index.html/data")

		// console.log("window.history.pushState")

		window.history.pushState("","/")
		window.history.pushState("","/index.html/data")
        window.addEventListener('popstate', (event) =>{
			// console.log("qde")
			navigate("/data")
        })
	},[])
	
	const dispatch = useDispatch()

	const sendImagesToStateEras = (images) => dispatch(data.Data_addStaticImages(images))
	const sendImagesToStateSurveys = (images) => dispatch(data.Data_addStaticImages(images))


	//Реклама
	const setAdsProps = (adsPropsa) => dispatch(data.Set_adsProps(adsPropsa))
	const getAdsData = () => {
		bridge.send('VKWebAppGetAds',{}).then((promoBannerProps) => {
				setAdsProps(promoBannerProps)
			})
	}

	const serverErrorAlert = <AlertCloseApp errorText = {"К сожалению, сервер недоступен. Просим вас зайти позже"}></AlertCloseApp>
	//Платформа
	const setPlatform = (platform) => dispatch(data.Set_platform(platform))

	// Парсим данные из query-запроса
	const getQueryObject = (queryString) => {
		return queryString.split('&').map(function(i) { 
			return i.split('=');
		}).reduce(function(memo, i) { 
			memo[i[0]] = i[1] == +i[1] ? parseFloat(i[1],10) : decodeURIComponent(i[1]); 
			return memo;
		}, {})
	}

	const errorAlert = <AlertCloseApp errorText = {"К сожалению, сервер недоступен. Просим вас зайти позже"}></AlertCloseApp>

	// Предзагрузка всего необходимого
	useEffect(() => {

		//Зашружаем в State инфцу о текущей платформе
		setPlatform(getQueryObject(window.location.search.slice(1)).vk_platform)

		// Загрузка текста для эр и опросов, результатов. Вопросы для кокретного опроса не грузятся
		server.downloadData().then(info=>{
			dispatch(data.Data_setStaticDataFromServer(info))
			let erasImages = [];
			info.Eras.map((era)=>{
				erasImages.push(era.image)
			})

			// Загрузка svg-шек
			server.downloadDefaultIMG().then((res)=>{

				if(info.UserData.isFirstOpen){
					dispatch(appNavigate.App_goToStartView())
				}else{
					dispatch(appNavigate.App_goToPollView())
				}

				let surveysImages = [];
				info.Surveys.map((survey)=>{
					surveysImages.push(survey.image)
				})

				// Загрузка картинок эпох
				server.downloadImagesArr(surveysImages).then(newRes=>{
					sendImagesToStateSurveys(newRes)

				})

				// Загрузка картинок эр
				server.downloadImagesArr(erasImages).then(res=>{
					sendImagesToStateEras(res)
				})
			})

		})
		.catch(err=>{
			// console.log(err)
			dispatch(alert.Alert_setAlert(serverErrorAlert))
		})

		//Загружаем рекламу
		getAdsData()
	}, []);


	const activeView = useSelector(selectCurrentView)
	const curAlert = useSelector(getAlert)
	const DEFAULT_PATCH = "/index.html"

	return (
	<ConfigProvider isWebView={true}>
		<AdaptivityProvider>
			<AppRoot mode='full'>
				<SplitLayout 
					modal={<ModalRootMain/>}
					header={null} 
					popout={curAlert}
				>
					<SplitCol animate={true}>
						<Routes>
							<Route exact path="/data" element={
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
										goToListSurveyAction={poolView.PoolView_goToListSurvey}
										goToPollViewAction={appNavigate.App_goToPollView}
										goToResultViewAction={appNavigate.App_goToResultView}
										goToLoadingViewAction={appNavigate.App_goToLoadingtView}
										goToViewListQuestions={appNavigate.App_goToSurveyView}

										saveUserAnswersAction={data.Data_saveUserAnswers}
									/>

									<Result
										id={viewsId.VIEW_ID_RESULT}
										goToSurveyViewAction={appNavigate.App_goToSurveyView}
										goToPollViewAction={appNavigate.App_goToPollView}
										setCurSurveyIdAction={data.Data_setIndexSurvey}
										setCurQuestionIdAction={data.Data_setIndexQuestion}
									/>

									<SpinnerView
										id={viewsId.VIEW_ID_SPINNER}
									>
									</SpinnerView>

								</Root>
						}>
							</Route>

							<Route
								path="*"
								element={<Navigate to="/data" />}
							/>
							</Routes>
					</SplitCol>
				</SplitLayout>
			</AppRoot>
    	</AdaptivityProvider>
    </ConfigProvider>
	);
}

export default App;
