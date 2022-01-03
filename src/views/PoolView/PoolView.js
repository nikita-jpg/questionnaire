import vkBridge from '@vkontakte/vk-bridge';
import { View } from "@vkontakte/vkui";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurSurveys, getEras } from '../../Selectors/data_selectors';
import { getFirstPanel } from '../../Selectors/pollView_selectors';
import ListAge from "../ListAge/ListAge";
import ListQuizes from "../ListQuizes/ListQuizes";
import { LIST_AGE_PANEL, LIST_SURVEYS_PANEL } from './consts';


let activePanel = LIST_AGE_PANEL;
let history = [LIST_AGE_PANEL]

const PoolView = ({id,
	setIndexEraAction=()=>{}, 
	setIndexSurveyAction=()=>{}, 
	goToSurveyViewAction=()=>{},
	goToResultViewAction=()=>{},
	goToListAgeAction=()=>{},
	}) => {

	const dispatch = useDispatch()
	let  [,setState]=useState();


	//Получение данных
	const eras = useSelector(getEras)
	const erasResults = {tottal:0, score:0}

	
	const surveys = useSelector(getCurSurveys)

	const mustCurrentPanel = useSelector(getFirstPanel); //Проверяем какая панелька должна быть открыта по приказу извне

	useEffect(()=>{
		activePanel = mustCurrentPanel
	},[])
	// const [activePanel, setActivePanel] = useState(mustCurrentPanel);

	const setIndexEra = (indexEra) => dispatch(setIndexEraAction(indexEra))
	const setIndexSurvey = (indexSurvey) => dispatch(setIndexSurveyAction(indexSurvey))
	const goToViewListQuestions = () => {
		removeAndroidBackListener()
		dispatch(goToSurveyViewAction())
	}
	const goToResultView = () => {
		removeAndroidBackListener()
		dispatch(goToResultViewAction())
	}
	const goToListAge = () => dispatch(goToListAgeAction())

	// История
	// const [history, setHistory] = useState([LIST_AGE_PANEL]);

	const goBackInHistory = () => {
		let his = history;
		his.pop()
		if (activePanel === LIST_AGE_PANEL) {
			vkBridge.send('VKWebAppEnableSwipeBack');
		}
		history = his
		// setHistory(his)
		activePanel = LIST_AGE_PANEL
		setState({});
		// activePanel = history[history.length - 1]
		// setActivePanel(history[history.length - 1])	
	}

	const goForwardInHistory = (view) => { 
		let his = history;
		his.push(view);
		if (activePanel === LIST_AGE_PANEL) {
			vkBridge.send('VKWebAppDisableSwipeBack');
			history = his
			// setHistory(his)
		}
		else{
			history = his
			// setHistory(his)
		}
	}

	//Проверяем какая панелька должна быть открыта по приказу извне
	useEffect(() => {
		if(mustCurrentPanel === LIST_AGE_PANEL){
			activePanel = LIST_AGE_PANEL
			// setActivePanel(LIST_AGE_PANEL)
			history = [LIST_AGE_PANEL]
			// setHistory([LIST_AGE_PANEL])
		}
		if(mustCurrentPanel === LIST_SURVEYS_PANEL){
			activePanel = LIST_SURVEYS_PANEL
			// setActivePanel(LIST_SURVEYS_PANEL)
			history = [LIST_AGE_PANEL, LIST_SURVEYS_PANEL]
			// setHistory([LIST_AGE_PANEL, LIST_SURVEYS_PANEL])

			//Сбрасываем значение начальное панели на значение по умолчанию (панель эр)
			goToListAge()
		}
	}, []);

	
	const onBackListQuizes = () => {
		goBackInHistory()
	}

	const createOnClickItemAge = (indexEra) => {
		setIndexEra(indexEra);
		goForwardInHistory(LIST_SURVEYS_PANEL);
		activePanel = LIST_SURVEYS_PANEL;
		// setActivePanel(LIST_SURVEYS_PANEL);
	}

	const createOnClickItemQuizes = (indexSurvey) => {
		setIndexSurvey(indexSurvey)
		goToViewListQuestions()
	}

	const createOnClickItemQuizesBtn = (indexSurvey) => {
		setIndexSurvey(indexSurvey)
		goToResultView()
	}

	//Кнопка назад на андроиде
	const backAndroid = (event) => {
		console.log("activePanel:")
		console.log(activePanel)
		if (activePanel === LIST_SURVEYS_PANEL) {
			console.log("Must go to ListAge")
			onBackListQuizes()
			setState({});
		}
	}
	useEffect(()=>{
		addAndroidBackListener()
	},[])

	const addAndroidBackListener = () =>{
		window.addEventListener('popstate', backAndroid)
	}

	const removeAndroidBackListener = () =>{
		window.removeEventListener('popstate', backAndroid)
	}

	const backAndroidImmitator = () =>{
        window.history.back()
    }
        
    return(
        <View 
            id={id}
            activePanel={activePanel}
            onSwipeBack={goBackInHistory}
            history={history}
        >

        <ListAge 
            id={LIST_AGE_PANEL} 
            eras={eras} 
			erasResults={erasResults}
            createOnClickItemAge={createOnClickItemAge}
        />

        <ListQuizes 
            id={LIST_SURVEYS_PANEL} 
            surveys={surveys} 
            onBack={backAndroidImmitator} 
            createOnClickItemQuizes={createOnClickItemQuizes}
			createOnClickItemQuizesBtn={createOnClickItemQuizesBtn}
        />

    </View>
    )
}

export default PoolView