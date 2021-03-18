import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        roles: ['TeamLeader', 'GroupLeader', 'ProjectManager', 'ResourcesManager', 'SalesManager'],
        level: null,
    },
    getters: {
        getRoles: state => {
            return state.roles
        },
        getLevel: state => {
            return state.level
        }
    },
    mutations: {
        setLevel: (state, value) => {
            state.level = value
        }
    },
    actions: {},
    modules: {}
})
