import './App.css';
import { Footer } from './components/Footer/Footer';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
function App() {
	return (
		<div className="root">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
