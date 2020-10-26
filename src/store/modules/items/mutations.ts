import {MutationTree} from 'vuex';
import {ItemsStateInterface} from './state';
import {ElementHistory, Element} from '@/types/models';

function calcIncludes(item: Element, filterValue: string) :number{
    let countIncludes: number = 0;

    let regExp = new RegExp(filterValue, 'gi');

    if(item.name.includes(filterValue)) {
        const matches = item.name.match(regExp);
        if(matches && matches.length > 0)
            countIncludes = matches.length;
    }


    item.items.forEach(el => {
        if (el.name.includes(filterValue)) {
            const matches = el.name.match(regExp);
            if(matches && matches.length > 0)
                countIncludes += matches.length;
        }
    });

    return countIncludes;
}

const mutation: MutationTree<ItemsStateInterface> = {
    updateItems(state, json){
        state.items = json;
    },
    select(state, item: Element) {
        state.selectedItems.push(item)
    },
    removeFromItems(state, itemIndex: number) {
        state.filteredItems.splice(itemIndex, 1);
    },
    turnBack(state, item: Element) {
        state.filteredItems.push(item);
        state.filteredItems.sort((a:Element, b:Element) => a.id - b.id);
    },
    removeFromSelectedItems(state, itemIndex: number) {
        state.selectedItems.splice(itemIndex, 1);
    },
    addHistory(state, item: ElementHistory) {
        state.historyItems.push(item)
    },
    filteredItems(state, search = '') {
        const filter = search;

        let filteredItems: Array<Element> = [];

        state.filteredItems = state.items;

        state.filteredItems.forEach(el => {
            const inSelected = state.selectedItems.indexOf(el);

            if (inSelected === -1) {
                if (filter === '') {
                    filteredItems.push(el);
                    filteredItems.sort((a:Element, b:Element) => a.id - b.id);
                } else {
                    let include = false;
                    if (el.name.includes(filter)) {
                        include = true;
                    }

                    el.items.forEach(item => {
                        if (item.name.includes(filter)) {
                            include = true;
                        }
                    });

                    if (include)
                        filteredItems.push(el);

                    filteredItems.sort((a:Element, b:Element) => calcIncludes(b, filter) - calcIncludes(a, filter));
                }
            }
        });

        state.filteredItems = filteredItems;

    }
};

export default mutation;
