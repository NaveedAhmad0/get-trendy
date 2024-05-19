import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import userContext from '../../features/Context/Context';
import CommonCarousel from '../../components/Common Carousel/CommonCarousel';
import { ClockLoader } from 'react-spinners';

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
										<h2>Single Product Page</h2>
										<span>
											Awesome &amp; Creative HTML CSS layout by TemplateMo
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section class='section' id='product'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-8'>
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
								<div class='col-lg-4'>
									<div class='right-content'>
										<h4>{productDetails?.name}</h4>
										<span class='price'>
											{productDetails?.price.formatted_with_code} per meter
										</span>

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
