import SectionMap from './components/SectionMap/SectionMap';
import MainMap from './components/MainMap/MainMap';
import NavMenu from './components/NavMenu/NavMenu';

import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<NavMenu />
			<Routes>
				<Route exact path='/' element={<MainMap />}></Route>
				<Route
					exact
					path='/section/:id'
					element={<SectionMap />}
				></Route>
			</Routes>
		</>
	);
}

export default App;
