import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from '../../../utils';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        title: 'String',
        desc: 'String',
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Title',
        desc: 'Desc',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('Should render with error', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    test('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    test('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Desc',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('Component is not rendered without a title', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
