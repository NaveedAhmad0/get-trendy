import React, { useLayoutEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
const Base = () => {
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0);
		}, [location.pathname]);
		return children;
	};
	return (
		<Wrapper>
			<div>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</Wrapper>
	);
};

export default Base;
