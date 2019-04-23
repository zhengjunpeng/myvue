<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import $ from './jquery';
export default {
  name: 'app',
  mounted() {
    var vm = this;
    vm.setSize();
    window.addEventListener('resize', vm.setSize, false);
  },
  methods: {
    setSize: function () {
      var vm = this;
      var $body = $('body');
      var realWidth = $body.width();
      var realHeight = $body.height();
      vm.width = window.innerWidth;
      vm.height = window.innerHeight;
      vm.xScale = vm.width / realWidth;
      vm.yScale = vm.height / realHeight;
      vm.minScale = Math.min(vm.xScale, vm.yScale);
      var jscss = [
        'body {',
        '   transform: translate(' + (-50 * (1 - vm.xScale)) + '%,' + (-50 * (1 - vm.yScale)) + '%) scale(' + vm.minScale + ',' + vm.minScale + ');',
        '   -webkit-transform: translate(' + (-50 * (1 - vm.xScale)) + '%,' + (-50 * (1 - vm.yScale)) + '%) scale(' + vm.minScale + ',' + vm.minScale + ');',
        '}'
      ].join('\n');
      var $style = $('#js-style');
      if ($style.length === 0) {
        $style = $('<style id="js-style" type="text/css"></style>');
        $style.appendTo('head');
      }
      $style.text(jscss);
    }
  }
};

</script>