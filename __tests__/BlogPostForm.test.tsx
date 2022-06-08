/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import BlogPostForm from '../src/Components/BlogPostForm';

describe('To test if the Blog Post From render correctly', () => {
  const mockSubmit = jest.fn();
  //test no.1: to check if the components are rendering at the start
  it('should have two text input fields and a Submit button rendered', async () => {
    const {getByTestId} = render(<BlogPostForm onSubmit={mockSubmit} />);
    await waitFor(() => {
      expect(getByTestId('submit-button')).toBeTruthy();
      expect(getByTestId('title-input-field')).toBeTruthy();
      expect(getByTestId('content-input-field')).toBeTruthy();
    });
  });
  //test no.2: component with user actions are working as expected?
  it('should have accept the user input, onChangeText and Value should change and allow user to submit', async () => {
    const {getByTestId} = render(<BlogPostForm onSubmit={mockSubmit} />);
    const inputTitle = getByTestId('title-input-field');
    const inputContent = getByTestId('content-input-field');

    await fireEvent.changeText(inputTitle, 'inputTitle');
    await fireEvent.changeText(inputContent, 'inputContent');

    await fireEvent.press(getByTestId('submit-button'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith('inputTitle', 'inputContent');
    });
  });
});
