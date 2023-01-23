import Link from 'next/link';
import React from 'react';

const ProductsList = () => {
	return (
		<>
			<Link href='/'>Home</Link>
			<Link href='/product/1'>Prod 1</Link>
			<Link href='/product/2'>Prod 2</Link>
			<Link href='/product/3'>Prod 3</Link>
		</>
	);
};

export default ProductsList;
