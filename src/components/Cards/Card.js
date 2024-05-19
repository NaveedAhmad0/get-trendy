import React from 'react';

import './card.css';

import cardOneImg1 from '../../assets/images/Slider/CardOne1.JPG';
import cardOneImg2 from '../../assets/images/Slider/CardOne2.JPG';
import cardOneImg3 from '../../assets/images/Slider/CardOne3.JPG';
import cardOneImg4 from '../../assets/images/Slider/CardOne4.JPG';
import cardOneImg5 from '../../assets/images/Slider/CardOne5.JPG';

import cardTwoImg1 from '../../assets/images/Slider/CardTwo1.JPG';
import cardTwoImg2 from '../../assets/images/Slider/CardTwo2.JPG';
import cardTwoImg3 from '../../assets/images/Slider/CardTwo3.JPG';
import cardTwoImg4 from '../../assets/images/Slider/CardTwo4.JPG';
import cardTwoImg5 from '../../assets/images/Slider/CardTwo5.JPG';

import cardThreeImg1 from '../../assets/images/Slider/CardThree1.JPG';
import cardThreeImg2 from '../../assets/images/Slider/CardThree2.JPG';
import cardThreeImg3 from '../../assets/images/Slider/CardThree3.JPG';
import cardThreeImg4 from '../../assets/images/Slider/CardThree4.JPG';
import cardThreeImg5 from '../../assets/images/Slider/CardThree5.JPG';

import cardFourImg1 from '../../assets/images/Slider/CardFour1.JPG';
import cardFourImg2 from '../../assets/images/Slider/CardFour2.JPG';
import cardFourImg3 from '../../assets/images/Slider/CardFour3.JPG';
import cardFourImg4 from '../../assets/images/Slider/CardFour4.JPG';
import cardFourImg5 from '../../assets/images/Slider/CardFour5.JPG';

import leftBannerImg from '../../assets/images/Slider/BigCard.JPG';
import Carousel from 'react-elastic-carousel';
// import leftBannerImg from '../../assets/images/left-banner-image.jpg';

const CartOneArray = [
	{ img: cardOneImg1, key: 1 },
	{ img: cardOneImg2, key: 2 },
	{ img: cardOneImg3, key: 3 },
	{ img: cardOneImg4, key: 4 },
	{ img: cardOneImg5, key: 5 },
];

const CartTwoArray = [
	{ img: cardTwoImg1, key: 1 },
	{ img: cardTwoImg2, key: 2 },
	{ img: cardTwoImg3, key: 3 },
	{ img: cardTwoImg4, key: 4 },
	{ img: cardTwoImg5, key: 5 },
];
const CartThreeArray = [
	{ img: cardThreeImg1, key: 1 },
	{ img: cardThreeImg2, key: 2 },
	{ img: cardThreeImg3, key: 3 },
	{ img: cardThreeImg4, key: 4 },
	{ img: cardThreeImg5, key: 5 },
];

const CartFourArray = [
	{ img: cardFourImg1, key: 1 },
	{ img: cardFourImg2, key: 2 },
	{ img: cardFourImg3, key: 3 },
	{ img: cardFourImg4, key: 4 },
	{ img: cardFourImg5, key: 5 },
];

const Card = () => {
	return (
		<div className='container-fluid hero'>
			<div className='row d-flex'>
				<div className='col-6 '>
					<div className='card cardhover border-0 rounded-0'>
						<img
							src={leftBannerImg}
							className='card-img-top rounded-0 border-0'
							alt='...'
							style={{ height: '567px' }}
						/>
						{/* <div class='hover-content2'>
							<div class='inner'>
								<h4>Women</h4>
								<p className='text-white'>
									Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit
									incid.
								</p>
								<div class='main-border-button'>
									<a href='#/'>Discover More</a>
								</div>
							</div>
						</div> */}
						{/* <div className='card-img-overlay cardOne'>
							<div className='my-auto'>
								<p className='card-text-one text-black'>We Are GetTrendy</p>
								<p className='card-text-small text-black mt-4'>
									Wrap yourself in creativity with our fabrics
								</p>
							</div>
						</div> */}
					</div>
				</div>
				<div className='col-6'>
					<div className='row row-cols-1 row-cols-md-2 g-4'>
						<div className='col'>
							<div
								className='card cardhover rounded-0 border-0'
								style={{ height: '17rem' }}>
								<Carousel
									enableAutoPlay={true}
									pagination={false}
									showArrows={false}>
									{CartOneArray.map((card, index) => (
										<img
											src={card.img}
											className='card-img-top rounded-0 border-0'
											alt='...'
											style={{ height: '17rem' }}
										/>
									))}
								</Carousel>
								{/* <div className='card-img-overlay cardOne rounded-0'>
									<div className='my-auto'>
										<p className='card-text-two text-white'>Women</p>
										<p className='card-text-small text-white mt-4'>
											Best Clothes for women
										</p>
									</div>
								</div> */}
								{/* <div class='hover-content2'>
									<div class='inner'>
										<h4>Women</h4>
										<p className='text-white'>
											Lorem ipsum dolor sit amet, conservisii ctetur adipiscing
											elit incid.
										</p>
										<div class='main-border-button'>
											<a href='#/'>Discover More</a>
										</div>
									</div>
								</div> */}
							</div>
						</div>
						<div className='col'>
							<div
								className='card rounded-0 border-0'
								style={{ height: '17rem' }}>
								<Carousel
									enableAutoPlay={true}
									pagination={false}
									showArrows={false}>
									{CartTwoArray.map((card, index) => (
										<img
											src={card.img}
											className='card-img-top rounded-0 border-0'
											alt='...'
											style={{ height: '17rem' }}
										/>
									))}
								</Carousel>
								{/* <div className='card-img-overlay cardOne rounded-0'>
									<div className='my-auto'>
										<p className='card-text-two text-white'>Men</p>
										<p className='card-text-small text-white mt-4'>
											Best Clothes for Men
										</p>
									</div>
								</div> */}
							</div>
						</div>
						<div className='col'>
							<div
								className='card rounded-0 border-0'
								style={{ height: '17rem' }}>
								<Carousel
									enableAutoPlay={true}
									pagination={false}
									showArrows={false}>
									{CartThreeArray.map((card, index) => (
										<img
											src={card.img}
											className='card-img-top rounded-0 border-0'
											alt='...'
											style={{ height: '17rem' }}
										/>
									))}
								</Carousel>
								{/* <div className='card-img-overlay cardOne rounded-0'>
									<div className='my-auto'>
										<p className='card-text-two text-white'>Kids</p>
										<p className='card-text-small text-white mt-4'>
											Best Clothes for kids
										</p>
									</div>
								</div> */}
							</div>
						</div>
						<div className='col'>
							<div
								className='card rounded-0 border-0'
								style={{ height: '17rem' }}>
								<Carousel
									enableAutoPlay={true}
									pagination={false}
									showArrows={false}>
									{CartFourArray.map((card, index) => (
										<img
											src={card.img}
											className='card-img-top rounded-0 border-0'
											alt='...'
											style={{ height: '17rem' }}
										/>
									))}
								</Carousel>
								{/* <div className='card-img-overlay cardOne rounded-0'>
									<div className='my-auto'>
										<p className='card-text-two text-white'>Ghay</p>
										<p className='card-text-small text-white mt-4'>
											Best Clothes for LGTV
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
