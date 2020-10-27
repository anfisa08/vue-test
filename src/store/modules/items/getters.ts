import {GetterTree} from 'vuex';
import {StateInterface} from '@/store';
import {ItemsStateInterface} from './state';
import {Element} from "@/types/models";


function calcIncludes(item: Element, filterValue: string): number {
    let countIncludes: number = 0;

    let regExp = new RegExp(filterValue, 'gi');

    if (item.name.toLowerCase().includes(filterValue)) {
        const matches = item.name.toLowerCase().match(regExp);
        if (matches && matches.length > 0)
            countIncludes = matches.length;
    }


    item.items.forEach(el => {
        if (el.name.toLowerCase().includes(filterValue)) {
            const matches = el.name.toLowerCase().match(regExp);
            if (matches && matches.length > 0)
                countIncludes += matches.length;
        }
    });

    return countIncludes;
}


const getters: GetterTree<ItemsStateInterface, StateInterface> = {
    items(state) {
        return state.items
    },
    selectedItems(state) {
        return state.selectedItems
    },
    filteredItems(state) {
        const filter = state.searchPhrase.toLowerCase();

        const filteredItems = state.items.filter(el => {
            const inSelected = state.selectedItems.indexOf(el);

            if (inSelected === -1) {
                if (filter === '') {
                    return el;
                } else {
                    let include = false;
                    if (el.name.toLowerCase().includes(filter)) {
                        include = true;
                    }

                    el.items.forEach(item => {
                        if (item.name.toLowerCase().includes(filter)) {
                            include = true;
                        }
                    });

                    if (include)
                        return el;

                }
            }
        });

        if (filter === '') {
            filteredItems.sort((a: Element, b: Element) => a.id - b.id);
        } else {
            filteredItems.sort((a: Element, b: Element) => calcIncludes(b, filter) - calcIncludes(a, filter));
        }

        return filteredItems;
    },
    historyItems(state) {
        return state.historyItems
    },
    searchPhrase(state) {
        return state.searchPhrase
    },
};

export default getters;
