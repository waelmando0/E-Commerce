'use client';
import { FC } from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Button from './ui/button';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const pathname = usePathname();

	return (
		<header>
			<div className='ct py-6 flex items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<Icons.logo className='h-6 w-6' />
					<span className='hidden font-bold sm:inline-block'>
						{siteConfig.name}
					</span>
				</Link>
				<nav>
					<ul className='flex items-center gap-3 md:gap-6'>
						<Button>
							<Link href='/signIn'>Log In</Link>
						</Button>
						<Button variant='outline'>
							<Link href='/signUp'>Sign Up</Link>
						</Button>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
