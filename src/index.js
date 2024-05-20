// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import { store } from './app/store';
// // import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { UserProvider } from './features/Context/Context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<UserProvider>
// 		<App />
// 	</UserProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './assets/css/templatemo-hexashop.css';
import './assets/css/owl-carousel.css';
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './features/Context/Context';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Base from './components/Base/Base';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/Products/SingleProduct';
import AboutUs from './Pages/About Us/AboutUs';
import ContactUs from './Pages/Contact Us/ContactUs';
import Checkout from './Pages/Checkout/Checkout';
import SignIn from './Pages/Sign-In page/SignIn';
import SignUpComponent from './components/Sing-up Component/SignUpComponent';
import CategoryProducts from './Pages/Categorised products/CategoryProducts';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Base />}>
			<Route path='' element={<Home />} />
			<Route path='products/' element={<Products />} />
			<Route path='product/:id' element={<SingleProduct />} />
			<Route path='about-us' element={<AboutUs />} />
			<Route path='contact-us' element={<ContactUs />} />
			<Route path='checkout' element={<Checkout />} />
			<Route path='category-product/:id' element={<CategoryProducts />} />
			<Route path='login' element={<SignIn />} />
			<Route path='sign-up' element={<SignUpComponent />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<RouterProvider router={router} />
	</UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
