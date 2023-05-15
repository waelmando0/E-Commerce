import { FC } from 'react';

interface ProductListProps {
	children: React.ReactNode;
}

const ProductList: FC<ProductListProps> = ({ children }) => {
	return (
		<ul className='grid grid-cols-2 gap-2 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6 my-8'>
			{children}
		</ul>
	);
};

export default ProductList;
