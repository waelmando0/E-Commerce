'use client';
import { FC } from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<header className='border-b border-slate-200 bg-white fixed top-0 z-50 w-full'>
			<nav className='ct h-16 flex items-center justify-between gap-4'>
				<Link href='/' className='flex items-center gap-2'>
					<Icons.logo className='h-5 w-5' />
					<span className='hidden font-bold md:inline-block'>
						{siteConfig.name}
					</span>
				</Link>

				<div className='flex'>
					<Link
						href='https://github.com/waelmando0/E-Commerce'
						target='_blank'
						rel='noreferrer'
					>
						<div
							className={buttonVariants({
								size: 'sm',
								variant: 'ghost',
							})}
						>
							<Icons.gitHub className='h-5 w-5' />
							<span className='sr-only'>GitHub</span>
						</div>
					</Link>
					<Link
						href='https://twitter.com/waelmando0'
						target='_blank'
						rel='noreferrer'
					>
						<div
							className={buttonVariants({
								size: 'sm',
								variant: 'ghost',
							})}
						>
							<Icons.Twitter className='h-5 w-5' />
							<span className='sr-only'>GitHub</span>
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
