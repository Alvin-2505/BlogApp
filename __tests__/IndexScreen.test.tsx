/**
 * @format
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import IndexScreen from '../src/Screen/IndexScreen';
import {Context} from '../src/contexts/BlogContext';

const mockNavigate = jest.fn();
const getBlogPost = jest.fn();
const editBlogPost = jest.fn();
const addBlogPost = jest.fn();
const deleteBlogPost = jest.fn();

const blogPost = [
  {id: 1, title: 'test1', content: 'content 1'},
  {id: 2, title: 'test2', content: 'content 2'},
];

jest.mock('@react-navigation/native', () => ({
  ...(jest.requireActual('@react-navigation/native') as any),
  useNavigation: () => ({
    navigate: mockNavigate,
    addListener: jest.fn(),
  }),
}));

it('should render the flat list as per normal', () => {
  const {getByTestId} = render(
    <Context.Provider
      value={{
        state: blogPost,
        deleteBlogPost,
        getBlogPost,
        editBlogPost,
        addBlogPost,
      }}>
      <IndexScreen />
    </Context.Provider>,
  );

  expect(getByTestId('flatList')).toBeTruthy();
  expect(getByTestId('item 1')).toBeTruthy();
  expect(getByTestId('item 2')).toBeTruthy();
});

it('should delete the blog when click onto the delete icon', () => {
  const {getByTestId} = render(
    <Context.Provider
      value={{
        state: blogPost,
        deleteBlogPost,
        getBlogPost,
        editBlogPost,
        addBlogPost,
      }}>
      <IndexScreen />
    </Context.Provider>,
  );
  fireEvent.press(getByTestId('delete-button 1'));
  expect(deleteBlogPost).toHaveBeenCalledWith(1);
  fireEvent.press(getByTestId('delete-button 2'));
  expect(deleteBlogPost).toHaveBeenCalledWith(2);
});

it('should bring you to the next blog detail page', () => {
  const {getByTestId} = render(
    <Context.Provider
      value={{
        state: blogPost,
        deleteBlogPost,
        getBlogPost,
        editBlogPost,
        addBlogPost,
      }}>
      <IndexScreen />
    </Context.Provider>,
  );
  fireEvent.press(getByTestId('item 1'));
  expect(mockNavigate).toBeCalledWith('Show', {id: 1});
  fireEvent.press(getByTestId('item 2'));
  expect(mockNavigate).toBeCalledWith('Show', {id: 2});
});
