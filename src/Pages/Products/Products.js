/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import userContext from '../../features/Context/Context';
import { Link, useLocation } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

const Products = () => {
	const { fetchAllProd, data } = useContext(userContext);

	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [togglePage, setTogglePage] = useState(false);
	const productsPerPage = 20;

	// Calculate total number of pages
	const totalPages = Math.ceil(data.length / productsPerPage);

	// Calculate index of the first and last product on the current page
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

	// Function to handle page change
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	function Pagination({ className, totalPages, currentPage, onPageChange }) {
		const pageNumbers = [];

		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}

		return (
			<div class={className}>
				<ul>
					{pageNumbers.map((number) => (
						<li key={number} className={currentPage === number ? 'active' : ''}>
							<button
								onClick={() => {
									onPageChange(number);
									setTogglePage(!togglePage);
								}}>
								{number}
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}

	useEffect(() => {
		fetchAllProd({ limit: 200 });
		// Use setTimeout to update the message after 3000 milliseconds (3 seconds)
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 3000);

		// Cleanup function to clear the timeout if the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname, togglePage]);

	return (
		<>
			{loading ? (
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
										<h2>Check Our Products</h2>
										<span>
											Awesome &amp; Creative HTML CSS layout by TemplateMo
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section class='section' id='products'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='section-heading'>
										<h2>Our Latest Products</h2>
										<span>Check out all of our products.</span>
									</div>
								</div>
							</div>
						</div>
						<div class='container'>
							<div class='row'>
								{currentProducts?.map((product, index) => (
									<div class='col-lg-4' key={index}>
										<div class='item'>
											<div class='thumb'>
												<div class='hover-content'>
													<ul>
														<li>
															<Link to={`/product/${product?.id}`}>
																<i class='fa fa-eye'></i>
															</Link>
														</li>

														<li>
															<Link to={`/product/${product?.id}`}>
																<i
																	class='fa fa-shopping-cart'
																	onClick={() => console.log(product?.id)}></i>
															</Link>
														</li>
													</ul>
												</div>
												<img
													src={product?.image?.url}
													width={300}
													height={390}
													alt=''
												/>
											</div>
											<div class='down-content'>
												<h4>{product?.name}</h4>
												<span>{product?.price?.formatted_with_code}/mt</span>
											</div>
										</div>
									</div>
								))}

								<div class='col-lg-12'>
									<Pagination
										className={'pagination2'}
										totalPages={totalPages}
										currentPage={currentPage}
										onPageChange={handlePageChange}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default Products;