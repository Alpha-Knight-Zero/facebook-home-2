import PostBox from './PostBox';
import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
	return (
		<div className='flex-grow h-screen pb-44 pt-6'>
			<div>
				<Stories />
				<PostBox />
				<Posts />
			</div>
		</div>
	);
};

export default Feed;
