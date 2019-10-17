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
  test('calculateTip', () => {
    
  })
});