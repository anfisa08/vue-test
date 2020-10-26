import {GetterTree} from 'vuex';
import {StateInterface} from '@/store';
import {ItemsStateInterface} from './state';

const getters: GetterTree<ItemsStateInterface, StateInterface> = {
    items(state){
        return state.items
    },
    selectedItems(state){
        return state.selectedItems
    },
    filteredItems(state){
        return state.filteredItems;
    },
    historyItems(state){
        return state.historyItems
    }
};

export default getters;
