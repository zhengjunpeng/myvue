<template>
  <div id="index" class="index">
    <Header></Header>
    <leftNav></leftNav>
    <Main></Main>
  </div>
</template>

<script>
import Header from './pages/header'
import leftNav from './pages/leftNav'
import Main from './pages/main'

export default {
  name: 'index',
  components: {
    Header,
    leftNav,
    Main
  }
}

</script>

<style scoped>

</style>
