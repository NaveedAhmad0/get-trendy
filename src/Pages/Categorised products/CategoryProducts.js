/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import userContext from '../../features/Context/Context';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import { Descriptions } from './Description';
import './category.css';
// import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CategoryProducts = () => {
	AOS.init();
	const { fetchProdByCategory, dataByCategory, toggleData } =
		useContext(userContext);

	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [togglePage, setTogglePage] = useState(false);

	const productsPerPage = 20;
	const { id } = useParams();

	// Calculate total number of pages
	const totalPages = Math.ceil(dataByCategory.length / productsPerPage);

	// Calculate index of the first and last product on the current page
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = dataByCategory.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

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
		fetchProdByCategory(id);

		// Use setTimeout to update the message after 3000 milliseconds (3 seconds)
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 3000);

		// Cleanup function to clear the timeout if the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		fetchProdByCategory(id);
	}, [location.pathname]);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname, togglePage]);
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const textType =
		id === 'chiffon'
			? Descriptions.CHIFFON
			: id === 'silk'
			? Descriptions.SILK
			: id === 'cotton'
			? Descriptions.COTTON
			: id === 'organza'
			? Descriptions.ORGANZA
			: id === 'nylon'
			? Descriptions.NYLON
			: id === 'linen'
			? Descriptions.LINEN
			: id === 'polyster'
			? Descriptions.POLYESTER
			: id === 'lycra'
			? Descriptions.LYCRA
			: id === 'velvet' && Descriptions.VELVET;

	let str =
		id === 'chiffon'
			? Descriptions.CHIFFON_PROS
			: id === 'silk'
			? Descriptions.SILK_PROS
			: id === 'cotton'
			? Descriptions.COTTON_PROS
			: id === 'organza'
			? Descriptions.ORGANZA_PROS
			: id === 'nylon'
			? Descriptions.NYLON_PROS
			: id === 'linen'
			? Descriptions.LINEN_PROS
			: id === 'polyster'
			? Descriptions.POLYESTER_PROS
			: id === 'lycra'
			? Descriptions.LYCRA_PROS
			: id === 'velvet' && Descriptions.VELVET_PROS;
	let result = str.split(',');
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
					<div class='page-heading2' id='top'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='inner-content'>
										{/* <h2>{capitalizeFirstLetter(id)} Products</h2> */}
										<h2>{id.toUpperCase()} FABRIC</h2>
										<span
											// className='typewriter'
											data-aos='fade-up'
											data-aos-anchor-placement='top-bottom'>
											{textType}
											{/* <Typewriter
											onInit={(typewriter) => {
												typewriter
													.typeString(textType)
													.pauseFor(1000)
													.deleteAll()
													.typeString(textType)
													.start();
											}}
										/> */}
										</span>
										<br />
										<div className='row mt-5 '>
											{/* {result.map((text, index) => (
												<div
													class='text-white col-lg-3 text-left'
													data-aos='fade-up'
													data-aos-delay='350'>
													<span className='text-left' key={index}>
														{text},
													</span>
												</div>
											))} */}
											<div
												class='text-white col-lg-12 text-left'
												data-aos='fade-up'
												data-aos-delay='350'>
												<span className='text-left'>{str},</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='row mt-3'></div>
						</div>
					</div>
					<section class='section' id='products'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='section-heading'>
										<h2>Our Latest Fabrics</h2>
										<span>Check out all of our products.</span>
									</div>
								</div>
							</div>
						</div>
						<div class='container'>
							<div class='row'>
								{currentProducts?.map((product, index) => (
									<div class='col-lg-3' key={index}>
										<div class='item'>
											<div class='thumb' data-aos='fade-up' data-aos-delay='50'>
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
													width={200}
													height={290}
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

export default CategoryProducts;
