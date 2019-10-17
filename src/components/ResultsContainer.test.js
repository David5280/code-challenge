import { mount } from '@vue/test-utils';
import ResultsContainer from './ResultsContainer';

describe('ResultsContainer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '.20',
          finalBillAmount: '1000',
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  test('should match the snapshot', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '200',
          finalBillAmount: '1000',
        },
      },
    });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
  test('tip amount renders when props are passed in', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '200',
          finalBillAmount: '1000',
        },
      },
    });
    expect(wrapper.find('.tip-display').text()).toBe('$200')
  });
  test('final bill amount renders when props are passed in', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '200',
          finalBillAmount: '1200',
        },
      },
    });
    expect(wrapper.find('.bill-display').text()).toBe('$1200')
  });
  test('should not show per person if relevant props are absent', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '200',
          finalBillAmount: '1000',
        },
      },
    });
    expect(wrapper.find('.per-person-display').exists()).toBe(false)
  });
  test('should show per person if relevant props are present', () => {
    const wrapper = mount(ResultsContainer, {
      propsData: {
        results: {
          tipAmount: '200',
          finalBillAmount: '1000',
          pricePerPerson: '100',
        },
      },
    });
    expect(wrapper.find('.per-person-display').text()).toBe('Per Person: $100')
  });
});