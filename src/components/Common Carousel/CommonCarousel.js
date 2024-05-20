import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Link } from 'react-router-dom';

const CommonCarousel = ({ filteredData, title, description }) => {
	return (
		<div>
			<div className='section' id='men'>
				<div
					className='container-fluid text-left'
					style={{ padding: '0px 38px' }}>
					<div className='row text-left'>
						<div className='section-heading'>
							<h2>{title}</h2>
							<span>{description}</span>
						</div>
					</div>
				</div>
				<div className='container-fluid '>
					<div className='row'>
						<div className='col-lg-12'>
							<Carousel
								showArrows={false}
								// pagination={false}
								itemPadding={[10, 50]}
								enableSwipe
								itemsToShow={5}>
								{filteredData.map((item, index) => (
									<div className='item' key={index}>
										<div className='thumb'>
											<div className='hover-content'>
												<ul>
													<li>
														<Link to={`/product/${item.id}`}>
															<i className='fa fa-eye'></i>{' '}
														</Link>
													</li>

													<li>
														<Link to={`/product/${item.id}`}>
															<i class='fa fa-shopping-cart'></i>
														</Link>
													</li>
												</ul>
											</div>
											<img
												src={item?.image.url}
												alt=''
												className='rounded'
												style={{ width: '230px', height: '250px' }}
											/>
										</div>
										<div className='down-content '>
											<h5>{item?.name}</h5>
											<span>{item?.price.formatted_with_code}</span>
										</div>
									</div>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommonCarousel;
