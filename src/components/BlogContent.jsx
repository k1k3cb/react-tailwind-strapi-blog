import { useParams } from 'react-router-dom';
import { BLOGS } from '../constants/blogs';

const BlogContent = () => {
	const { id } = useParams();
	console.log(id);
	let blog = BLOGS.filter(blog => blog.id == id);
	blog = blog[0];
	console.log(blog);
	return (
		<div className='w-full pb-10 bg-[#f9f9f9]'>
			<div className='max-w-[1240px] mx-auto'>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 px-4 sm:pt-20 md:mt-0 sm:pt-20 text-black'>
					<div className='col-span-2 gap-x-8 gap-y-8'>
						<img
							className='h-56 w-full object-cover'
							src={blog.coverImg}
							alt=''
						/>
						<h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
						<div className='pt-5'>
							<p>{blog.content}</p>
						</div>
					</div>
					<div className='col-span-1 bg-white rounded-xl shadow-md py-5 max-h-[250px]'>
						<div className='flex flex-col items-center'>
							<img
								className='p-2 w-32 h-32 rounded-full mx-auto object-cover'
								src={blog.authorImg}
								alt=''
							/>
							<div className='text-center'>
								<h1 className='font-bold text-2xl text-gray-900 pt-3'>
									{blog.authorName}
								</h1>
								<p className='text-gray-900 font-medium'>{blog.authorDesc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
