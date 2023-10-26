import Swiper from 'swiper/bundle';

/** class pricipale ou on lie notre html et créer nos options de base */
export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
    };
    this.init();
  }

  /** methode init ou on va cibler si nos element html on un data- et on change les options du swiper avec */
  init() {
    let config = this.options;

    if (this.element.dataset.split == '') {
      config = {
        ...this.options,
        ...{
          slidesPerView: 1.7,
        },
      };
    }
    /** instanciation avec options en parametre */
    new Swiper(this.element, config);
  }
}