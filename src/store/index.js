import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
}

const mutations = {

}

const actions = {
    fetchIndexData:({state,commit,dispatch},payload) => {
        return axios.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/latest')
    },
    fetchNewsData:({state,commit,dispatch},payload) => {
        return axios.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/' + payload)
    }
}

const getters = {
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});