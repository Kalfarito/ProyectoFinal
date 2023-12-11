import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Prueba from './Prueba';

describe('<Prueba />', () => {
  test('it should mount', () => {
    render(<Prueba />);
    
    const prueba = screen.getByTestId('Prueba');

    expect(prueba).toBeInTheDocument();
  });
});