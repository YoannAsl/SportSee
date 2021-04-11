// import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Header />
				<LeftNav />
				<Switch>
					{/* Pour etre redirige directement vers une page utilisateur en ouvrant le projet */}
					<Route exact path='/'>
						<Redirect to='/user/1' />
					</Route>
					<Route path='/user/:id' component={UserPage} />
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
