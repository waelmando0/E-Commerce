'use client';
import { FC } from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/button';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const pathname = usePathname();

	return (
		<header className='border border-b border-slate-200'>
			<div className='ct py-2 flex items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<Icons.logo className='h-5 w-5' />
					<span className='hidden font-bold sm:inline-block'>
						{siteConfig.name}
					</span>
				</Link>
				<nav>
					<ul className='flex items-center gap-2'>
						<Button size='sm' variant='subtle'>
							<Link href='/signIn'>Log In</Link>
						</Button>
						<Button size='sm'>
							<Link href='/signUp'>Register</Link>
						</Button>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
