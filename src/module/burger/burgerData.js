export default class BurgerData {
  constructor() {
    this.burger = document.querySelector('#burger');
    this.mask = document.querySelector('#mask');
    this.burgerMenu = document.querySelector('#burgerMenu');
    this.body = document.querySelector('body');
  }

  clickBurger() {
    this.burger.addEventListener('click', () => {
      this.mask.classList.remove('hidden');
      this.burgerMenu.classList.remove('hidden');
      this.body.classList.add('overflow-hidden');
      this.burgerMenu.classList.remove('bottom-[-100%]');
      this.burgerMenu.classList.add('bottom-0');
    });
  }

  clickClose() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        this.mask.classList.add('hidden');
        this.burgerMenu.classList.add('hidden');
        this.body.classList.remove('overflow-hidden');
        this.burgerMenu.classList.add('bottom-[-100%]');
        this.burgerMenu.classList.remove('bottom-0');
      }
    });
  }
}
