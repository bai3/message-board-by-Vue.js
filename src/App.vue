<template>
  <div id="app">
    <el-menu mode="horizontal"  :default-active="$route.path" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/Message" :route="{path: '/Message'}">
        留言窗口
      </el-menu-item>
      <el-menu-item index="/MessageList" :route="{path: '/MessageList'}">
        留言列表
      </el-menu-item>
    </el-menu>
    <transition :name="transitionName">
    <router-view class="child-view">
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
      transitionName: '',
    }
  },
  name: 'app',
  components: {
    Message,
    MessageList,
  },
 updated: function(){
    let a = this.$route.path;
    if(a == '/Message'){
      this.transitionName = 'slide-left'
    }else{
      this.transitionName = 'slide-right'
    }
  }
}
</script>

<style lang="less">
body{
  margin: 0
}
// @media screen and (min-width: 1080px){
//   #app{
//     margin: 0 350px
//   }
// }
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
 .child-view {
      position: absolute;
      width: 100%;
      transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(500px, 0);
      transform: translate(500px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-500px, 0);
      transform: translate(-500px, 0);
  }

</style>
