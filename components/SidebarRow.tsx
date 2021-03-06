import Image from 'next/image';

const SidebarRow = ({
	src,
	title,
	Icon,
}: {
	src?: string;
	Icon?: any;
	title?: string;
}): JSX.Element => {
	return (
		<div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer '>
			{src && (
				<Image
					src={src}
					loading='lazy'
					width={30}
					height={30}
					layout='fixed'
					className='rounded-full'
				/>
			)}
			{Icon && <Icon className='h-8 w-8 text-blue-500' />}
			<p className='hidden sm:inline-flex font-medium'>{title}</p>
		</div>
	);
};

export default SidebarRow;
