import './App.css';

import './assets/css/templatemo-hexashop.css';
import './assets/css/owl-carousel.css';
import Home from './Pages/Home/Home';

require('dotenv').config();
function App() {
	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
