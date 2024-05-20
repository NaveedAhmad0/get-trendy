/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import logo from '../../assets/images/LogoNav(1).jpeg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userContext from '../../features/Context/Context';
import { signOutUser } from '../../lib/firebase.utils';

const Navbar = () => {
	const {
		retrieveCart,
		cartDetails,
		fetchCategories,
		currentUser,
		toggleCart,
		setToggleData,
		removeItemFromCart,
	} = useContext(userContext);
	const navigate = useNavigate();

	useEffect(() => {
		retrieveCart();
	}, [toggleCart]);

	useEffect(() => {
		if (currentUser) {
			retrieveCart();
		}
		fetchCategories();
	}, []);

	return (
		<div className='mb-5'>
			<header className='header-area header-sticky'>
				<div className='container-fluid px-5'>
					<div className='row'>
						<div className='col-12'>
							<nav className='main-nav'>
								<Link to={'/'} className='logo'>
									<img alt='img' src={logo} width={150} />
								</Link>

								<ul className='nav'>
									<li className='scroll-to-section'>
										<NavLink
											to={'/'}
											className={({ isActive }) =>
												`${isActive ? 'text-black' : 'text-gray'}`
											}>
											Home
										</NavLink>
										{/* <a href='#top' className='active'>
											Home
										</a> */}
									</li>
									<li className='scroll-to-section'>
										<Link to={'about-us'}>About Us</Link>
									</li>
									<li className='scroll-to-section active'>
										<Link to='products'>Products</Link>
									</li>
									<li className='submenu'>
										<a href='/'>Categories</a>
										<ul className='subMenuUl d-flex'>
											<div className='col-4'>
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
											</div>
											<div className='col-4'>
												<li onClick={() => setToggleData(false)}>
													<Link
														to={{
															pathname: '/category-product/organza',
														}}>
														Organza
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
												<li onClick={() => setToggleData(false)}>
													<Link
														to={{
															pathname: '/category-product/lycra',
														}}>
														Lycra
													</Link>
												</li>
											</div>
											<div className='col-4'>
												<li onClick={() => setToggleData(false)}>
													<Link to={'/category-product/velvet'}>Velvet</Link>
												</li>
												<li onClick={() => setToggleData(false)}>
													<Link
														to={{
															pathname: '/category-product/linen',
														}}>
														Linen
													</Link>
												</li>
												<li onClick={() => setToggleData(false)}>
													<Link
														to={{
															pathname: '/category-product/cotton',
														}}>
														Cotton
													</Link>
												</li>
											</div>
										</ul>
									</li>

									<li className='scroll-to-section'>
										<Link to={'contact-us'}>Contact Us</Link>
									</li>
									{/* 
									<li className='submenu'>
										<a href='/'>Pages</a>
										<ul className='subMenuUl'>
											<li className='d-flex'>
												<div className='mini-cart-thumb col-2'>
													<a href='#ser'>
													<img src='assets/images/cart/1.jpg' alt='' />
													</a>
												</div>
												<div className='mini-cart-heading col-10'>
													<h5>
														<a href='#ser'>Aloe vera - herbal</a>
													</h5>
													<span>2 x $140.00</span>
												</div>
											</li>
											<li></li>
											<li>
												<a href='single-product.html'>Single Product</a>
											</li>
											<li>
												<a href='contact.html'>Contact Us</a>
											</li>
										</ul>
									</li> */}

									<li className='scroll-to-section'>
										{currentUser ? (
											<button
												className='LogoutButton'
												onClick={() => {
													localStorage.clear();
													signOutUser().then(() => navigate('/login'));
												}}>
												Logout
											</button>
										) : (
											<button
												className='LogoutButton'
												onClick={() => navigate('/login')}>
												Login
											</button>
										)}
									</li>
									{currentUser && (
										<li className='scroll-to-section'>
											<div className='cart-link'>
												<a href='/'>
													<i className='fa fa-shopping-cart'></i>
													<span className='text-black'>
														{cartDetails?.total_items
															? cartDetails?.total_items
															: 0}
													</span>
												</a>
												{/* <Link to={'cart'}>
												</Link> */}
												<ul className='list-none cart-dropdown'>
													{cartDetails?.line_items?.length === 0 ? (
														<div className='innerBox d-flex'>
															<li className='my-auto'>
																<h6 className='text-center text-danger'>
																	Your Cart is empty!
																</h6>
															</li>
														</div>
													) : (
														<div className='innerBox'>
															{cartDetails?.line_items.map((cart, index) => (
																<li key={index}>
																	<div className='mini-cart-thumb'>
																		<a href='#ser'>
																			<img src={cart.image.url} alt='' />
																		</a>
																	</div>
																	<div className='mini-cart-heading'>
																		<p className='text-wrap'>{cart.name}</p>
																		<span>
																			{cart.quantity} x{' '}
																			{cart.price.formatted_with_symbol}
																		</span>
																	</div>
																	<div class='mini-cart-remove'>
																		<button
																			onClick={() =>
																				removeItemFromCart(cart.id)
																			}>
																			<i
																				class='fa fa-trash-o'
																				aria-hidden='true'></i>
																		</button>
																	</div>
																</li>
															))}
														</div>
													)}

													<li className='mini-cart-bttom d-flex justify-content-between px-4'>
														<div className='mini-cart-total '>
															<h5 className=''>
																Total:{' '}
																{cartDetails?.subtotal.formatted_with_symbol}
															</h5>
														</div>
														<div className='text-black'>
															<p>
																<Link
																	to={
																		cartDetails?.line_items.length > 0 &&
																		cartDetails?.hosted_checkout_url
																	}
																	style={{
																		color:
																			cartDetails?.line_items.length > 0
																				? '#636363'
																				: 'grey',
																	}}>
																	Checkout
																</Link>
															</p>
														</div>
													</li>
												</ul>
											</div>
										</li>
									)}
								</ul>
								<a className='menu-trigger' href='/'>
									<span>Menu</span>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
