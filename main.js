class Animation {
  initial = ['item1', 'item2', 'item3'];
  items = [];

  constructor() {
    this.init();
  }

  init = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    setTimeout(() => {
      this.handleInitial();
    }, 500);
  };

  handleInitial = () => {
    this.initial.forEach((item) => {
      const element = document.getElementById(item);
      this.addStart(element);
    });
  };

  handleScroll = () => {
    const added = [];
    this.items.forEach((item) => {
      const scrollPosition = window.scrollY;

      const element = document.getElementById(item);
      const element_height = element.offsetHeight;

      if (scrollPosition >= element_height) {
        this.addStart(element);
        added.push(item);
      }
    });
    this.items = this.items.filter((item) => added.includes(item) === false);
  };

  addStart = (element) => {
    element.classList.add('start');
  };


}

const animation = new Animation();
