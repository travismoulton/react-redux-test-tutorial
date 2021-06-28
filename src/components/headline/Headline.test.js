import { shallow } from 'enzyme';

import { findByTestAtrr } from '../../../utils';
import Headline from './Headline';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('<Headline />', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: 'Test Header', descr: 'Test desc' };
      wrapper = setUp(props);
    });

    test('should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    test('should render an h1', () => {
      const h1 = findByTestAtrr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    test('should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test('should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
