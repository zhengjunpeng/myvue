<template>
  <div id="index" class="index">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
      	<el-aside>
      	  <leftNav></leftNav>
      	</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './pages/header'
import leftNav from './pages/leftNav'

export default {
  name: 'index',
  components: {
    Header,
    leftNav
  }
}

</script>

<style scoped>

</style>
