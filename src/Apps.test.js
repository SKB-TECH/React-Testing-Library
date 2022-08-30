import React from "react";
import {render,screen,fireEvent} from '@testing-library/react';
import Test from './Test'

it('Visualisation', () => {
    render(<Test/>)
});

it('check bouton', () => {
    render(<Test/>)
    const btn=screen.getByRole('button')
    fireEvent.click(btn)
    
    screen.getByText('1')

});

