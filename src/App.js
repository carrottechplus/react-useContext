import { useState } from 'react';
import { LoginContext } from './context/LoginContext';
import Content from './Content';
import Header from './Header';

function App() {
	const [Login, setLogin] = useState(false);

	return (
		<LoginContext.Provider value={{ Login, setLogin }}>
			{/* 객체 표현을 위한 {}  를 감싸는 리액트 문법 {} */}
			<main>
				<Header />
				<Content />
			</main>
		</LoginContext.Provider>
	);
}

export default App;
