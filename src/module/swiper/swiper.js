import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const swiperAbout = new Swiper('.swiper', {
  modules: [Autoplay],
  grabCursor: true,
  spaceBetween: 40,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 3,
      loop: true,
    },
    920: {
      slidesPerView: 6,
      loop: false,
    },
  },
});
