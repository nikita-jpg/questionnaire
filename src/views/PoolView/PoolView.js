import React, { useState } from 'react';
import vkBridge from '@vkontakte/vk-bridge'
import { View } from "@vkontakte/vkui"
import ListAge from "../ListAge/ListAge"
import ListQuizes from "../ListQuizes/ListQuizes"
import * as selectors from './selector'
import { useSelector } from 'react-redux';

// логика переключения между Панелями
const PANEL_ID_LIST_AGE = "PANEL_ID_LIST_AGE";
const PANEL_ID_LIST_QUIZES = "PANEL_ID_LIST_QUIZES";

const PoolView = ({id, indexAge}) => {

	const [activePanel, setActivePanel] = useState(PANEL_ID_LIST_AGE);

	// История
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

	const onBackListQuizes = () => {
		goBackInHistory(PANEL_ID_LIST_AGE)
	}

	const createOnClickItemAge = (index) => () => {
		goForwardInHistory(PANEL_ID_LIST_QUIZES);
		setActivePanel(PANEL_ID_LIST_QUIZES);
	}

	const createOnClickItemQuizes = (index) => () => {
		console.log(index)
		// goToViewListQuestions();
	}

    const eras = useSelector(selectors.getEras)
        
    return(
        <View 
            id={id}
            activePanel={activePanel}
            onSwipeBack={goBackInHistory}
            history={history}
        >

        <ListAge 
            id={PANEL_ID_LIST_AGE} 
            eras={eras} 
            createOnClickItemAge={createOnClickItemAge}
        />

        <ListQuizes 
            id={PANEL_ID_LIST_QUIZES} 
            title={eras[indexAge].russianName} 
            quizes={eras[indexAge].subset} 
            onBack={onBackListQuizes} 
            createOnClickItemQuizes={createOnClickItemQuizes}
        />

    </View>
    )
}

export default PoolView