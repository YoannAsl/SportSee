import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Header />
				<Switch>
					{/* Pour etre redirige directement vers une page utilisateur en ouvrant le projet */}
					<Route exact path='/'>
						<Redirect to='/user/12' />
					</Route>
					<Route
						path='/user/:id'
						render={(routeProps) => <UserPage {...routeProps} />}
					/>
					<Route component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
