import { mount } from '@vue/test-utils';
import ResultsContainer from './ResultsContainer';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '.20',
          finalBillAmount: '1000'
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
});