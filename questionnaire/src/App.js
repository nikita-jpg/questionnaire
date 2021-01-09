import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import PropTypes from 'prop-types';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Quiz from './panels/Quiz/Quiz';

const App = ({ quizzes }) => {
	const createQuizId = currentIndex => `quiz_${currentIndex}`;

	const [activePanel, setActivePanel] = useState(createQuizId(0));
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

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
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const createGoLeftQuiz = currentIndex => () => { setActivePanel(createQuizId(currentIndex - 1)) };

	const createGoRightQuiz = currentIndex => () => { setActivePanel(createQuizId(currentIndex + 1)) };

	return (
		<View activePanel={activePanel} popout={popout} header={false}>
			{
				quizzes.map((quizze, i) => (
					<Quiz
						id={createQuizId(i)}
						key={createQuizId(i)}
						quizze={quizze}
						goLeftQuiz={createGoLeftQuiz(i)}
						goRightQuiz={createGoRightQuiz(i)}
						hasRightQuiz={i < quizzes.length - 1}
						hasLeftQuiz={i > 0}
					/>
				))
			}
		</View>
	);
}

export default App;

