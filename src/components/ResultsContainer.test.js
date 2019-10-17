import { mount } from '@vue/test-utils';
import ResultsContainer from './ResultsContainer';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ResultsContainer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
});