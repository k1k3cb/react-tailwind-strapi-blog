import { Blogs, Footer, Navbar } from '../components';

const Homepage = ({ blogs }) => {
	console.log('Homepage');
	console.log(blogs);
	return (
		<div>
			<Navbar />
			<Blogs blogs={blogs} />
			<Footer />
		</div>
	);
};

export default Homepage;
