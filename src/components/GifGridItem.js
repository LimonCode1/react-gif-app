import React from 'react';

export const GifGridItem = (url, title) => {
	console.log(url);
	return <div>
		<img src={url} alt={title}></img>
		<p>{title}</p>
	</div>;
};
