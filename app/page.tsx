import Product from '@/components/Product';
import ProductList from '@/components/product-list';

const page = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const products: Product[] = await res.json();

	return (
		<section className='ct py-10'>
			<h1 className='text-4xl lg:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
				DEALS OF THE DAY
			</h1>

			<ProductList>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductList>
		</section>
	);
};

export default page;
