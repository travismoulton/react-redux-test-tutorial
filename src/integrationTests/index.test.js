import moxios from 'moxios';

import { testStore } from '../../utils';
import { fetchPosts } from '../store/actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'title string 1',
        body: 'body string 1',
      },
      {
        title: 'title string 2',
        body: 'body string 2',
      },
      {
        title: 'title string 3',
        body: 'body string 3',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
