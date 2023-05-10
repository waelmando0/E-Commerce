import Product from '@/components/Product';

const page = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const products: Product[] = await res.json();

	return (
		<section className='ct py-10'>
			<h1 className='text-4xl lg:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
				DEALS OF THE DAY
			</h1>

			<div className='py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-8'>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default page;
