import { render } from '@testing-library/react';

import { HeaderStyles } from './GlobalStyles';

describe('GlobalStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderStyles />);
    expect(baseElement).toBeTruthy();
  });
});
