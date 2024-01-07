import { useParams } from 'react-router-dom';
import { BLOGS } from '../constants/blogs';
import Markdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
	const { id } = useParams();

	let blog = {};
	if (blogs) {
		let arr = blogs.filter(blog => blog.id == id);
		blog = arr[0];
	} else {
		blog = {};
	}
	console.log('Blog Content');
	console.log(blog);
	return (
		<div className='w-full pb-10 bg-[#f9f9f9]'>
			<div className='max-w-[1240px] mx-auto'>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 px-4 sm:pt-20 md:mt-0 sm:pt-20 text-black'>
					<div className='col-span-2 gap-x-8 gap-y-8'>
						<img
							className='h-56 w-full object-cover'
							src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
							alt=''
						/>
						<h1 className='font-bold text-2xl my-1 pt-5'>
							{blog.attributes.blogTitle}
						</h1>
						<div className='pt-5'>
							{blog.attributes.blogContent.map((paragraph, index) => (
								<Markdown className='line-break' key={index}>
									{paragraph.children[0].text}
								</Markdown>
							))}
						</div>
					</div>
					<div className='col-span-1 bg-white rounded-xl shadow-md py-5 max-h-[250px]'>
						<div className='flex flex-col items-center'>
							<img
								className='p-2 w-32 h-32 rounded-full mx-auto object-cover'
								src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
								alt=''
							/>
							<div className='text-center'>
								<h1 className='font-bold text-2xl text-gray-900 pt-3'>
									{blog.attributes.authorName}
								</h1>
								<p className='text-gray-900 font-medium'>
									{blog.attributes.authorDesc}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
