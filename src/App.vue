<template lang='jade'>
.window
  h1 Sled
  .sled(v-el:slider)
    .arrows
      .arrow
      .arrow
    .dots
    .slides.simple
      .slide
        span(class='img')
          h2 Use arrow keys
          h2 click dots
          h2 swipe
      .slide
        img(src='http://3.bp.blogspot.com/-hQ2r4-TM2P8/Vq9xjgXHKBI/AAAAAAAACFc/XwreiGH_jD8/s320/10-Tips-for-Becoming-a-Better-JavaScript-Developer.jpg')
      .slide
        img(src='http://goto.project-a.com/wp-content/uploads/2015/08/NodeSchool.png')
      .slide
        img(src='https://www.creativefreedom.co.uk/wp-content/uploads/2015/04/Google-icon-spec-2.png')

.module
  h1 modules
.modules
  .module
    h2 touch

    .sled(v-el:touch)
      .slides.simple
        .slide(v-for='slide in slides')
          span(:class='slide.class')
            h3 drag

  .module
    h2 swipe

    .sled(v-el:swipe)
      .slides.simple
        .slide(v-for='slide in slides')
          span(:class='slide.class')
            h3 swipe

  .module
    h2 arrows

    .sled(v-el:arrows)
      .arrows
        .arrow
        .arrow
      .slides.simple
        .slide(v-for='slide in slides')
          span(:class='slide.class')

  .module
    h2 dots

    .sled(v-el:dots)
      .dots
      .slides.simple
        .slide(v-for='slide in slides')
          span(:class='slide.class')

  .module
    h2 keys

    .sled(v-el:keys)
      .slides.simple
        .slide(v-for='slide in slides')
          span(:class='slide.class')
            h3 press keyboard arrow
</template>


<script>
import Core from '@sled/core';
import Slides from '@sled/slides';
import Swipe from '@sled/swipe';
import Keys from '@sled/keys';
import Touch from '@sled/touch';
import Arrows from '@sled/arrows';
import Dots from '@sled/dots';

export default {
  ready() {
    new Core(this.$els.slider, Slides, Keys, Touch, Arrows, Dots);
    new Core(this.$els.touch, Slides, Touch);
    new Core(this.$els.swipe, Slides, Swipe);
    new Core(this.$els.arrows, Slides, Arrows);
    new Core(this.$els.dots, Slides, Dots);
    new Core(this.$els.keys, Slides, Keys);
  },

  data() {
    return {
      slides: [
        { class: 'img' },
        { class: 'img' },
        { class: 'img' },
        { class: 'img' },
      ],
    };
  },
};

</script>

<style lang='stylus'>
@import '~flexstyl/index'
color = rgb(0, 127, 167)
body
  margin 0
  background #eee
  @extend .flex, .fcolumn, .center

.window
  height 100vh
  @extend .flex, .fcolumn, .center

h1, h2, h3
  margin .2em 0
  color color

.modules
  @extend .flex, .fwrap, .around

.module
  margin 1em
  text-align center

  .sled
    width: 25em
    height 25em
    .slide
      &:nth-child(even)
        .img
          background color
    .img
      padding 0
      width 20em
      height 20em


  h1
    width 98vw
    margin 0
    padding 1em 0
    background color
    color #fff

  h2
    background color
    font-size 2em
    padding .25em 0
    width 100%
    color #fff

.sled
  margin 0
  .dots
    .dotsWrapper
      .dot
        width: 1.5em
        height: 1.5em

.img
  @extend .flex, .center, .fcolumn
  background #fff
  padding 3em
  width 20em
  height 10em
</style>
