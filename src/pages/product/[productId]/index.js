import { useRouter } from 'next/router';

const Product = () => {
	const router = useRouter();
	const { productId } = router.query;
	console.log(productId);
	return <div>Product {productId}</div>;
};

export default Product;
