import React, { createContext, useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Client from 'shopify-buy';
import { commerce } from '../../lib/commerce';
import { toast } from 'react-toastify';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from '../../lib/firebase.utils';

const userContext = createContext();

export const UserProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [dataByCategory, setDataByCategory] = useState([]);
	const [productDetails, setProductDetails] = useState();
	const [cartDetails, setCartDetails] = useState();
	const [toggleCart, setToggleCart] = useState(false);
	const [toggleData, setToggleData] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	const client = Client.buildClient({
		domain: 'gettrendyyyyy.myshopify.com',
		storefrontAccessToken: '8b627d00233754f51b742c1d332414b0',
		// domain: '2a9d97-67.myshopify.com',
		// storefrontAccessToken: '8091539b39142fb8887959392617c351',
	});

	// FETCHING PRODUCTS
	const fetchProduct = async (id) => {
		try {
			await commerce.products
				.retrieve(id)
				.then((product) => {
					setProductDetails(product);
					fetchProdByCategory(product.categories[0].slug);
					console.log(product);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const fetchAllProd = async ({ limit }) => {
		try {
			await commerce.products.list({ limit: limit }).then((products) => {
				toast.success('Added to the cart!');
				console.log(products?.data);
				setData(products?.data);
			});
		} catch (error) {
			console.log('Error:', error);
		}
	};

	const fetchProdByCategory = async (categorySlug) => {
		try {
			await commerce.products
				.list({ category_slug: categorySlug, limit: 20 })
				.then((products) => {
					console.log('ProductByCategory', products?.data);
					setToggleData(true);
					setDataByCategory(products?.data);
				});
		} catch (error) {
			console.log('Error:', error);
		}
	};

	// FETCHING CATEGORIES

	const fetchCategories = async () => {
		try {
			await commerce.categories
				.list()
				.then((category) => console.log(category.data));
		} catch (error) {
			console.log('Error:', error);
		}
	};

	// ADDING TO CART
	const addItemToCart = async (id, quantity) => {
		try {
			await commerce.cart.add(id, quantity).then((response) => {
				console.log('Cart', response);
				setToggleCart(!toggleCart);
				if (response.success === true) {
					alert('Added to the cart!');
				}
			});
		} catch (error) {
			console.log('Error:', error);
		}
	};

	const retrieveCart = async () => {
		try {
			await commerce.cart.retrieve().then((cart) => {
				console.log(cart);
				setCartDetails(cart);
			});
		} catch (error) {
			console.log('Error:', error);
		}
	};

	const removeItemFromCart = async (itemId) => {
		try {
			await commerce.cart.remove(itemId).then((response) => {
				console.log(response);
				setToggleCart(!toggleCart);
				alert('Item Removed Successfully!');
			});
		} catch (error) {
			console.log('Error:', error);
		}
	};

	// isLogged in

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return (
		<userContext.Provider
			value={{
				client,
				fetchProduct,
				data,
				setData,
				dataByCategory,
				setDataByCategory,
				fetchAllProd,
				productDetails,
				fetchProdByCategory,
				fetchCategories,
				addItemToCart,
				retrieveCart,
				cartDetails,
				toggleCart,
				setToggleCart,
				currentUser,
				toggleData,
				setToggleData,
				removeItemFromCart,
			}}>
			{children}
		</userContext.Provider>
	);
};

export default userContext;
