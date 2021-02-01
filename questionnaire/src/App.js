import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Quiz from './panels/Quiz/Quiz';
import { Alert, Panel, Root } from '@vkontakte/vkui';
import Question from './panels/Question/Question';
import Result from './panels/Result/Result';
import preloadImages from './preloadImages';

import "./App.css";
import StartWindow from './panels/StartWindow/StartWindow';
import ListAge from './panels/ListAge/ListAge';
import ListQuizes from './panels/ListQuizes/ListQuizes';

const App = ({ eras }) => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const enablePopout = () => setPopout(<ScreenSpinner size='large' />);
	const disablePopout = () => setPopout(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			disablePopout();
		}
		fetchData();
	}, []);

	// логика переключения между View
	const VIEW_ID_START_WINDOW = "VIEW_ID_START_WINDOW";
	const VIEW_ID_LIST_AGE = "VIEW_ID_LIST_AGE";
	const VIEW_ID_QUIZES = "VIEW_ID_QUIZES";
	const VIEW_ID_QUESTIONES = "VIEW_ID_QUESTIONES";
	const VIEW_ID_RESULT = "VIEW_ID_RESULT";

	const [activeView, setActiveView] = useState(VIEW_ID_QUIZES);

	const goToViewStartWindow = () => setActiveView(VIEW_ID_START_WINDOW);
	const goToViewListAge = () => setActiveView(VIEW_ID_LIST_AGE);
	const goToViewQuizes = () => setActiveView(VIEW_ID_QUIZES);
	const goToViewQuestions = () => setActiveView(VIEW_ID_QUESTIONES);
	const goToViewResult = () => setActiveView(VIEW_ID_RESULT);

	// логика хранения индексов
	const [indexAge, setIndexAge] = useState(0);
	const [indexQuiz, setIndexQuiz] = useState(0);
	const [indexResuslt, setIndexResult] = useState(0);

	// функции для ListAge
	const createOnClickItemAge = (index) => () => {
		setIndexAge(index);
		goToViewQuizes();
	}

	// функции для ListQuizes
	const onBack = () => {
		goToViewListAge();
	}

	const createOnClickItemQuizes = (index) => () => {
		setIndexQuiz(index);
		goToViewQuizes();
	}

	return (
		<Root activeView={activeView}>
			<StartWindow 
				id={VIEW_ID_START_WINDOW} 
				onClick={goToViewListAge}
			/>

			<ListAge 
				id={VIEW_ID_LIST_AGE} 
				eras={eras} 
				createOnClickItemAge={createOnClickItemAge}
			/>

			<ListQuizes 
				id={VIEW_ID_QUIZES} 
				title={eras[indexAge].shortTitle} 
				quizes={eras[indexAge].quizzes} 
				onBack={onBack} 
				createOnClickItemQuizes={createOnClickItemQuizes}
			/>
		</Root>
	);
}

export default App;
