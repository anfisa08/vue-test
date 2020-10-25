import {ElementHistory, HistoryType,Element} from '@/types/models';

export interface ExampleStateInterface {
    items: Element[];
    selectedItems: Element[];
    filteredItems: Element[];
    historyItems: ElementHistory[];
    historyType: HistoryType[],
    searchText: string
}

const state: ExampleStateInterface = {
    items: [],
    selectedItems: [],
    filteredItems: [],
    historyItems: [],
    historyType: [
        {name: 'added', title: 'Добавление'},
        {name: 'deleted', title: 'Удаление'}
    ],
    searchText: ''
};

export default state;