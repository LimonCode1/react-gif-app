import React from 'react';

// aca recibiremos destructurado el array de images para su proceso en el componente
export const GifGridItem = ({ id, title, url }) => {
	console.group('Datos de array desestructurado');
	console.log('id: ' + id);
	console.log('titulo: ' + title);
	console.log('url: ' + url);
	console.groupEnd();
	return (
		<div className="animate__animate animate__fadeInRight card w-64 m-8 bg-yellow-500 font-sans shadow-2xl rounded-lg">
			<img src={url} alt={title}></img>
			<p>{title}</p>
		</div>
	);
};
