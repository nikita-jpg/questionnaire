import vkBridge from '@vkontakte/vk-bridge';
import { View } from "@vkontakte/vkui";
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurSurveys, getEras } from '../../Selectors/data_selectors';
import { getFirstPanel } from '../../Selectors/pollView_selectors';
import ListAge from "../ListAge/ListAge";
import ListQuizes from "../ListQuizes/ListQuizes";
import { LIST_AGE_PANEL, LIST_SURVEYS_PANEL } from './consts';


const PoolView = ({id,
	setIndexEraAction=()=>{}, 
	setIndexSurveyAction=()=>{}, 
	goToSurveyViewAction=()=>{},
	goToResultViewAction=()=>{},
	goToListAgeAction=()=>{},
	}) => {

	const dispatch = useDispatch()


	//Получение данных
	const eras = useSelector(getEras)
	const erasResults = {tottal:0, score:0}

	
	const surveys = useSelector(getCurSurveys)

	const mustCurrentPanel = useSelector(getFirstPanel); //Проверяем какая панелька должна быть открыта по приказу извне

	const [activePanel, setActivePanel] = useState(mustCurrentPanel);

	const setIndexEra = (indexEra) => dispatch(setIndexEraAction(indexEra))
	const setIndexSurvey = (indexSurvey) => dispatch(setIndexSurveyAction(indexSurvey))
	const goToViewListQuestions = () => {
		dispatch(goToSurveyViewAction())
	}
	const goToResultView = () => {
		dispatch(goToResultViewAction())
	}
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
		setActivePanel(LIST_AGE_PANEL)		
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
		goBackInHistory()
	}

	const createOnClickItemAge = (indexEra) => {
		setIndexEra(indexEra);
		goForwardInHistory(LIST_SURVEYS_PANEL);
		setActivePanel(LIST_SURVEYS_PANEL)
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
	const backAndroidImmitator = () =>{
        window.history.back()
    }    
	const backKeyPressAndroid = event => {goBackInHistory()};
	
	  const cbRef = useRef(backKeyPressAndroid);
	
	  useEffect(() => {
		cbRef.current = backKeyPressAndroid;
	  });
	
	  useEffect(() => {
		const cb = e => cbRef.current(e);
		window.addEventListener("popstate", cb);
	
		return () => {
		  window.removeEventListener("popstate", cb);
		};
	  }, []);
	

    return(
        <View 
            id={id}
            activePanel={activePanel}
            onSwipeBack={backAndroidImmitator}
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