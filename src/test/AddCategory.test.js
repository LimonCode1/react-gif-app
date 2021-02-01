import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
	// const setCategories = () => {};
	// ahora con la ayuda de jest declararemos el mismo callback,
	// pero ahora podremos simular el comportmiento del mismo.
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

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

	test('No debe postear la informacion con submmit', () => {
		// de la siguiente manera simulamos un submit de un formulario
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// lo que se espera es que la funcion setCategories no se ejecute o sea llamada
		expect(setCategories).not.toHaveBeenCalled();
	});
	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		const value = 'hola mundo';
		// 1. simular el inputChange
		wrapper.find('input').simulate('change', { target: { value } });

		// 2. simular el submit
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		// 3. setCategories se debe de haber llamado
		expect(setCategories).toHaveBeenCalled();
		// la siguiente funcion me permite decirle que espero que se ejecute al menos 2 veces la funcion.
		// expect(setCategories).toHaveBeenCalledTimes(2);
		// la sguiente funcion me permite evaluar que lo que se espera sea una funcion en liugar de numeros o strings.
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		// 4. el valor del input debe de estar ''
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
