import {
	AlertTriangle,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
	Command,
	CreditCard,
	File,
	FileText,
	HelpCircle,
	Image,
	Loader2,
	LucideProps,
	MoreVertical,
	Pizza,
	Plus,
	Settings,
	Trash,
	User,
	LucideArrowRight,
	Star,
	X,
	MoonIcon,
	SunIcon,
	Github,
	Laptop2,
	type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
	logo: Command,
	close: X,
	spinner: Loader2,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	trash: Trash,
	post: FileText,
	page: File,
	media: Image,
	settings: Settings,
	billing: CreditCard,
	ellipsis: MoreVertical,
	add: Plus,
	warning: AlertTriangle,
	user: User,
	arrowRight: ArrowRight,
	help: HelpCircle,
	pizza: Pizza,
	check: Check,
	stars: Star,
	moon: MoonIcon,
	sun: SunIcon,
	laptop: Laptop2,
	github: Github,
	ArrowRight: LucideArrowRight,
	Twitter: ({ ...props }: LucideProps) => (
		<svg
			width='24'
			height='24'
			className='fill-current'
			aria-hidden='true'
			focusable='false'
			data-prefix='fab'
			data-icon='twitter'
			role='img'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z'></path>
		</svg>
	),
	Facebook: ({ ...props }: LucideProps) => (
		<svg
			width='24'
			height='24'
			className='fill-current'
			aria-hidden='true'
			focusable='false'
			data-prefix='fab'
			data-icon='facebook'
			role='img'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z'></path>
		</svg>
	),
};
