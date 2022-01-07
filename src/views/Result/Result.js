import bridge from '@vkontakte/vk-bridge';
import { View } from "@vkontakte/vkui";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Alert_closeAlert } from '../../components/Alert/actions';
import AlertQuestionResult from "../../components/Alert/AlertQuestionResult/AlertQuestionResult";
import "../../components/ListCard/ListCard.css";
import { getAlert } from '../../Selectors/alert_selectors';
import { getAdsProps, getCurQuestions, getCurSurvey, getResultCurSurvey } from '../../Selectors/data_selectors';
import PanelAnswersQuestions from './PanelAnswersQuestions/PanelAnswersQuestions';
import PanelResult from './PanelResult/PanelResult';
import "./Result.css";

const Result = ({ id, indexesAnswers,
    goToSurveyViewAction=()=>{},
    goToPollViewAction=()=>{},

    setCurSurveyIdAction=()=>{},
    setCurQuestionIdAction=()=>{},

 }) => {

//Получаем необходимые данные
    const dispatch = useDispatch()
    const questions = useSelector(getCurQuestions)
    const curSurvey = useSelector(getCurSurvey)
    const totalResult = useSelector(getResultCurSurvey)

    const curAlert = useSelector(getAlert)
    const closeAlertDisp = () => dispatch(Alert_closeAlert())


//Если мы не первый раз открываем Result, то нам не нужно запускать заново анимацию
    const [isNeedAnim, setIsNeedAnim] = useState(true);


//Внешняя навигация
        const goToSurveyView = () => dispatch(goToSurveyViewAction())
        
        const goToPollView = () => dispatch(goToPollViewAction())

        const setIndexSurvey = (indexSurvey) => dispatch(setCurSurveyIdAction(indexSurvey))
        const setIdQuestion = (idQuestion) => dispatch(setCurQuestionIdAction(idQuestion))

//Работа с панелями
        const PANEL_RESULT = "PANEL_RESULT";
        const PANEL_ANSWERS_QUESTIONS = "PANEL_ANSWERS_QUESTIONS";
        const [activePanel, setActivePanel] = useState(PANEL_RESULT)

        const goToPanelAnswers = () => {
            setActivePanel(PANEL_ANSWERS_QUESTIONS)
            goForwardInHistory(PANEL_ANSWERS_QUESTIONS)
            setIsNeedAnim(false)
        }


//История
        const [history, setHistory] = useState([PANEL_RESULT]);

        const goBackInHistory = () => {
            if(activePanel !== PANEL_RESULT){
                let his = history;
                his.pop()
                bridge.send('VKWebAppEnableSwipeBack');
                // if (activePanel === PANEL_RESULT) {
                    
                // }
                setHistory(his)
                setActivePanel(history[history.length - 1])	
            }
		}

		const goForwardInHistory = (panelId) => { 
			let his = history;
			his.push(panelId);
			if (activePanel === PANEL_RESULT) {
				bridge.send('VKWebAppDisableSwipeBack');
				setHistory(his)
			}
			else{
				setHistory(his)
			}
		}


//Реклама
const [isAdVisible, setAdVisible] = useState(true)
const adsPropsModified = useSelector(getAdsProps)

//Alert

    const [isVisibleAlert, setIsVisibleAlert] = useState(false);

    const openAlert = (indexQuestion) => {
        setIdQuestion(indexQuestion);
        setIsVisibleAlert(true);
    }
    const closeAlert = () =>{
        setIsVisibleAlert(false)
    }

// Поделиться на стене
    const shareToWall = () =>{
        const curSurveyName = curSurvey.russianName;
        const message = `Мой результат в тесте «${curSurveyName}» ${totalResult.score}/${totalResult.total} баллов. \nСможешь повторить?`
        bridge
            .send("VKWebAppShowWallPostBox",{
                "message": message,
                "attachments": "https://vk.com/app7715551"
            })
            .then({})
            .catch(()=>{})



        // bridge.send("VKWebAppShare", {"link": "https://vk.com/app7715551"});
        // bridge
        //     .send("VKWebAppShowInviteBox", {})
        //     .then(data => console.log(data.success))
        //     .catch(error => console.log(error));

        // bridge
        //     .send("VKWebAppShowWallPostBox", {
        //         "message": "",
        //         "attachments": "photo34_408897832,https://vk.com/app7715551"
        //     })
        //     .then(res=>{console.log(res)})
        //     .catch(err=>{console.log(err)})    
    }

//Кнопка назад на андроиде
    const backKeyPressAndroid = event => {
        if(curAlert !== null){
            closeAlertDisp()
        }
        else if(isVisibleAlert){
            closeAlert()
        }
        else{
            goBackInHistory()
        }
    };
        
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

    const backAndroidImmitator = () =>{
        window.history.back()
    }

    return (
        <View 
            id={id} 
            activePanel={activePanel} 
            popout={    
                isVisibleAlert
                ?<AlertQuestionResult
                    onClose={closeAlert}
                >
                </AlertQuestionResult>
                :null
            }
            onSwipeBack={backAndroidImmitator}
            history={history}>

            <PanelResult
                id={PANEL_RESULT}
                isNeedAnim={isNeedAnim}
                adDate={adsPropsModified}
                isAdVisible={isAdVisible}

                goToSurveyView={goToSurveyView}
                goToPollView={goToPollView}
                goToPanelAnswers={goToPanelAnswers}
                shareToWall={shareToWall}

                setAdVisible={setAdVisible}

                setIndexSurvey={setIndexSurvey}
            />

            <PanelAnswersQuestions
                id={PANEL_ANSWERS_QUESTIONS}
                questions={questions}
                indexesAnswers={indexesAnswers}
                onBack={backAndroidImmitator}
                openAlert={openAlert}
            >
            </PanelAnswersQuestions>

        </View>
    )
}

export default Result;
