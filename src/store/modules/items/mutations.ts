import {MutationTree} from 'vuex';
import {ItemsStateInterface} from './state';
import {ElementHistory, Element} from '@/types/models';

const mutation: MutationTree<ItemsStateInterface> = {
    setItems(state, json) {
        state.items = json;
    },
    select(state, el: Element) {
        state.selectedItems.push(el)
    },
    removeFromItems(state, itemIndex: number) {
        state.filteredItems.splice(itemIndex, 1);
    },
    removeFromSelectedItems(state, itemIndex: number) {
        state.selectedItems.splice(itemIndex, 1);
    },
    addHistory(state, item: ElementHistory) {
        state.historyItems.push(item)
    },
    setSearchPhrase(state, search) {
        state.searchPhrase = search
    }
};

export default mutation;
