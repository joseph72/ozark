import { render } from '@testing-library/react';

import Viewers from './viewers';

describe('Viewers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Viewers />);
    expect(baseElement).toBeTruthy();
  });
});
