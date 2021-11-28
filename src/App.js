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
				<Route path='*' element={<MainMap />} />
				<Route path='/' element={<MainMap />} />
				<Route path='section/:id' element={<SectionMap />} />
			</Routes>
		</>
	);
}

export default App;
