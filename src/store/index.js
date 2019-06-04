import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        name: '',
        product: '',
        list: []
    },
    mutations: {
        setName: (state, name) => {
            state.name = name
        },
        setProduct: (state, product) => {
            state.product = product
        },
        setList: (state, list) => {
            state.list.push(list)
        },
        clearList: (state) => {
            state.list = []
        }
    },
	getters: {
	    getName (state) {
	        return state.name
        },
        getProduct (state) {
	        return state.product
        },
        getList (state) {
	        return state.list
	    }
	}
})

export default store