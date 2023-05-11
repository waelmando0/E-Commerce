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
				<div className=' max-w-5xl mx-auto flex gap-12 p-8 mt-12 bg-slate-50 rounded-md border-b border-slate-200'>
					<ProductImage product={product} />

					<div className='divide-y mt-16'>
						<div className='space-y-2 pb-8'>
							<h2 className='text-2xl md:text-4xl font-bold'>
								{product.title}
							</h2>
							<p className='text-slate-800 text-xl md:text-3xl font-extrabold'>
								${product.price}
							</p>
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
