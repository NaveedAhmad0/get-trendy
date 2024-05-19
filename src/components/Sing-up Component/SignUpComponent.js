import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupimg from '../../assets/images/SignUpPic.jpg';
import 'react-toastify/dist/ReactToastify.css';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../lib/firebase.utils';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpComponent = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [iconToggle, setIconToggle] = useState(false);

	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('user creation encountered an error', error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='contact-us'>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-6'>
						<img
							src={signupimg}
							className='img-fluid shadow bg-white rounded'
							height={600}
							alt='signup'
						/>
					</div>
					<div className='col-md-6 '>
						<div class='section-heading'>
							<h2>Dont have an account?</h2>
							<span>Sign up with you email and password.</span>
						</div>
						<form id='contact' action='' method='post'>
							<div class='row'>
								<div class='col-lg-6'>
									<fieldset>
										<input
											name='displayName'
											type='text'
											id='displayName'
											value={displayName}
											placeholder='Display name'
											required=''
											onChange={handleChange}
										/>
									</fieldset>
								</div>
								<div class='col-lg-6'>
									<fieldset>
										<input
											name='email'
											type='text'
											id='email'
											value={email}
											placeholder='Your email'
											required=''
											onChange={handleChange}
										/>
									</fieldset>
								</div>
								<div class='col-lg-12 mt-4  '>
									<fieldset>
										<input
											name='password'
											type='password'
											value={password}
											id='email'
											placeholder='Password'
											required=''
											onChange={handleChange}
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
								<div class='col-lg-12'>
									<fieldset>
										<input
											name='confirmPassword'
											type='password'
											id='confirmPasssword'
											value={confirmPassword}
											placeholder='Confirm Password'
											required=''
											onChange={handleChange}
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

								<div class='col-lg-12 mt-4'>
									<fieldset />
									<button
										style={{ width: '100px' }}
										// type='submit'
										// id='form-submit'
										class='main-dark-button'
										onClick={(e) => {
											handleSubmit(e);
										}}>
										SIGN UP
									</button>
								</div>
								<div class='section-heading mt-4'>
									<span>
										Already have an account?
										<Link to={'/login'} className='mt-4 text-primary'>
											{' '}
											Login here!
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

export default SignUpComponent;
