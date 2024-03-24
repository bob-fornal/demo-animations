class Animation {
  size = ['3'];
  items = ['#item1', '#item2', '#item3', '#item4', '#item5', '.item6'];
  addRemove = ['floaters'];

  constructor() {
    this.init();
  }

  init = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  };

  handleScroll = () => {
    const added = [];
    const screenTop = window.scrollY;
    const screenBottom = screenTop + document.body.clientHeight;
    console.log('scroll position', screenBottom);

    this.items.forEach((item) => {
      const tag = this.cleanupTag(item);
      if (item[0] === '#') { // ID-based
        const element = document.getElementById(tag);
        const elementTop = this.getPosition(element);
        console.log('item position', item, elementTop);  

        if (elementTop <= screenBottom) {
          this.addStart(element);
          added.push(item);
        }  
      } else { // Class-based
        const elements = document.getElementsByClassName(tag);
        console.log(item, elements.length);
        for (let i = 0, len = elements.length; i < len; i++) {
          const element = elements[i];
          const elementTop = this.getPosition(element);
          console.log('item position', item, elementTop);
  
          if (elementTop <= screenBottom) {
            this.addStart(element);
            if (added.includes(item) === false) {
              added.push(item);
            }
          }
        }
      }

    });
    this.items = this.items.filter((item) => added.includes(item) === false);

    this.addRemove.forEach((item) => {
      const element = document.getElementById(item);
      
      if (scrollPosition >= 40) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  };

  getPosition = (element) => {
    const rectangle = element.getBoundingClientRect();
    return document.body.scrollTop + rectangle.y + (rectangle.height / 2);
  };

  addStart = (element) => {
    element.classList.add('start');
  };

  cleanupTag = (tag) => {
    return tag.slice(1, tag.length);
  }
}

const animation = new Animation();
