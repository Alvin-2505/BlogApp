/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import {Provider} from '../src/contexts/BlogContext';

// Note: test renderer must be required after react-native.

describe('App.tsx', () => {
  it('should render correctly', async () => {
    const {container} = render(<App />);

    expect(container.findByType(Provider)).toBeTruthy();
    expect(container.findByType(App)).toBeTruthy();
  });
});
