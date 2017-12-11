<template>
  <div id="app">
    <el-menu mode="horizontal" :default-active="activeIndex">
      <el-menu-item index="1">
        <router-link to="/Message">
        留言窗口
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/MessageList">
        留言列表
        </router-link>
      </el-menu-item>
    </el-menu>
    <transition>
    <router-view>
    </router-view>
    </transition>
  </div>
</template>

<script>
import Message from './components/Message'
import MessageList from './components/MessageList'
export default {
  /* eslint-disable */
  data() {
    return {
      activeIndex: '1'
    }
  },
  
  name: 'app',
  components: {
    Message,
    MessageList,
  }
}
</script>

<style lang="less">
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-menu{
    a{
      text-decoration: none
    }
  }
}

</style>
