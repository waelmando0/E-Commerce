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
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '@waelmando0',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
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
					<main className='flex-grow'>{children}</main>
				</div>
			</body>
		</html>
	);
}
