import React from 'react';
import { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const [imagenes, setImagenes] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const url =
			'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=HvDSv0nZxtqqPXOpf4m5XhTF5kWv5gKa';
		const response = await fetch(url);
		const { data } = await response.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_large.url,
			};
		});
		// console.log(gifs);
		setImagenes(gifs);
	};

	return (
		<div>
			<h3>{category}</h3>
			{
				imagenes.map(
					(img) => (
					<GifGridItem 
						key={img.id} 
						{...img} 
					/>
				))
			}
		</div>
	);
};
