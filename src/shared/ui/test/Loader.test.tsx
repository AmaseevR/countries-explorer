import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../Loader';

describe('Loader component', () => {
	it('renders the loader with animate-spin class', () => {
		const { container } = render(<Loader />);
		const spinningElement = container.querySelector('.animate-spin'); // Target by class directly
		expect(spinningElement).toHaveClass('animate-spin');
	});
});
