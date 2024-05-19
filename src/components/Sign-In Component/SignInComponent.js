import React, { useContext, useEffect, useState } from 'react';
import Signinpic from '../../assets/images/signinpic.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../lib/firebase.utils';
import { toast } from 'react-toastify';
import userContext from '../../features/Context/Context';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [iconToggle, setIconToggle] = useState(false);
	const { email, password } = formFields;
	const navigate = useNavigate();
	const { currentUser } = useContext(userContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async (event) => {
		event.preventDefault();
		await signInWithGooglePopup().then(() => {
			toast.success('SIGNED');
			alert('Login Successfull!');
			navigate('/');
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password).then(() => {
				resetFormFields();
				navigate('/');
			});
		} catch (error) {
			console.log('user sign in failed', error);
			alert(error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	useEffect(() => {
		if (currentUser) {
			// alert('Already Logged In');
			navigate('/');
		}
	});
	return (
		<div className='contact-us'>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-6'>
						<img src={Signinpic} className='img-fluid' alt='signin' />
					</div>
					<div className='col-6'>
						<div class='section-heading'>
							<h2>Already have an account?</h2>
							<span>Sign in with you email and password.</span>
							<br />
						</div>
						<form id='contact' action='' method='post'>
							<div class='row'>
								<div class='col-lg-12'>
									<fieldset>
										<input
											name='email'
											type='text'
											id='email'
											placeholder='Your email'
											onChange={handleChange}
											value={email}
											required=''
										/>
									</fieldset>
								</div>
								<div class='col-lg-12 mt-4  '>
									<fieldset>
										<input
											name='password'
											type={iconToggle ? 'password' : 'text'}
											id='password'
											onChange={handleChange}
											value={password}
											placeholder='Password'
											required=''
										/>
										{iconToggle ? (
											<FaEyeSlash
												size={20}
												onClick={() => setIconToggle(!iconToggle)}
												className='eyeIcon'
											/>
										) : (
											<FaEye
												size={20}
												onClick={() => setIconToggle(!iconToggle)}
												className='eyeIcon'
											/>
										)}
									</fieldset>
								</div>

								<div class='col-lg-12 justify-content-between mt-4'>
									<fieldset />
									<button
										style={{ width: '100px' }}
										// type='submit'
										// id='form-submit'
										class='main-dark-button'
										onClick={handleSubmit}>
										SIGN IN
									</button>
									<button
										style={{ width: '200px' }}
										// type='submit'
										// id='form-submit'
										class='main-dark-button ms-5'
										onClick={(event) => signInWithGoogle(event)}>
										SIGN IN WITH GOOGLE
									</button>
								</div>
								<div class='section-heading mt-4'>
									<span>
										Dont have an account?
										<Link to={'/sign-up'} className='mt-4 text-primary'>
											{' '}
											Sign up here!
										</Link>
									</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInComponent;
