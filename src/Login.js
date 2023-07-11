import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Login() {
	const login = useContext(LoginContext); //어떤걸 활성화시킬건지
	return (
		<article>
			<button onClick={() => login.setLogin(true)}>Login</button>
			<button onClick={() => login.setLogin(false)}>Logout</button>
		</article>
	);
}

export default Login;
