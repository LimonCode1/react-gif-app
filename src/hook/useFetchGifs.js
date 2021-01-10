import { useState } from 'react';

export const useFetchGifs = () => {
	const [objeto, setObjeto] = useState({
		data: [],
		loading: true,
	});

	setTimeout(() => {
		setObjeto({
			data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			loading: false,
		});
	}, 3000);
	return objeto;
};
