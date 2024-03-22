class Scrolling {
  classes = [{ key: 'image-item', target: 'vertical-scroll' }];
  clickAdded = [];

  constructor() {
    this.init();
  }

  init() {
    this.classes.forEach(this.handleClickAttachment.bind(this));
  }

  handleClickAttachment = (classItem) => {
    const items = document.querySelectorAll(`.${classItem.key}`);
    items.forEach((item, index) => {
      item.addEventListener('click', this.handleClassClick.bind(this));
      item.setAttribute('data-target', classItem.target);
      item.setAttribute('data-index', index + '');
    });
  };

  handleClassClick = (event) => {
    const toggleTarget = event.target.parentElement.getAttribute('data-target');
    const toggleFragment = event.target.parentElement.getAttribute('data-index');
    const toggleElement = document.getElementById(toggleTarget);

    if (this.clickAdded.includes(toggleTarget) === false) {
      this.clickAdded.push(toggleTarget);
      toggleElement.addEventListener('click', (event) => this.toggleElement(event, toggleTarget, toggleElement));
    }
    this.toggleElement(null, toggleTarget, toggleElement);
    setTimeout(() => {
      const fragment = document.querySelector(`[href="#${ toggleFragment }"]`);
      fragment.scrollIntoView();
      event.preventDefault();
    }, 1000);
  };

  toggleElement = (event, target, element) => {
    const clickedId =  event !== null ? event.target.getAttribute('id') : target;
    if (clickedId !== target) return;

    const style = element.getAttribute('style');
    if (style === 'display: none;') {
      element.setAttribute('style', 'display: block;');
    } else {
      element.setAttribute('style', 'display: none;');
    }
  };
}

const scrolling = new Scrolling();