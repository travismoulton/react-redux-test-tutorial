import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from '../../../utils/index';
import Button from './Button';

describe('<Button />', () => {
  describe('Checking PropTypes', () => {
    test('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'String',
        emitEvent: () => {},
      };
      const propsError = checkProps(Button, expectedProps);

      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunction;

    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        buttonText: 'Example button text',
        emitEvent: mockFunction,
      };

      wrapper = shallow(<Button {...props} />);
    });

    test('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    test('should emit callback on click event', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
