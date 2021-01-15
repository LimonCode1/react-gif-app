import { shallow } from 'enzyme';
import { getFecthGifs } from '../../helpers/getFecthGifs';

describe('Pruebas en el helper getGifsFetch', () => {
	const category = 'test del componente';
	const wrapper = shallow(<getFecthGifs category={category} />);
	test('Debe tener un argumento', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('Debe retornar 10 elementos', async () => {
		const gifs = await getFecthGifs('futurama');
		// console.log(gifs);
		expect(gifs.length).toBe(10);
	});
});
