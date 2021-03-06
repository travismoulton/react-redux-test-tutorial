import { types } from '../../actions/types';
import postsReducer from './postReducer';

describe('Posts Reducer', () => {
  test('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('Should return new state if receiving type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' },
      { title: 'Test 4' },
    ];

    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  });
});
