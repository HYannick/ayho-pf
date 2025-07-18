<template>
  <div>
    <section class="content grid">
      <div class="grid__item" v-for="item in items" :key="item.id">
        <div class="grid__item-img">
          <div class="scroll-img" :style="{backgroundImage: `url(${item.cover})`}"></div>
        </div>
        <div class="grid__item-titlewrap">
          <h2 class="grid__item-title">{{ item.title }}</h2>
          <div class="grid__item-description">
            <p>{{ item.description }}</p>
            <p class="item-stack">{{ item.stack}}</p>
            <a :href="item.link" target="_blank" class="btn">Voir le projet</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import items from '~/public/slides.json'
import anime from 'animejs'
import Uncover from "~/Uncover.ts";

export default {
  data() {
    return {
      items,
      uncoverArr: [],
      uncoverOpts: [
        {
          slicesTotal: 5,
          slicesColor: '#fff',
          orientation: 'vertical',
          slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
          slicesTotal: 3,
          slicesColor: '#fff',
          orientation: 'horizontal',
          slicesOrigin: {show: 'right', hide: 'left'}
        },
        {
          slicesTotal: 8,
          slicesColor: '#fff',
          orientation: 'horizontal',
          slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
          slicesTotal: 11,
          slicesColor: '#fff',
          orientation: 'horizontal',
          slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
          slicesTotal: 3,
          slicesColor: '#fff',
          orientation: 'vertical',
          slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
          slicesTotal: 16,
          slicesColor: '#fff',
          orientation: 'vertical',
          slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
          slicesTotal: 4,
          slicesColor: '#fff',
          orientation: 'horizontal',
          slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
          slicesTotal: 10,
          slicesColor: '#fff',
          orientation: 'vertical',
          slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
          slicesTotal: 8,
          slicesColor: '#d60b3f',
          orientation: 'horizontal',
          slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
          slicesTotal: 6,
          slicesColor: '#250bd6',
          orientation: 'vertical',
          slicesOrigin: {show: 'top', hide: 'top'}
        }
      ],
      uncoverAnimation: [
        {
          show: {
            slices: {duration: 600, delay: (_, i, t) => (t - i - 1) * 100, easing: 'easeInOutCirc'}
          },
          hide: {
            slices: {duration: 600, delay: (_, i, t) => (t - i - 1) * 100, easing: 'easeInOutCirc'}
          }
        },
        {
          show: {
            slices: {duration: 600, delay: (_, i, t) => Math.abs(t / 2 - i) * 80, easing: 'easeInOutCirc'}
          },
          hide: {
            slices: {duration: 300, delay: (_, i, t) => Math.abs(t / 2 - i) * 40, easing: 'easeInOutCirc'}
          }
        },
        {
          show: {
            slices: {delay: (_, i, t) => anime.random(0, t) * 50}
          },
          hide: {
            slices: {duration: 300, delay: (_, i, t) => anime.random(0, t) * 50}
          }
        },
        {
          show: {
            slices: {duration: 1200, delay: (_, i) => i * 150, easing: 'easeOutExpo'}
          },
          hide: {
            slices: {duration: 500, delay: (_, i) => i * 150, easing: 'easeInOutExpo'}
          }
        },
        {
          show: {
            slices: {duration: 600, delay: (_, i, t) => Math.abs(t / 2 - i) * 80, easing: 'easeInOutCirc'}
          },
          hide: {
            slices: {duration: 600, delay: (_, i, t) => Math.abs(t / 2 - i) * 80, easing: 'easeInOutCirc'}
          }
        },
        {
          show: {
            slices: {duration: 400, delay: (_, i, t) => (t - i - 1) * 150, easing: 'easeInOutQuad'}
          },
          hide: {
            slices: {duration: 400, delay: (_, i, t) => (t - i - 1) * 30, easing: 'easeInOutQuad'}
          }
        },
        {
          show: {
            slices: {duration: 400, delay: (_, i, t) => Math.abs(t / 4 - i) * 40, easing: 'easeInOutSine'},
            image: {
              duration: 900,
              easing: 'easeOutCubic',
              scale: [1.8, 1]
            }
          },
          hide: {
            slices: {duration: 400, delay: (_, i, t) => Math.abs(t / 4 - i) * 40, easing: 'easeInOutSine'}
          }
        },
        {
          show: {
            slices: {duration: 600, easing: 'easeInOutCirc', delay: (_, i) => i * 50},
            image: {
              duration: 1200,
              delay: 350,
              easing: 'easeOutCubic',
              scale: [1.3, 1]
            }
          },
          hide: {
            slices: {duration: 300, easing: 'easeInOutCirc', delay: (_, i) => i * 30}
          }
        },
        {
          show: {
            slices: {duration: 600, easing: 'easeInOutCirc', delay: (_, i) => i * 100},
            image: {
              duration: 1200,
              delay: 350,
              easing: 'easeOutCubic',
              scale: [1.3, 1]
            }
          },
          hide: {
            slices: {duration: 300, easing: 'easeInOutCirc', delay: (_, i) => i * 40}
          }
        }
      ]
    }
  },
  mounted() {
    const items = Array.from(document.querySelectorAll('.grid > .grid__item'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          this.uncoverArr[items.indexOf(entry.target)].show(true, this.uncoverAnimation[items.indexOf(entry.target)].show);
        } else {
          this.uncoverArr[items.indexOf(entry.target)].hide(true, this.uncoverAnimation[items.indexOf(entry.target)].hide)
        }
      })
    }, {threshold: 0.5})

    items.forEach((item, pos) => {
      this.uncoverArr.push(new Uncover(item.querySelector('.scroll-img'), this.uncoverOpts[pos]))
      observer.observe(item)
    })
  }
}
</script>

<style lang="scss">
.item-stack {
  font-size: 1.2rem;
  font-weight: 100;
  margin: 10px 0 20px;
}
.content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
}

.grid {
  padding: 20vh 0;
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-row-gap: 20vh;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-row-gap: 10vh;
    grid-template-columns: 1fr;
  }
}

.grid__item {
  position: relative;

  &-title {
    font-size: 5rem;
    line-height: 1;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  &-description {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 100;
    @media (max-width: 768px) {
      a {
        text-align: center;
        display: block;
      }
    }
  }

  &-titlewrap {
    position: absolute;
    top: 0;

    @media (max-width: 768px) {
      position: initial;
      padding: 15px;
      width: 100%;
      .grid-item__title {
        text-align: left;
      }
    }
  }

  &:nth-child(odd) {
    align-self: start;

    .grid__item-titlewrap {
      left: calc(500px + 30px);
      text-align: left;
    }

    .grid-item__title {
      text-align: center;
    }

    @media (max-width: 768px) {
      .grid__item-titlewrap {
        left: 0;
        text-align: justify;
      }
      .grid-item__title {
        text-align: center;
      }
    }
  }

  &:nth-child(even) {
    margin: 70vh 0 0 0;
    .grid__item-img {
      justify-content: flex-end;
    }
    .grid__item-titlewrap {
      right: calc(500px + 30px);
      text-align: right;
    }

    .grid-item__title {
      text-align: right;
    }

    @media (max-width: 768px) {
      margin: 0;
      .grid__item-titlewrap {
        left: 0;
        text-align: justify;
      }
      .grid-item__title {
        text-align: center;
      }
    }
  }

  .grid__item-img {
    padding: 20px;
    display: flex;
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .scroll-img {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    min-width: 250px;
    min-height: 250px;
    background-size: cover;
    @media (max-width: 768px) {
      padding: 20px;
      border-radius: 20px;
    }
  }
}

.uncover {
  overflow: hidden;
  position: relative;
}

.uncover__img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.uncover__slices {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.uncover__slices--vertical {
  flex-direction: row;
}

.uncover__slices--horizontal {
  flex-direction: column;
}

.uncover__slices--horizontal-double {
  display: grid;
  grid-template-columns: 50% 50%;
}

.uncover__slices--vertical-double {
  display: grid;
  grid-template-rows: 50% 50%;
}

.uncover__slice {
  color: #fff;
  background-color: currentColor;
  flex: 1;
}

.uncover__slices--vertical .uncover__slice {
  box-shadow: 1px 0 0 currentColor;
}

.uncover__slices--horizontal .uncover__slice {
  box-shadow: 0 1px 0 currentColor;
}
</style>