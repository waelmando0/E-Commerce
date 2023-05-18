import ProductImage from '@/components/ProductImage';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
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
			<section className='ct'>
				<div className='my-4 md:py-8'>
					<Link href='/'>
						<Button variant='subtle'>
							<Icons.arrowLeft className='mr-1 w-4 h-4' />
							Back
						</Button>
					</Link>
				</div>
				<article className='grid grid-cols-1 gap-6 md:grid-cols-[0.7fr,1fr] md:gap-12 xl:grid-cols-2'>
					<ProductImage product={product} />
					<div>
						<p className='inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 my-2  bg-slate-800 text-slate-100 '>
							{product.category}
						</p>
						<h1 className='mb-2 text-base font-bold md:text-2xl lg:text-2xl'>
							Product Detail: {product.title}
						</h1>
						<div className='mb-4 flex items-center gap-1'>
							<Icons.stars
								size={16}
								className='fill-yellow-500 text-yellow-500'
							/>
							<div className='flex h-4 items-center space-x-1 text-xs md:space-x-2'>
								<span>{product.rating.rate}</span>
								<span className='text-foreground/30'>|</span>
								<span>{product.rating.count} Sold out</span>
							</div>
						</div>
						<p className='mb-2 text-xl font-bold md:text-4xl'>
							${product.price}
						</p>
						<Separator className='my-4' />
						<p className='mb-3 text-xs text-foreground md:text-base'>
							{product.description}
						</p>
					</div>
				</article>
			</section>
		);
	} catch (error) {
		notFound();
	}
};

export default productPage;
