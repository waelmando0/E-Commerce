'use client';
import { FC } from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const pathname = usePathname();

	return (
		<div>
			<header>
				<div className='ct py-5 flex items-center justify-between'>
					<Link href='/' className='flex items-center space-x-2'>
						<Icons.logo className='h-6 w-6' />
						<span className='hidden font-bold sm:inline-block'>
							{siteConfig.name}
						</span>
					</Link>
					<nav>
						<ul className='flex items-center gap-3 md:gap-6'>
							<Link
								href='/'
								className={cn(
									'transition-colors hover:text-slate-700',
									pathname === '/' ? 'text-slate-500' : 'text-slate-500'
								)}
							>
								Home
							</Link>{' '}
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
