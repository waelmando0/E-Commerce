'use client';

import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio/dist';
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
				<AspectRatio ratio={1 / 1}>
					<Image
						src={product.image}
						alt={product.title}
						fill
						sizes='(max-width: 640px) 40vw, (max-width: 768px) 30vw, 25vw'
						className={cn(
							'object-contain ease-in-out duration-700 group-hover:opacity-75 rounded-md border bg-white p-4',
							loading
								? 'scale-110 blur-2xl grayscale'
								: 'scale-100 blur-0 grayscale-0'
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</AspectRatio>
			) : (
				<AspectRatio ratio={1 / 1}>
					<Image
						src={product.image}
						alt={product.title}
						fill
						className={cn(
							'object-contain ease-in-out duration-700 group-hover:opacity-75 rounded-md border bg-white p-4',
							loading
								? 'scale-110 blur-2xl grayscale'
								: 'scale-100 blur-0 grayscale-0'
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</AspectRatio>
			)}
		</>
	);
};

export default ProductImage;
