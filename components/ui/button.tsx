import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Icons } from '../icons';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				default: 'bg-slate-900 text-white hover:bg-slate-800',
				destructive: 'bg-red-500 text-white hover:bg-red-600 ',
				outline: 'bg-transparent border border-slate-200 hover:bg-slate-100 ',
				subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200 ',
				ghost: 'bg-transparent hover:text-foreground hover:bg-slate-200',
				link: 'bg-transparent underline-offset-4 hover:underline text-foreground hover:bg-transparent',
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-3 rounded-md',
				lg: 'h-11 px-8 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
	className,
	isLoading,
	children,
	variant,
	size,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? (
				<Icons.spinner className='animate-spin h-5 w-5 mr-3' />
			) : null}
			{children}
		</button>
	);
};
Button.displayName = 'Button';

export { Button, buttonVariants };
