import React, { useEffect, useState } from 'react';
import vkBridge from '@vkontakte/vk-bridge'
import { View } from "@vkontakte/vkui"
import ListAge from "../ListAge/ListAge"
import ListQuizes from "../ListQuizes/ListQuizes"
import { useDispatch, useSelector } from 'react-redux';
import { getCurEra, getCurSurveys, getEras, getErasResults, getIndexEra, getIndexEraAndSurvey, getIndexSurvey, getSurveys, getSurveysResults } from '../../Selectors/data_selectors';
import { LIST_AGE_PANEL, LIST_SURVEYS_PANEL } from './consts';
import { getFirstPanel } from '../../Selectors/pollView_selectors';


const PoolView = ({id, 
	setIndexEraAction=()=>{}, 
	setIndexSurveyAction=()=>{}, 
	goToSurveyViewAction=()=>{},
	goToResultViewAction=()=>{},
	goToListAgeAction=()=>{}
	}) => {

	const dispatch = useDispatch()


	//Получение данных
	const eras = useSelector(getEras)
	const erasResults = {tottal:0, score:0}
	const eraTitle = useSelector(getCurEra).russianName

	
	const surveys = useSelector(getCurSurveys)
	const surveysResults = {tottal:0, score:0}

	// const indexEra = useSelector(getIndexEra);
	const mustCurrentPanel = useSelector(getFirstPanel); //Проверяем какая панелька должна быть открыта по приказу извне

	const [activePanel, setActivePanel] = useState(mustCurrentPanel);

	const setIndexEra = (indexEra) => dispatch(setIndexEraAction(indexEra))
	const setIndexSurvey = (indexSurvey) => dispatch(setIndexSurveyAction(indexSurvey))
	const goToViewListQuestions = () => dispatch(goToSurveyViewAction())
	const goToResultView = () => dispatch(goToResultViewAction())
	const goToListAge = () => dispatch(goToListAgeAction())

	// История
	const [history, setHistory] = useState([LIST_AGE_PANEL]);

	const goBackInHistory = () => {
		let his = history;
		his.pop()
		if (activePanel === LIST_AGE_PANEL) {
			vkBridge.send('VKWebAppEnableSwipeBack');
		}
		setHistory(his)
		setActivePanel(history[history.length - 1])	
	}

	const goForwardInHistory = (view) => { 
		let his = history;
		his.push(view);
		if (activePanel === LIST_AGE_PANEL) {
			vkBridge.send('VKWebAppDisableSwipeBack');
			setHistory(his)
		}
		else{
			setHistory(his)
		}
	}


	//Проверяем какая панелька должна быть открыта по приказу извне
	useEffect(() => {
		if(mustCurrentPanel === LIST_AGE_PANEL){
			setActivePanel(LIST_AGE_PANEL)
			setHistory([LIST_AGE_PANEL])
		}
		if(mustCurrentPanel === LIST_SURVEYS_PANEL){
			setActivePanel(LIST_SURVEYS_PANEL)
			setHistory([LIST_AGE_PANEL, LIST_SURVEYS_PANEL])

			//Сбрасываем значение начальное панели на значение по умолчанию (панель эр)
			goToListAge()
		}
	}, []);

	
	const onBackListQuizes = () => {
		goBackInHistory(LIST_AGE_PANEL)
	}

	const createOnClickItemAge = (indexEra) => {
		setIndexEra(indexEra);
		goForwardInHistory(LIST_SURVEYS_PANEL);
		setActivePanel(LIST_SURVEYS_PANEL);
	}

	const createOnClickItemQuizes = (indexSurvey) => () => {
		setIndexSurvey(indexSurvey)
		goToViewListQuestions()
	}

	const createOnClickItemQuizesBtn = (indexSurvey) => {
		setIndexSurvey(indexSurvey)
		goToResultView()
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
            title={eraTitle} 
            surveys={surveys} 
			surveysResults={surveysResults}
            onBack={onBackListQuizes} 
            createOnClickItemQuizes={createOnClickItemQuizes}
			createOnClickItemQuizesBtn={createOnClickItemQuizesBtn}
        />

    </View>
    )
}

export default PoolView