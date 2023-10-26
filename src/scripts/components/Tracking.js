let fast = document.getElementsByClassName('fast');
let medium = document.getElementsByClassName('medium');
let slow = document.getElementsByClassName('slow');

export default class Tracking {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    document.addEventListener('mousemove', this.mouseMovement.bind(this));
  }

  mouseMovement(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    for (let i = 0; i < 1; i++) {
        fast[i].style.transform =
          'translateX(' +
          (mouseX * 0.010) +
          '%) translateY(' +
          (mouseY * 0.01) +
          '%)';
      }
    for (let i = 0; i < 1; i++) {
      medium[i].style.transform =
        'translateX(' +
        (mouseX * 0.005) +
        '%) translateY(' +
        (mouseY * 0.01) +
        '%)';
    }
    for (let i = 0; i < 1; i++) {
    slow[i].style.transform =
        'translateX(' +
        (mouseX * 0.001) +
        '%) translateY(' +
        (mouseY * 0.01) +
        '%)';
    }
  }
}