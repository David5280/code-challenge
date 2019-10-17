import { mount } from '@vue/test-utils';
import Calculator from './Calculator';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
});