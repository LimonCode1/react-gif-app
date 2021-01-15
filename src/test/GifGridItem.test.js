import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
	const id = '1';
	const title = 'test de component';
	const url = 'https://urldesnapshot.gif';
	const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);
	test('debe de mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('Debe de tener un parrafo con el valor de title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});
	test('Debe de tener la img igual al url y alt de los props', () => {
		const img = wrapper.find('img');
		// esto se utiliza para evaluar multiples propiedades
		// console.log(img.props());
		// para evaluar solo una propiedad debo de hacerlo de la siguiente manera
		// console.log(img.prop('src'));
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});
	test('El <div/> de tener la clase animate__fadeInRight', () => {
		const div = wrapper.find('div');
		const clases = div.prop('className');
		expect(clases.includes('animate__fadeInRight')).toBe(true);
	});
});
