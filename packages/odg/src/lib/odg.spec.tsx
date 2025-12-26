import { render } from '@testing-library/react';

import OrgOdg from './odg';

describe('OrgOdg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgOdg />);
    expect(baseElement).toBeTruthy();
  });
});
