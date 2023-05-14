import ProductImage from '@/components/ProductImage';
import { notFound } from 'next/navigation';

interface productPageProps {
	params: {
		productId: string;
	};
}

const productPage = async ({ params: { productId } }: productPageProps) => {
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
		const product: Product = await res.json();

		return (
			<section className='ct py-10'>
				<div className='max-w-5xl mx-auto flex gap-12 p-8 mt-12'>
					<ProductImage product={product} />

					<div className='divide-y'>
						<div className='space-y-2 pb-8'>
							<h1 className='text-2xl md:text-4xl font-bold'>
								{product.title}
							</h1>
							<h2 className='text-gray-500 font-bold text-xl md:text-3xl'>
								${product.price}
							</h2>
						</div>

						<div className='pt-8'>
							<p className='text-xs md:text-sm'>{product.description}</p>
						</div>
					</div>
				</div>
			</section>
		);
	} catch (error) {
		notFound();
	}
};

export default productPage;
