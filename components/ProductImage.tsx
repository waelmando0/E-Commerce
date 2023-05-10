'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC, useState } from 'react';

interface ProductImageProps {
	product: Product;
	fill?: boolean;
}

const ProductImage: FC<ProductImageProps> = ({ product, fill }) => {
	const [loading, setLoading] = useState(true);

	return (
		<>
			{fill ? (
				<Image
					src={product.image}
					alt={product.title}
					fill
					className={cn(
						'object-contain ease-in-out duration-700 group-hover:opacity-75',
						loading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					)}
					onLoadingComplete={() => setLoading(false)}
				/>
			) : (
				<Image
					src={product.image}
					alt={product.title}
					width={400}
					height={1000}
					className={cn(
						'object-contain duration-700 ease-in-out group-hover:opacity-75',

						loading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					)}
					onLoadingComplete={() => setLoading(false)}
				/>
			)}
		</>
	);
};

export default ProductImage;
