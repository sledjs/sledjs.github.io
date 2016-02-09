<template lang='jade' src='./index.jade'></template>

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
    new Core(this.$els.slider, Slides, Keys, Swipe, Arrows, Dots);
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

<style lang='stylus' src='./index.styl'></style>
