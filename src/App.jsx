import { Route, Routes } from 'react-router-dom';
import { BlogContentPage, Homepage } from './pages';
import useFetch from './hooks/useFetch';

const App = () => {
	let { loading, data, error } = useFetch(
		'http://localhost:1337/api/blogs?populate=*'
	);

	if (loading) return <p>Loading..</p>;
	if (error) return <p>Error!</p>;
	console.log(data);
	return (
		<div>
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/blog/:id' element={<BlogContentPage />}></Route>
			</Routes>
		</div>
	);
};

export default App;
