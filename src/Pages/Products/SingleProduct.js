import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import userContext from '../../features/Context/Context';
import CommonCarousel from '../../components/Common Carousel/CommonCarousel';
import { ClockLoader } from 'react-spinners';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
// import prodImg2 from '../../assets/images/Slider/CardOne2.JPG';
const description =
	'Details to details is what makes GetTrendy different from the other themes.';

const SingleProduct = () => {
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();

	const {
		productDetails,
		fetchProduct,
		toggleData,
		currentUser,
		dataByCategory,
		addItemToCart,
	} = useContext(userContext);

	useEffect(() => {
		if (localStorage.getItem('token') || currentUser) {
			fetchProduct(id);
		} else {
			alert('Please login first!');
			navigate('/login');
		}
	}, [id, toggleData]);
	useEffect(() => {
		// Use setTimeout to update the message after 3000 milliseconds (3 seconds)
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 4000);

		// Cleanup function to clear the timeout if the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			{!toggleData ? (
				<div className='container-fluid'>
					<div className='row justify-content-center'>
						<ClockLoader color='black' size={50} />
					</div>
				</div>
			) : (
				<div>
					<div class='page-heading' id='top'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='inner-content'>
										<h2>Product Details</h2>
										<span>
											Discover the finest collection of premium fabrics, crafted
											to inspire your next masterpiece with unparalleled quality
											and elegance.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section class='section' id='product'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-7'>
									<div class='left-images'>
										<img
											src={productDetails?.image?.url}
											alt=''
											width={300}
											height={500}
										/>
										{/* <img src={prodImg2} alt='' /> */}
									</div>
								</div>
								<div class='col-lg-5'>
									<div class='right-content'>
										<h4>{productDetails?.name}</h4>
										<span class='price'>
											{productDetails?.price.formatted_with_code} per meter
										</span>
										<div
											className='price d-flex'
											style={{ borderBottom: '1px solid #eee' }}>
											<div>
												<p className=' text-success'>Availability : {''}</p>
											</div>
											<div>
												<span class='ms-2'>
													{''} {productDetails?.sku} in stock
												</span>
											</div>
										</div>

										<span> Product Description</span>
										<div class='quote'>
											<i class='fa fa-quote-left'></i>
											<p
												className='mt-4'
												dangerouslySetInnerHTML={{
													__html: productDetails?.description,
												}}
											/>
										</div>

										<div class='quantity-content'>
											<div class='left-content'>
												<h6>Quantity:</h6>
											</div>
											<div class='right-content'>
												<div class='quantity buttons_added'>
													<input
														type='button'
														value='-'
														class='minus'
														onClick={() => {
															if (quantity >= 2) {
																setQuantity(quantity - 1);
															}
														}}
													/>
													<input
														type='text'
														step='1'
														min='1'
														max=''
														name='quantity'
														value={quantity}
														title='Qty'
														class='input-text qty text'
														size='4'
														pattern=''
														inputmode=''
													/>
													<input
														type='button'
														value='+'
														class='plus'
														onClick={() => setQuantity(quantity + 1)}
													/>
												</div>
											</div>
										</div>
										<div class='total'>
											<h4>Total: INR {productDetails?.price.raw * quantity}</h4>
											<div class='main-border-button'>
												<button
													onClick={() =>
														addItemToCart(productDetails.id, quantity)
													}>
													Add To Cart
												</button>
											</div>
										</div>
										<div class='quantity-content' style={{ paddingTop: 0 }}>
											<MDBAccordion flush initialActive={1}>
												<MDBAccordionItem
													collapseId={1}
													headerTitle='Shipping & Return Policy'>
													<span
														style={{
															fontWeight: '700',
															color: 'black',
															marginTop: 0,
														}}>
														Return Policy:
													</span>
													<br />
													Our fabrics are put through a rigorous 30-step quality
													check throughout the entire production process. From
													the lining of the threads to the beading of the
													embroidery - everything is looked into with a keen eye
													and cleared for packaging and shipping. Due to these
													strict measures, our production quality is
													unparalleled. Owing to the nature of the trade, once a
													fabric has been cut out and delivered it cannot be
													returned to us as it's been cut per your individual
													requirement and order quantity, which varies from
													order to order.
													<span
														className='mt-3'
														style={{
															fontWeight: '700',
															color: 'black',
															marginTop: 0,
														}}>
														Shipping Policy:
													</span>
													<br />
													<ul style={{ paddingLeft: '0' }}>
														<li>
															We ship across India. For international
															deliveries, please contact us.
														</li>
														<li>
															Orders are shipped within 24-48 hours of being
															confirmed. All orders are shipped by FedEx,
															Delhivery or Bluedart.
														</li>
														<li>
															It takes approximately 3 - 5 business days to
															deliver your product. Sometimes delivery may take
															longer due to bad weather, flight/transportation
															delays, political disruptions and/or other
															unforeseen circumstances.
														</li>
													</ul>
												</MDBAccordionItem>
												<MDBAccordionItem
													collapseId={2}
													headerTitle='Washing Instruction'>
													Dry Wash only
												</MDBAccordionItem>
												<MDBAccordionItem
													collapseId={3}
													headerTitle='Disclaimer'>
													Product specifications are a close approximate in
													value. Expect a slight variation in colour. There will
													always be a minor variation in the colour you see on
													your computer screen/phone display and the one that is
													received on the fabric since the technologies involved
													for display and printing are different. A customer
													must place an order keeping this slight colour
													variation in mind. Please note - no returns shall be
													accepted on the basis of colour and description
													discrepancy.
												</MDBAccordionItem>
											</MDBAccordion>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<CommonCarousel
								title={'More from this collection'}
								description={description}
								filteredData={dataByCategory}
							/>
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default SingleProduct;
