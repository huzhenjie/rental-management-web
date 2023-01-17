import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') {
      throw err
    }
  })
}

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/share/order',
      name: 'pay_first',
      component: () => import('@/components/User/ShareOrder')
    }
  ]
})
