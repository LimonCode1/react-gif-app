import { useEffect, useState } from 'react';
import { getFetchGifs } from '../helpers/getFetchGifs';

export const useFetchGifs = (category) => {
	const [objeto, setObjeto] = useState({
		data: [],
		loading: true,
	});
	// impelementado el useEffect para que la funcion solo se ejecute una vez
	// y no quede en un loop infinito

	// los efectos no pueden async, debido a que estos siempre esperan algo sincrono
	useEffect(() => {
		// aca es donde en realidad se hara la peticion
		// y se traeran las imagenes gif
		getFetchGifs(category).then((imgs) => {
			setTimeout(() => {
				console.log(imgs);
				setObjeto({
					data: imgs,
					loading: false,
				});
			}, 3000);
		});
	}, [category]);

	// setTimeout(() => {
	// 	setObjeto({
	// 		data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	// 		loading: false,
	// 	});
	// }, 3000);
	return objeto;
};
