<template>
  <div class="spinner" v-show='isLoading'>
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['loadingshow'],
  data () {
    return {
      isLoading: true
    }
  },
  methods: {},
  watch: {
    loadingshow: function (val, oldval) {
      var vm = this
      if (val !== undefined) {
        vm.isLoading = true
        val.then(function () {
          vm.isLoading = false
        })
      }
    }
  }
}

</script>

<style scoped>
.spinner {
  margin: 0 auto;
  width: 350px;
  height: 300px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  z-index: 9;
  left: 50%;
  top: 50%;
  margin-top: -15px;
  margin-left: -25px;
}

.spinner>div {
  background-color: #2CB2FF;
  height: 100%;
  width: 50px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4)
  }
  20% {
    -webkit-transform: scaleY(1.0)
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

</style>
