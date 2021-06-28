import { shallow } from 'enzyme';
import Header from './index';

import { findByTestAtrr } from '../../../utils';

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('<Header />', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  test('should render a logo', () => {
    const img = findByTestAtrr(component, 'logoIMG');
    expect(img.length).toBe(1);
  });
});
