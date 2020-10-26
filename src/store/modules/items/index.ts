import { Module } from 'vuex';
import { StateInterface } from '@/store';
import state, { ItemsStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const items: Module<ItemsStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};

export default items;
