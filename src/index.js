import Vue from 'vue'
import {Lazyload} from 'mint-ui'
import router from './router'
import store from './store'
import './static/common.css'
import 'mint-ui/lib/style.css'
import App from './app'

Vue.use(Lazyload);

export default {
    router,
    store,
    App
}