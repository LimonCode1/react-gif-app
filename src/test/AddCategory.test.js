import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
	const setCategories = () => {};
	const wrapper = shallow(<AddCategory setCategories={setCategories} />);

	test('Debe de tomar el snapshot y funcionar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('debe de cambiar la caja de texto', () => {
		const input = wrapper.find('input');
		// ahora para poder probar el change, debo enviar
		// un objeto con el valor del e, que sera el evento, este como
		// segundo parametro del input.simulate()
		const value = 'Hola mundo';
		input.simulate('change', {
			target: {
				value,
			},
		});
		expect(wrapper.find('p').text().trim()).toBe(value);
	});
});
