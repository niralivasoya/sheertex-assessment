import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('displays the correct mutual followers', async () => {
    const { getByTestId, getByText } = render(<App />);
    const username1Input = getByTestId('user1');
    const username2Input = getByTestId('user2');

    fireEvent.change(username1Input, { target: { value: 'tumiduong' } });
    fireEvent.change(username2Input, { target: { value: 'mildlywilde' } });

    setTimeout(() => {
        const mutualFollower = getByText('wolever');
        expect(mutualFollower).toBeInTheDocument();
    }, 1000);
});
