<template>
  <div class="hello">
    <h1>{{ msg1 }}</h1>
    <p id='renxing' v-on:click='pangzi' v-ref:wocao></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg1: 'Hello World!'
    }
  },
  props:['msg'],
  events:{
    laibaganqilai:function(msg){
      console.log(msg+1);
      this.$dispatch('babayaoxiaoxi',msg+1)
    }
  },
  methods:{
    pangzi:function(){
      console.log(this.msg)
      this.$dispatch('babayaoxiaoxi',1)
    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
