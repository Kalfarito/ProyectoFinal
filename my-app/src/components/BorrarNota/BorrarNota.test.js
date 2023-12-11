import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BorrarNota from './BorrarNota';

describe('<BorrarNota />', () => {
  test('it should mount', () => {
    render(<BorrarNota />);
    
    const borrarNota = screen.getByTestId('BorrarNota');

    expect(borrarNota).toBeInTheDocument();
  });
});