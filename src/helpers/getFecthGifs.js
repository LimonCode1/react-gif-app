export const getFecthGifs = async (category) => {
	// el metodo encodeURI convierte los espacios que le proporcionemos en %20 para que la url sea valida
	// y de esta manera la peticion a la api no falle
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=HvDSv0nZxtqqPXOpf4m5XhTF5kWv5gKa`;
	const response = await fetch(url);
	const { data } = await response.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_large.url,
		};
	});
	// console.log(gifs);
	// aca le estamos asignando un nuevo estado a setImages cargando las imagenes que acabamos de obtener
	// ahora en el array de images estara guardada la data de gifs
	// setImages(gifs);
	// ahora como pasamos esta funcion a los helpers en el cap 77 vamos a retornar los gifs antes que enviarlos a setImages
	// debido a que el useState no se encuentra declarado aca sino en el propio componente
	return gifs;
};
// getGifs();
