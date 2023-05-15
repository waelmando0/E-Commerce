import { Inter as FontSans } from 'next/font/google';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/Navbar';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Next.js',
		'React',
		'TypeScript',
		'Tailwind CSS',
		'Server Components',
		'Radix UI',
	],
	authors: [
		{
			name: 'wael mando',
			url: 'https://twitter.com/waelmando0',
		},
	],
	creator: 'waelmando',

	// manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={fontSans.className}>
			<head />
			<body>
				<div className='main'>
					<div className='gradient'></div>
				</div>
				<div className='flex flex-col min-h-screen overflow-hidden relative z-10'>
					<Navbar />
					<main className='flex-grow py-16'>{children}</main>
				</div>
			</body>
		</html>
	);
}
