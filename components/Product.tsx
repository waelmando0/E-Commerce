import Link from 'next/link';
import ProductImage from './ProductImage';

type Props = {
	product: Product;
};

function Product({ product }: Props) {
	return (
		<Link
			href={`/product/${product.id}`}
			className='h-96 p-4 flex flex-col gap-4 bg-slate-50  rounded-md border group hover:scale-105 transition-transform ease-out duration-200'
		>
			<div className='relative flex-1'>
				<ProductImage product={product} fill />
			</div>

			<div>
				<div className='text-lg font-semibold leading-none tracking-tight flex items-center justify-between mb-2 '>
					<p className='w-44 truncate '>{product.title}</p>
					<p>${product.price}</p>
				</div>

				<p className='italic text-xs w-64 line-clamp-2 text-gray-600 '>
					{product.description}
				</p>
			</div>
		</Link>
	);
}

export default Product;
