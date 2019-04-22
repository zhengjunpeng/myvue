<template>
  <div>
    {{count}}
    <button type="" @click="add">+</button>
    <button type="" @click="reduce">-</button>
    <button type="" @click="drop">111111</button>
    <child ref="child1"></child>
    <div class="con">
      <h1>11111111</h1>
    </div>
    <canvas id="myCanvas" class="myCanvas"></canvas>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import child from './pages/child'

export default {
  name: 'test',
  components: {
    child
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'add',
      'reduce'
    ]),
    drop () {
      this.$refs.child1.show()
    },
    initCanvas () {
      let myCanvas = document.getElementById('myCanvas')
      myCanvas.width = 600
      myCanvas.height = 400
      let cvs = myCanvas.getContext('2d')
      console.log(cvs)
      cvs.fillStyle = 'blue'
      cvs.fillRect(30, 40, 30, 30)
      cvs.strokeStyle = 'orange'
      cvs.strokeRect(40, 70, 30, 30)
      cvs.moveTo(10, 20)
      cvs.lineTo(100, 20)
      cvs.lineTo(100, 50)
      cvs.lineTo(10, 50)
      cvs.lineWidth = 0.5
      cvs.stroke()
    }
  },
  mounted () {
    this.initCanvas()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.con{
  width: 40px;
  height: 40px;
  h1{
    color: #ccc;
  }
}
.myCanvas{
  border: 1px solid red;
}
</style>
