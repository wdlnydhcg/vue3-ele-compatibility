<!--
 * @Author: MrAlenZhong
 * @Date: 2021-09-17 08:34:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-09-18 10:09:11
 * @Description: 
-->
<template>

  <img alt="Vue logo" src="./assets/logo.png"><br>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
  <!-- <a-input placeholder="Basic usage" />
  <a-calendar @panelChange="onPanelChange" /> -->
</template>

<script>


export default {
  name: 'App',
  components: {

  },
   data() {
    return {
      size:"",
       options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
          },
          {
            value: '选项4',
            label: '龙须面',
          },
          {
            value: '选项5',
            label: '北京烤鸭',
          },
        ],
        value: '',
    }
  },
   methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
