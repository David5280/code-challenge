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
  test('does not throw an error under when inputs are valid', () => {
    const wrapper = mount(Calculator);
    wrapper.find('#bill-amount-input').setValue('1000')
    wrapper.find('#tip-amount-input').setValue('.25')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.error-message').exists()).toBe(false);
  });
  test('clears data when calculation has been made', () => {
    const wrapper = mount(Calculator);
    wrapper.find('#bill-amount-input').setValue('1000')
    wrapper.find('#tip-amount-input').setValue('.25')
    expect(wrapper.vm.billInfo.totalBill).toEqual('1000')
    expect(wrapper.vm.billInfo.tipPercentage).toEqual('.25')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.billInfo.totalBill).toEqual('')
    expect(wrapper.vm.billInfo.tipPercentage).toEqual('')
  });
});