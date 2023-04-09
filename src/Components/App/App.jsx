import '../../Style/Reset.scss'
import KatalogPage from '../../Pages/KatalogPage/KatalogPage';
import AppRouter from '../../Utils/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';
import CoverPages from "../../Pages/CoverPages/CoverPages";
function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
