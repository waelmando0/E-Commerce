'use client';

import ProductImage from '@/components/ProductImage';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Dialog } from '@headlessui/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Modal() {
	let [isOpen, setIsOpen] = useState(true);
	const id = useParams().productId;
	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		async function fetchProduct() {
			setLoading(true);
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const product = await res.json();

			setProduct(product);

			setLoading(false);
		}

		fetchProduct();
	}, [id]);

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				setIsOpen(false);
				router.back();
			}}
			className='relative z-50'
		>
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div className='fixed inset-0 bg-black/30' aria-hidden='true' />

			{/* Full-screen scrollable container */}
			<div className='fixed inset-0 overflow-y-auto'>
				{/* Container to center the panel */}
				<div className='flex min-h-full items-center justify-center p-4'>
					{/* The actual dialog panel  */}
					<Dialog.Panel className='mx-auto max-w-3xl rounded-lg bg-white p-2 md:p-4 shadow'>
						{loading ? (
							<div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin' />
						) : (
							<div className='flex gap-x-8 h-96'>
								{product?.image && (
									<div className='relative w-1/2 h-full hidden md:inline'>
										<ProductImage product={product} fill />
									</div>
								)}
								<div className='flex-1 flex flex-col'>
									<div className='flex-1'>
										<p className='inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 my-2  bg-slate-800 text-slate-100 '>
											{product?.category}
										</p>
										<h4 className='font-semibold'>{product?.title}</h4>
										<p className='font-medium text-sm'>${product?.price}</p>

										<div className='flex items-center text-sm my-4 gap-2'>
											{product?.rating.rate && (
												<div className='flex items-center'>
													{/* Display 5 stars but display the rate ones as StarIconOutline  */}
													{Array.from(
														{ length: Math.floor(product.rating.rate) },
														(_, i) => (
															<Icons.stars
																key={i}
																className='h-4 w-4 text-yellow-500 fill-current'
															/>
														)
													)}

													{/* Display the rest of the stars as StarIconOutline  */}
													{Array.from(
														{ length: 5 - Math.floor(product.rating.rate) },
														(_, i) => (
															<Icons.stars
																key={i}
																className='h-4 w-4 text-yellow-500'
															/>
														)
													)}
												</div>
											)}
											<p>{product?.rating.rate}</p>
											<span className='text-foreground/30'>|</span>
											<p>See all {product?.rating.count} reviews</p>
										</div>

										<p className='line-clamp-5 text-sm '>
											{product?.description}
										</p>
									</div>

									<div className='space-y-3 text-sm'>
										<Button className='w-full'>Add to bag</Button>
										<Button
											onClick={() => window.location.reload()}
											className='w-full'
											variant='outline'
										>
											View full details
										</Button>
									</div>
								</div>
							</div>
						)}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
}

export default Modal;
