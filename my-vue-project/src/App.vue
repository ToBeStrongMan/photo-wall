<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello msg="woyijingbushiwol" v-on:babayaoxiaoxi='laiba'  v-ref:'1'></hello>
    <input type='text' value='niubia'/>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  methods:{
    laiba:function(msg){
  //    console.log(msg);
  //    this.$broadcast('laibaganqilai',msg);
      console.log(this.$refs);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
#renxing{width:100px;height:30px;background:#333;}
</style>
