import { signIn } from 'next-auth/client';
import Image from 'next/image';
const Login = () => {
	return (
		<div className='grid place-items-center '>
			<Image
				src='https://links.papareact.com/t4i'
				loading='lazy'
				width={400}
				height={400}
				layout='fixed'
				objectFit='contain'
			/>
			<h1
				onClick={(e) => signIn()}
				className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'
			>
				Login with Facebook
			</h1>
		</div>
	);
};

export default Login;
