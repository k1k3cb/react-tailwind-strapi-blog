import { BLOGS } from '../constants/blogs';

const Blogs = () => {
	return (
		<div className='w-full bg-[#f9f9f9] py-[50px] '>
			<div className='max-w-[1240px] mx-auto'>
				<div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black '>
					{BLOGS.map(blog => (
						<div
							key={blog.id}
							className='bg-white rounded-xl overflow-hidden drop-shadow-md '
						>
							<img
								src={blog.coverImg}
								alt=''
								className='h-56 w-full object-cover'
							/>
							<div className='p-8 '>
								<h3 className='font-bold text-2xl my-1 '>{blog.title}</h3>
								<p className='text-gray-600 text-xl'>{blog.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
