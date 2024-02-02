import anime from 'animejs'

export default class Uncover {
  constructor(el, options) {
    this.DOM = {el};
    this.options = {
      covered: true,
      slicesTotal: 3,
      slicesColor: '#fff',
      orientation: 'vertical',
      slicesOrigin: {
        show: 'bottom',
        hide: 'bottom'
      }
    };

    Object.assign(this.options, options);
    this.isCovered = this.options.covered;
    this.layout();
    if(!this.isCovered) this.show();
  }

  layout() {
    this.DOM.el.classList.add('uncover');
    let inner = '';
    inner += `<div class="uncover__img" style="background-image: ${this.DOM.el.style.backgroundImage}"></div>
<div class="uncover__slices uncover__slices--${this.options.orientation}">`
    for(let i = 0; i <= this.options.slicesTotal -1; ++i) {
      inner += `<div class="uncover__slice" style="color: ${this.options.slicesColor}"></div>`
    }
    inner+= `</div>`

    this.DOM.el.innerHTML = inner;
    this.DOM.img = this.DOM.el.querySelector('.uncover__img');
    this.DOM.slices = Array.from(this.DOM.el.querySelectorAll('.uncover__slice'));
    this.slicesTotal = this.DOM.slices.length;
  }
  show(animation = false, animationSettings = {}) {
    if(!this.isCovered) return;
    return this.toggle(animation, animationSettings)
  }
  hide(animation = false, animationSettings = {}) {
    if(this.isCovered) return;
    return this.toggle(animation, animationSettings)
  }
  toggle(animation, animationSettings) {
    this.isCovered = !this.isCovered;
    if(!animation) {
      this.DOM.slices.forEach((slice) => {
        slice.style.transform = !this.isCovered ?
          this.options.orientation === 'vertical' ? 'translateY(100%)' : 'translateX(100%)'
          : 'none'
      })
    } else {
      let settings = {
        slices: {
          targets: this.DOM.slices,
          duration: 800,
          delay: (_, i) => i*80,
          easing: 'easeInOutCirc',
          translateX: this.options.orientation === 'vertical' ? '0%' :
            !this.isCovered ?
              this.options.slicesOrigin.show === 'right' ? '100%' : '-100%' :
              this.options.slicesOrigin.hide === 'right' ? ['100%','0%'] : ['-100%','0%'],

          translateY: this.options.orientation === 'vertical' ?
            !this.isCovered ?
              this.options.slicesOrigin.show === 'bottom' ? '100%' : '-100%' :
              this.options.slicesOrigin.hide === 'bottom' ? ['100%','0%'] : ['-100%','0%']
            : '0%'
        },
        image: {
          targets: this.DOM.img
        }
      };
      Object.assign(settings.slices, animationSettings.slices)
      Object.assign(settings.image, animationSettings.image)

      anime.remove(this.DOM.slices);
      anime.remove(this.DOM.img);

      let promises = [anime(settings.slices).finished]
      if(settings.image.duration) {
        promises.push(anime(settings.image).finished)
      }
      return Promise.all(promises)
    }
  }
}