<template lang='jade'>
h1 Sled
.sled(v-el:slider)
  .arrows
    .arrow
    .arrow
  .dots
  .slides.simple
    .slide
      span.img
    .slide
      span.img.blue
    .slide
      span.img
    .slide
      span.img.blue
    .slide
      span.img
    .slide
      span.img.blue

h2 Use arrow keys
h2 swipe or drag
h2 click dots

</template>


<script>
import Core from '@sled/core';
import Slides from '@sled/slides';
import Keys from '@sled/keys';
import Touch from '@sled/touch';
import Arrows from '@sled/arrows';
import Dots from '@sled/dots';

export default {
  ready() {
    let core = new Core(this.$els.slider, Slides, Keys, Touch, Arrows, Dots);
  },
};
</script>

<style lang='stylus'>
body
  background #eee
  height 100vh
  margin 0
  display flex
  flex-flow column
  align-items center
  justify-content center

h1, h2
  margin .2em 0
  color rgb(0, 127, 167)

.sled
  width: 50em
  height: 25em
  border-width: 0 .2em
  border: solid rgb(0, 127, 167)
  .dots
    .dotsWrapper
      .dot
        width: 1.5em
        height: 1.5em

.img
  background: #fff
  width: 40%
  height: 80%

.blue
  background: rgb(0, 127, 167)
  width: 90%
  height: 90%
</style>
