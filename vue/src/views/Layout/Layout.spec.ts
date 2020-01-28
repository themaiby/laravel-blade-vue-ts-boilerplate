import Layout from '@/views/Layout/Layout.vue';
import { mount } from '@vue/test-utils';

describe('Example', () => {
  const layoutComponentWrapper = mount(Layout);

  it('should show render snapshot', () => {
    expect(layoutComponentWrapper).toMatchSnapshot();
  });
});
