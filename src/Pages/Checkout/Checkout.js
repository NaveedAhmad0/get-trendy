/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../checkout.css';
import userContext from '../../features/Context/Context';

const Checkout = () => {
	const navigate = useNavigate();
	const { retrieveCart, cartDetails, currentUser } = useContext(userContext);

	useEffect(() => {
		if (currentUser) {
			retrieveCart();
		}
	}, []);
	return (
		<div>
			<div>
				<div class='banner-area page-banner'>
					<div class='container'>
						<div class='row align-items-center h-100'>
							<div class='col-sm-12'>
								<div class='page-banner-text text-black text-center'>
									<h2>Checkout</h2>
									<ul class='site-breadcrumb text-black'>
										<li>
											<Link to={'/'}>Home</Link> <span>{'>'}</span>
										</li>
										<li>
											<a href='#/'>Shop</a> <span>{'>'}</span>
										</li>
										<li>Shopping Cart</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='checkout-area mt-95 sm-mt-75'>
					<div class='container'>
						{/* <div class='row'>
							<div class='col-lg-12'>
								<p>
									Returning customer? <a href='#/'>Click here</a> to login
								</p>
							</div>
						</div> */}
						<div class='row mt-10'>
							<div class='col-lg-8'>
								<div class='billing-form'>
									<h4>Billing Address</h4>
									<form action='#'>
										<div class='row'>
											<div class='col-lg-3 align-items-center'>
												<label>COUNTRY *</label>
											</div>
											<div class='col-lg-9'>
												<select>
													<option>Bangladesh</option>
													<option>India</option>
													<option>United States</option>
													<option>Australia</option>
													<option>Brazil</option>
												</select>
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>FIRST NAME *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>LAST NAME *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										{/* <div class='row'>
											<div class='col-lg-3'>
												<label>COMPANY NAME</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div> */}
										<div class='row'>
											<div class='col-lg-3'>
												<label>ADDRESS *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' placeholder='Street Address' />
												<input
													type='text'
													placeholder='Apartment, suite, unite ect (optinal)'
													class='sm-mt-30'
												/>
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>TOWN / CITY *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>COUNTRY / STATES</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>POSTCODE / ZIP *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>EMAIL ADDRESS *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
										<div class='row'>
											<div class='col-lg-3'>
												<label>PHONE *</label>
											</div>
											<div class='col-lg-9'>
												<input type='text' />
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class='col-lg-4'>
								<div class='sidebar-checkout'>
									<h4>Promotional Code</h4>
									<div class='cart-coupon style-2'>
										<p>Enter your coupon code if you have one</p>
										<input type='text' placeholder='Coupon code' />
										<button class='btn-common'>APPLY</button>
									</div>
								</div>
								<div class='order-details mt-30 sm-mt-50'>
									<h4>Your Order</h4>
									<div class='order-details-inner'>
										<table>
											<thead>
												<tr>
													<th>PRODUCT</th>
													<th>TOTAL</th>
												</tr>
											</thead>
											<tbody>
												{cartDetails?.line_items.map((item, index) => (
													<tr key={index}>
														<td
															className='text-wrap'
															style={{ width: '190px' }}>
															{item.name}
														</td>
														<td>
															{/* <strong> */}
															{item.quantity} x{' '}
															{item.price.formatted_with_symbol}
															{/* </strong> */}
														</td>
													</tr>
												))}

												<tr>
													<td>Cart Subtotal</td>
													<td>
														<strong>
															{cartDetails?.subtotal.formatted_with_symbol}
														</strong>
													</td>
												</tr>
												<tr>
													<td>Shipping and Handling</td>
													<td>Free Shipping</td>
												</tr>
												<tr>
													<td>ORDER TOTAL</td>
													<td>
														<strong>
															{cartDetails?.subtotal.formatted_with_symbol}
														</strong>
													</td>
												</tr>
											</tbody>
										</table>
										<div class='payment-gateways my-3'>
											{/* <div class='single-payment-gateway'>
												<input type='radio' id='system2' />
												<label for='system2'>Cheque Payment</label>
											</div> */}
											<div class='single-payment-gateway'>
												<input type='radio' id='system3' />
												<label for='system3'>Paypal</label>
											</div>
										</div>
										<div class='place-order text-center mt-4'>
											<button
												className='btn-common w-75 border-0'
												onClick={() => navigate('/order-complete')}>
												Place order
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
