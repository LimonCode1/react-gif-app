import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {
	const [inputValue, setinputValue] = useState('holaaa');
	const handleInputChange = (e) => {
		// console.log(e.target.value);
		setinputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			console.log('ya se envio 🐶 ');
			// aca llamar el set categories
			// se recibe el setcategories y se agrega el inutvalue al array cada vez que se da enter
			setCategories((c) => [...c, inputValue]);
			setinputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Categorie</h2>
			<p>{inputValue}</p>
			<input type="text" value={inputValue} onChange={handleInputChange}></input>
		</form>
	);
};

AddCategory.propTypes = {
	// el metodo .func me permite validar que reciba una funcion el prop
	setCategories: PropTypes.func.isRequired,
};
