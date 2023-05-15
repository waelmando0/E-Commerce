'use client';
import { FC } from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import Button from './ui/button';

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

				<div className='hidden gap-2 sm:flex'>
					<Button size='sm' variant='subtle'>
						<Link href='/signIn'>Log In</Link>
					</Button>
					<Button size='sm'>
						<Link href='/signUp'>Register</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
