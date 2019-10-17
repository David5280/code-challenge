import { mount } from '@vue/test-utils';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
  test('throws an error under when tip amount is missing', () => {
    const wrapper = mount(Calculator);
    wrapper.find('#bill-amount-input').setValue('1000')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.error-message').exists()).toBe(true);
  });
  test('throws an error under when bill amount is missing', () => {
    const wrapper = mount(Calculator);
    wrapper.find('#tip-amount-input').setValue('.25')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.error-message').exists()).toBe(true);
  });
});