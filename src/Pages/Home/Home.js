import React, { useContext, useEffect } from 'react';
import Card from '../../components/Cards/Card';
import CommonCarousel from '../../components/Common Carousel/CommonCarousel';
import userContext from '../../features/Context/Context';

const Home = () => {
	const description =
		'Details to details is what makes GetTrendy different from the other themes.';

	const { fetchAllProd, data } = useContext(userContext);

	// const categorySlug = ['silk ', 'chiffon'];
	const limit = 200;

	const filteredSilk = data
		.filter((item) => item.categories[0].slug === 'silk')
		.slice(0, 8);
	const filteredChiffon = data
		.filter((item) => item.categories[0].slug === 'chiffon')
		.slice(0, 8);
	const filteredVelvet = data
		.filter((item) => item.categories[0].slug === 'velvet')
		.slice(0, 8);
	console.log('ITEMS', filteredChiffon, filteredSilk);

	useEffect(() => {
		fetchAllProd({ limit });
		// fetchCategories();
	}, []);

	return (
		<div>
			<Card />
			<CommonCarousel
				filteredData={filteredSilk}
				title={'Silk'}
				description={description}
			/>
			<CommonCarousel
				filteredData={filteredChiffon}
				title={'Chiffon'}
				description={description}
			/>
			<CommonCarousel
				filteredData={filteredVelvet}
				title={'Velvet'}
				description={description}
			/>
		</div>
	);
};

export default Home;
