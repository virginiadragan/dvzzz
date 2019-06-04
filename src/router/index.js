import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/pages/Create'
import List from '@/components/pages/List'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/Create',
            name: 'Create',
            component: Create
        },
        {
            path: '/List',
            name: 'List',
            component: List
        },
    ]
  })