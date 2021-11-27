import React, { useState } from 'react'
import Product from '../components/Product'
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox'

const HomeScreen = () => {
    const [loading, error, products] = useState({});

    return (
		<div>
			{loading ? (
				<Loading></Loading>
			) : error ? (
				<MessageBox variant="danger text-center">{error}</MessageBox>
			) : (
				<>
					<Product products={products}></Product> 
				</>
			)}
		</div>
	);
}

export default HomeScreen
