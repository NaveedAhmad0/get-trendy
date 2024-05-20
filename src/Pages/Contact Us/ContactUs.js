/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const ContactUs = () => {
	return (
		<div>
			<div class='page-heading about-page-heading' id='top'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='inner-content'>
								<h2>Contact Us</h2>
								<span>Got a question? Ask us anytime!</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='contact-us'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6'>
							<div id='map'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6654904722973!2d74.83186731513576!3d31.63430648134264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197c12178f2397%3A0xd052584d8ef7f666!2sGuru%20Nanak%20Dev%20University!5e0!3m2!1sen!2sin!4v1620318519402!5m2!1sen!2sin'
									width='100%'
									height='400px'
									frameborder='0'
									style={{ border: 0 }}
									allowfullscreen=''
									aria-hidden='false'
									tabindex='0'></iframe>
							</div>
						</div>
						<div class='col-lg-6'>
							<div class='section-heading'>
								<h2>Say Hello. Don't Be Shy!</h2>
								<span>
									Details to details is what makes GetTrendy different from the
									other themes.
								</span>
							</div>
							<form id='contact' action='' method='post'>
								<div class='row'>
									<div class='col-lg-6'>
										<fieldset>
											<input
												name='name'
												type='text'
												id='name'
												placeholder='Your name'
												required=''
											/>
										</fieldset>
									</div>
									<div class='col-lg-6'>
										<fieldset>
											<input
												name='email'
												type='text'
												id='email'
												placeholder='Your email'
												required=''
											/>
										</fieldset>
									</div>
									<div class='col-lg-12'>
										<fieldset>
											<textarea
												name='message'
												rows='6'
												id='message'
												placeholder='Your message'
												required=''></textarea>
										</fieldset>
									</div>
									<div class='col-lg-12'>
										<fieldset />
										<button
											type='submit'
											id='form-submit'
											class='main-dark-button'>
											<i class='fa fa-paper-plane'></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class='subscribe'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-8'>
							<div class='section-heading'>
								<h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
								<span>
									Details to details is what makes GetTrendy different from the
									other themes.
								</span>
							</div>
							<form id='subscribe' action='' method='get'>
								<div class='row'>
									<div class='col-lg-5'>
										<fieldset>
											<input
												name='name'
												type='text'
												id='name'
												placeholder='Your Name'
												required=''
											/>
										</fieldset>
									</div>
									<div class='col-lg-5'>
										<fieldset>
											<input
												name='email'
												type='text'
												id='email'
												pattern='[^ @]*@[^ @]*'
												placeholder='Your Email Address'
												required=''
											/>
										</fieldset>
									</div>
									<div class='col-lg-2'>
										<fieldset>
											<button
												type='submit'
												id='form-submit'
												class='main-dark-button'>
												<i class='fa fa-paper-plane'></i>
											</button>
										</fieldset>
									</div>
								</div>
							</form>
						</div>
						<div class='col-lg-4'>
							<div class='row'>
								<div class='col-6'>
									<ul>
										<li>
											Phone:
											<br />
											<span>010-020-0340</span>
										</li>
										<li>
											Office Location:
											<br />
											<span>Amritsar</span>
										</li>
									</ul>
								</div>
								<div class='col-6'>
									<ul>
										<li>
											Email:
											<br />
											<span>shaziasadaf18@gmail.com</span>
										</li>
										<li>
											Social Media:
											<br />
											<span>
												<a href='#/'>Facebook</a>, <a href='#/'>Instagram</a>,{' '}
												<a href='#/'>Behance</a>, <a href='#/'>Linkedin</a>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
