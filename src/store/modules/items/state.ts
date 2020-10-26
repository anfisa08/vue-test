import {ElementHistory, HistoryType, Element} from '@/types/models';

export interface ItemsStateInterface {
    items: Element[];
    selectedItems: Element[];
    filteredItems: Element[];
    historyItems: ElementHistory[];
    historyType: HistoryType[];
}

const state: ItemsStateInterface = {
    items: [],
    selectedItems: [],
    filteredItems: [],
    historyItems: [],
    historyType: [
        {name: 'added', title: 'Добавление'},
        {name: 'deleted', title: 'Удаление'}
    ]
};

export default state;