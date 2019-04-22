<template>
  <div>
    <button type="" @click="addTwo">+++++++</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'child',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'addTwo'
    ]),
    show () {
      alert(111111111)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
