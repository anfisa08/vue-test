import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'

Vue.use(Vuex);

export interface StateInterface {
  version: string
}

export default new Vuex.Store<StateInterface>({
  state: {
    version: '0.0.1'
  },
  modules: {
    items
  },
  strict: process.env.NODE_ENV !== 'production'
})
