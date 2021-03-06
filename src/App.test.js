import { shallow } from 'enzyme';

import { findByTestAtrr, testStore } from '../utils';
import App from './App';

const setUp = (initalState = {}) => {
  const store = testStore(initalState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title',
          body: 'example body',
        },
        {
          title: 'Example title 2',
          body: 'example body 2',
        },
        {
          title: 'Example title 3',
          body: 'example body 3',
        },
        {
          title: 'Example title 4',
          body: 'example body 4',
        },
      ],
    };

    wrapper = setUp(initialState);
  });

  test('should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'App');
    expect(component.length).toBe(1);
  });

  test('exampleMethod should updated state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();

    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  test('exampleMethod_returnVal should return value as expected', () => {
    const classInstance = wrapper.instance();

    const expectedVal = classInstance.exampleMethod_returnVal(1);
    expect(expectedVal).toBe(2);
  });
});
