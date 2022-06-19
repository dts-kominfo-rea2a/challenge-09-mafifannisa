import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
    it('should able to display 6 contact photo', async () => {
        render(<App></App>);
        const photos = screen.getAllByRole('img');
        expect(photos).toHaveLength(6);
    });
});

