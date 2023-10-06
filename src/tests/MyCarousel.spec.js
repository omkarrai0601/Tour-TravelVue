import { mount } from '@vue/test-utils';
import MyCarousel from '@/components/MyCarousel.vue';

describe('MyCarousel.vue', () => {
    it('renders the carousel', () => {
        const wrapper = mount(MyCarousel);
        expect(wrapper.exists()).toBe(true);
      });

      it('displays the correct text', () => {
        const wrapper = mount(MyCarousel);
        expect(wrapper.text()).toBe('Welcome To The Travel');
      });
     
  });
