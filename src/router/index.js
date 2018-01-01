import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Message = (resolve) => {
  import('../components/Message').then((module) => {
    resolve(module)
  })
}

const MessageList = (resolve) => {
  import('../components/MessageList').then((module) => {
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Message'
    },
    {
      path: '/Message',
      component: Message
    },
    {
      path: '/MessageList',
      component: MessageList
    }
  ]
})
