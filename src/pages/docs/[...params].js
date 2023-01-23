import { useRouter } from 'next/router';

const Doc = () => {
	const router = useRouter();
	const { params } = router.query;
	console.log(params);
	if (params) {
		return <h1> viewwing {params}</h1>;
	}
	return <div>Doc</div>;
};

export default Doc;
