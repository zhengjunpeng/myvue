<template>
  <div class="main">
    <div class="box">
      <h1>{{formatDate(new Date, 'yyyy-MM-dd hh:mm:ss')}}</h1>
      <loading :loadingshow="loadingshow"></loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mian',
  data () {
    return {
      loadingshow: true
    }
  }
}

</script>

<style lang="scss" scoped>
.main{
  position: fixed;
  top: 64px;
  left: 296px;
  bottom: 16px;
  right: 16px;
  overflow: auto;
  background: #fff;
  .box{

  }
}

</style>
