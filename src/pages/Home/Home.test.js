import { render } from '@testing-library/react';
import Home from '.';

describe('Testando página Home', () => {
    test('testando', () => {
    render(<Home />);
    expect(true).toBeTruthy();
    })
})