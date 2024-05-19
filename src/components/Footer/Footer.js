import React, { useContext } from 'react';
import footerImage from '../../assets/images/LogoNav(1).jpeg';
import { Link } from 'react-router-dom';
import userContext from '../../features/Context/Context';
// import footerImage from '../../assets/images/white-logo.png';
const Footer = () => {
	const { setToggleData } = useContext(userContext);
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<div className='first-item'>
							<div className='logo'>
								<img
									src={footerImage}
									width={200}
									alt='GetTrendy ecommerce templatemo'
								/>
							</div>
							<ul style={{ padding: 0 }}>
								<li>
									<a href='/#'>
										16501 Collins Ave, Sunny Isles Beach, FL 33160, United
										States
									</a>
								</li>
								<li>
									<a href='/#'>GetTrendy@company.com</a>
								</li>
								<li>
									<a href='/#'>010-020-0340</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3'>
						<h4>Shopping &amp; Categories</h4>
						<ul style={{ padding: 0 }}>
							<li onClick={() => setToggleData(false)}>
								<Link
									to={{
										pathname: '/category-product/chiffon',
									}}>
									Chiffon
								</Link>
							</li>
							<li onClick={() => setToggleData(false)}>
								<Link
									to={{
										pathname: '/category-product/silk',
									}}>
									Silk
								</Link>
							</li>
							<li onClick={() => setToggleData(false)}>
								<Link
									to={{
										pathname: '/category-product/polyster',
									}}>
									Polyster
								</Link>
							</li>
							<li onClick={() => setToggleData(false)}>
								<Link
									to={{
										pathname: '/category-product/nylon',
									}}>
									Nylon
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-lg-3'>
						<h4>Useful Links</h4>
						<ul style={{ padding: 0 }}>
							<li>
								<Link to={'/'}>HomePage</Link>
							</li>
							<li>
								<Link to={'about-us'}>About Us</Link>
							</li>

							<li>
								<Link to={'contact-us'}>Contact Us</Link>
							</li>
							<li>
								<Link to={'products'}>Products</Link>
							</li>
						</ul>
					</div>
					<div className='col-lg-3'>
						<h4>Help &amp; Information</h4>
						<ul style={{ padding: 0 }}>
							<li>
								<a href='/#'>Help</a>
							</li>
							<li>
								<a href='/#'>FAQ's</a>
							</li>
							<li>
								<a href='/#'>Shipping</a>
							</li>
							<li>
								<a href='/#'>Tracking ID</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-12'>
						<div className='under-footer'>
							<p>
								Copyright © 2024 GetTrendy Co., Ltd. All Rights Reserved.
								<br />
							</p>
							<ul style={{ padding: 0 }}>
								<li>
									<a href='/#'>
										<i className='fa fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										<i className='fa fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										<i className='fa fa-linkedin'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										<i className='fa fa-behance'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
