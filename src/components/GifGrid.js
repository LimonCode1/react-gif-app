import React from 'react';
// import { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hook/useFetchGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	// este useState es de ejemplo para comprender el useEffect video 74.
	// const [count, setCount] = useState(0);
	// const [imagenes, setImagenes] = useState([]);

	// const [images, setImages] = useState([]);

	const { loading } = useFetchGifs();

	// el use effect me permitira ejecutar codigo de manera condicional, util cuando tengo un ciclo infinito de ejecucion
	// este recibe una funcion la cual es la que quiero ejecutar
	// useEffect(
	// 	() => {
	// 		// ahora esta funcion viene de los helpers y como retorna una promise
	// 		// lo que odemos hacer asignarselas al set images
	// 		getGifs(category).then(setImages);
	// 	}, // el segundo parametro que recibe es un array de dependencias, si este se encuentra vacio solo se ejecutara una vez el useEffect
	// 	[category]
	// );

	return (
		<>
			<div className="card-grid">
				<h3>{category}</h3>
				{loading ? 'Cargando...' : 'carga culminada.'}
				{/* {
					imagenes.map(
						(img) => (
						<GifGridItem 
							key={img.id} 
							{...img} 
						/>
					))
				} */}
				{/* este boton disparara la ejecucion de un useState
				<h3>{count}</h3>
				<button onClick={()=> setCount(count + 1)}>setCount +1</button> */}
				{/*<ol>
				Cuando una funcion no tiene las {} es que tiene un return implicito () */}
				{/* tarea, mostrar los elementos del use state en lista y que la key sea el id de images */}
				{/* {images.map(img => (
						<li key={img.id}>
							{img.title}
							<a href="{img.url}" ></a>
						</li>
					))}
				</ol> */}
				{/* {images.map(
					(img) => (
						{
							/* integracion de componente gifGridItem */},
				(
				{/* <GifGridItem
								key={img.id}
								// vamos a enviarle las propiedades individuales al componente,
								// esto con la ayuda de spread ... del array de images en el object img
								{...img}
							/> */}
				{/* ) ) )} */} */}
			</div>
		</>
	);
};
