import Link from 'next/link';
import ProductImage from './ProductImage';
import { Icons } from './icons';

type Props = {
	product: Product;
};

function Product({ product }: Props) {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className='z-0 h-full rounded-lg border bg-white p-2 shadow hover:bg-gray-50 dark:hover:bg-gray-900 md:p-4 '>
					<ProductImage product={product} fill />
					<p className='inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 my-2 bg-slate-800 text-slate-100 '>
						{product.category}
					</p>
					<h2 className='mb-1 line-clamp-2 text-xs  md:text-sm'>
						<span title={product.title}>{product.title}</span>
					</h2>
					<p className='mb-2 text-base font-bold md:text-lg'>
						${product.price}
					</p>
					<div className='flex items-center gap-1'>
						<Icons.stars
							className='fill-yellow-500 text-yellow-500'
							size={16}
						/>
						<div className='flex h-4 items-center space-x-1 text-xs text-muted-foreground md:space-x-2'>
							<span>{product.rating.rate}</span>
							<span className='text-foreground/30'>|</span>
							<span>{product.rating.count} Sold out</span>
						</div>
					</div>
				</article>
			</Link>
		</li>
	);
}

export default Product;
