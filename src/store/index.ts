import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import {ItemsStateInterface} from './modules/items/state'

Vue.use(Vuex);

export interface StateInterface {
  items: ItemsStateInterface
}

export default new Vuex.Store<StateInterface>({
  modules: {
    items
  },
  strict: process.env.NODE_ENV !== 'production'
})
