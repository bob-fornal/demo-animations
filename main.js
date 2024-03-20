class Animation {
  initial = ['item1', 'item2', 'item3'];
  size = ['3'];
  items = ['item4', 'item5'];

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
    this.size.forEach((index) => {
      const cover = document.getElementById(`item${index}`);
      const figure = document.getElementById(`figure${index}`);
      cover.setAttribute('style', `height: ${figure.clientHeight}px;`);
    });

    this.initial.forEach((item) => {
      const element = document.getElementById(item);
      this.addStart(element);
    });
  };

  handleScroll = () => {
    const added = [];
    const scrollPosition = window.scrollY;
    console.log('scroll position', scrollPosition);

    this.items.forEach((item) => {
      const element = document.getElementById(item);
      const element_height = element.offsetHeight + 122;
      console.log('item position', item, element_height);

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
