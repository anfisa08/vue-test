import {MutationTree} from 'vuex';
import {ItemsStateInterface} from './state';
import {ElementHistory, Element} from '@/types/models';

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

function removeHtmlTags(item: Element): Element {
    item.name = item.name.replace(/<[^>]+>/g, '');

    item.items.forEach(el => {
        el.name = el.name.replace(/<[^>]+>/g, '');
    });

    return item
}

const mutation: MutationTree<ItemsStateInterface> = {
    updateItems(state, json) {
        state.items = json;
    },
    select(state, el: Element) {
        state.selectedItems.push(removeHtmlTags(el))
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
    filteredItems(state) {
        const filter = state.searchPhrase.toLowerCase();

        state.filteredItems = state.items.filter(el => {
            const inSelected = state.selectedItems.indexOf(el);

            el = removeHtmlTags(el);

            if (inSelected === -1) {
                if (filter === '') {
                    return el;
                } else {
                    let include = false;
                    if (el.name.toLowerCase().includes(filter)) {
                        el.name = el.name.replaceAll(new RegExp('('+filter+')','gim'), '<span style="background: rgba(76, 152, 175,0.3)">$1</span>');
                        include = true;
                    }

                    el.items.forEach(item => {
                        if (item.name.toLowerCase().includes(filter)) {
                            item.name = item.name.replaceAll(new RegExp('('+filter+')','gim'),  '<span style="background: rgba(76, 152, 175,0.3)">$1</span>');
                            include = true;
                        }
                    });

                    if (include)
                        return el;

                }
            }
        });

        if (filter === '') {
            state.filteredItems.sort((a: Element, b: Element) => a.id - b.id);
        } else {
            state.filteredItems.sort((a: Element, b: Element) => calcIncludes(b, filter) - calcIncludes(a, filter));
        }

    },
    setSearchPhrase(state, search) {
        state.searchPhrase = search
    }
};

export default mutation;
