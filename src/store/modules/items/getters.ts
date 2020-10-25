import {GetterTree} from 'vuex';
import {StateInterface} from '@/store';
import {ExampleStateInterface} from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
    items(state: ExampleStateInterface){
        return state.items
    },
    selectedItems(state: ExampleStateInterface){
        return state.selectedItems
    },
    filteredItems(state: ExampleStateInterface){
        return state.filteredItems;
    },
    historyItems(state: ExampleStateInterface){
        return state.historyItems
    },
    searchText(state: ExampleStateInterface){
        return state.searchText
    }
};

export default getters;
