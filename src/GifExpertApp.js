import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// const categories = ['los simpsons', 'futurama', 'dragon ball z'];
	const [categories, setCategories] = useState(['los simpsons']);
	// const handleAdd = () => {
	// 	// manera de agregar un nuevo elemento al array
	// 	// setCategories([...categories, 'Sex Education']);
	// 	// otra manera seria
	// 	setCategories((c) => ['Los 100', ...c]);
	// 	// el setCategories puede tener un callback el cual el primer argumento
	// 	// es el estado anterior del elemento, pero tiene que regresar un nuevo estado
	// 	console.log(categories);
	// };
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
