import React from 'react';
import AboutusPic from '../../assets/images/about-left-image.jpg';
import TeamPic1 from '../../assets/images/team-member-01.jpg';
import TeamPic2 from '../../assets/images/team-member-02.jpg';
import TeamPic3 from '../../assets/images/team-member-03.jpg';
const AboutUs = () => {
	return (
		<div>
			<div class='page-heading about-page-heading' id='top'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='inner-content'>
								<h2>About Our Company</h2>
								<span>Awesome, clean &amp; creative HTML5 Template</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='about-us'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div class='left-image'>
								<img src={AboutusPic} alt='' />
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='right-content'>
								<h4>About Us &amp; Our Skills</h4>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod kon tempor incididunt ut labore.
								</span>
								<div class='quote'>
									<i class='fa fa-quote-left'></i>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiuski smod kon tempor incididunt ut labore.
									</p>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod kon tempor incididunt ut labore et dolore magna
									aliqua ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip.
								</p>
								<ul>
									<li>
										<a href='#/'>
											<i class='fa fa-facebook'></i>
										</a>
									</li>
									<li>
										<a href='#/'>
											<i class='fa fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href='#/'>
											<i class='fa fa-linkedin'></i>
										</a>
									</li>
									<li>
										<a href='#/'>
											<i class='fa fa-behance'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class='our-team'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='section-heading'>
								<h2>Our Amazing Team</h2>
								<span>
									Details to details is what makes GetTrendy different from the
									other themes.
								</span>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='team-item'>
								<div class='thumb'>
									<div class='hover-effect'>
										<div class='inner-content'>
											<ul>
												<li>
													<a href='#/'>
														<i class='fa fa-facebook'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-twitter'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-linkedin'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-behance'></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<img src={TeamPic1} alt='pic' />
								</div>
								<div class='down-content'>
									<h4>Ragnar Lodbrok</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='team-item'>
								<div class='thumb'>
									<div class='hover-effect'>
										<div class='inner-content'>
											<ul>
												<li>
													<a href='#/'>
														<i class='fa fa-facebook'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-twitter'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-linkedin'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-behance'></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<img src={TeamPic2} alt='pic' />
								</div>
								<div class='down-content'>
									<h4>Ragnar Lodbrok</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='team-item'>
								<div class='thumb'>
									<div class='hover-effect'>
										<div class='inner-content'>
											<ul>
												<li>
													<a href='#/'>
														<i class='fa fa-facebook'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-twitter'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-linkedin'></i>
													</a>
												</li>
												<li>
													<a href='#/'>
														<i class='fa fa-behance'></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<img src={TeamPic3} alt='pic' />
								</div>
								<div class='down-content'>
									<h4>Ragnar Lodbrok</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
