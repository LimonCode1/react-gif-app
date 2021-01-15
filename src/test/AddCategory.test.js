import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
	test('Debe de tomar el snapshot y funcionar correctamente', () => {
		const setCategories = () => {};
		const wrapper = shallow(<AddCategory setCategories={setCategories} />);
		expect(wrapper).toMatchSnapshot();
	});
});
