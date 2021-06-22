import Image from 'next/image';
import {
	BellIcon,
	HomeIcon,
	ChevronDownIcon,
	ChatIcon,
	UserGroupIcon,
	ViewGridIcon,
} from '@heroicons/react/solid';
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/client';

const Header = () => {
	const [session] = useSession();

	const HeaderCenterIconClassNames =
		'h-5 cursor-pointer text-grey-500 lg:px-10 md:px-3 sm:h-7 mx-auto hover:bg-gray-100 rounded-full active:border-b-2 active:border-blue-500 hover:text-blue-500';
	const HeaderRightIconClassNames =
		'h-10 w-10 bg-gray-200 text-gray-700 hover:bg-gray-300 hidden xl:inline-flex rounded-full p-2 ';

	return (
		<div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
			<div className='flex items-center '>
				<Image
					src='https://links.papareact.com/5me'
					loading='lazy'
					width={40}
					height={40}
					layout='fixed'
				/>
				<div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
					<SearchIcon className='h-6 text-gray-500' />
					<input
						type='text'
						placeholder='Search FB Clone'
						className='ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex'
					/>
				</div>
			</div>

			<div className='flex justify-center flex-grow'>
				<div className='flex space-x-6 items-center '>
					<HomeIcon
						className={`${HeaderCenterIconClassNames} text-blue-500`}
					/>
					<FlagIcon className={HeaderCenterIconClassNames} />
					<PlayIcon className={HeaderCenterIconClassNames} />
					<ShoppingCartIcon className={HeaderCenterIconClassNames} />
					<UserGroupIcon className={HeaderCenterIconClassNames} />
				</div>
			</div>

			<div className='flex items-center am:space-x-2 justify-end'>
				<Image
					src={session?.user.image}
					loading='lazy'
					width={40}
					height={40}
					layout='fixed'
					onClick={(e) => signOut()}
					className='rounded-full'
				/>

				<p className='font-semibold pr-2 whitespace-nowrap pl-1'>
					{session?.user.name}
				</p>
				<ViewGridIcon className={`${HeaderRightIconClassNames}`} />
				<ChatIcon className={`${HeaderRightIconClassNames}`} />
				<BellIcon className={`${HeaderRightIconClassNames}`} />
				<ChevronDownIcon className={`${HeaderRightIconClassNames}`} />
			</div>
		</div>
	);
};

export default Header;
