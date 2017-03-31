import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import News from '../components/News'
import { Indicator } from 'mint-ui';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Index,
        },{
            path:'/news/:id',
            name:'news',
            component:News
        }
    ]
});

if (process.env.BROWSER) {
    router.beforeEach((from, to, next) => {
        Indicator.open()
        next()
    })
    router.afterEach(() => {
        Indicator.close();
    })
}

export default router
