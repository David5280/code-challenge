import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test('should match the snapshot', () => {
    const wrapper = mount(App);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
  test('calculateTip accurately calculates tip', () => {
    const wrapper = mount(App);
    const billInfo = {
      totalBill: '1000',
      tipPercentage: '.20',
      partySize: '',
    };
    wrapper.vm.calculateTip(billInfo);
    expect(wrapper.vm.results.tipAmount).toEqual('200.00');
  });
  test('calculateTip accurately calculates finalBill', () => {
    const wrapper = mount(App);
    const billInfo = {
      totalBill: '1000',
      tipPercentage: '.20',
      partySize: '',
    };
    wrapper.vm.calculateTip(billInfo);
    expect(wrapper.vm.results.finalBillAmount).toEqual('1200.00');
  });
  test('calculateTip accurately calculates pricePerPerson', () => {
    const wrapper = mount(App);
    const billInfo = {
      totalBill: '1000',
      tipPercentage: '.20',
      partySize: '2',
    };
    wrapper.vm.calculateTip(billInfo);
    expect(wrapper.vm.results.pricePerPerson).toEqual('600.00');
  });
  test('determineTheme produces the correct theme based on tip amount', () => {
    const wrapper = mount(App);
    const billInfo = {
      totalBill: '1000',
      tipPercentage: '.40',
      partySize: '2',
    };
    wrapper.vm.determineTheme(billInfo.tipPercentage);
    expect(wrapper.vm.theme).toEqual('theme3');
  });
});
