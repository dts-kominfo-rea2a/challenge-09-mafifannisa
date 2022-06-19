import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Contact from './components/Contact';
import contacts from './data/contacts.json';

describe('Contact', () => {
    it('should able to display contact name', async () => {
        render(<Contact data={contacts[0]}></Contact>);
        const name = screen.getByText(/Monica/);
        expect(name).toBeInTheDocument();
    });
    
    it('should able to display contact email', async () => {
        render(<Contact data={contacts[1]}></Contact>);
        const email = screen.getByText(/devi@email.com/i);
        expect(email).toBeInTheDocument();
    });
    
    it('should able to display contact phone', async () => {
        render(<Contact data={contacts[2]}></Contact>);
        const phone = screen.getByText(/087577588432/);
        expect(phone).toBeInTheDocument();
    });
    
    it('should able to display contact photo', async () => {
        render(<Contact data={contacts[3]}></Contact>);
        const photo = screen.getByRole('img');
        expect(photo).toBeInTheDocument();
        expect(photo).toHaveAttribute('src', 'http://placekitten.com/600')
    });
});

