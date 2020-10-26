import {ActionTree} from 'vuex';
import {StateInterface} from '@/store';
import {ItemsStateInterface} from './state';
import {ElementHistory} from '@/types/models';
import json from '@/assets/items.json'

const actions: ActionTree<ItemsStateInterface, StateInterface> = {
    async getItems({commit}){
        let jsonData;

        try {
            let response = await fetch('https://c56b8e9d-508d-4ea7-8bdf-1a615fc7dfaa.mock.pstmn.io/items/');

            if(response.status === 200) {
                jsonData = await response.json();
            } else {
                jsonData = json;
            }

        } catch(e){
            console.error(e);
            jsonData = json;
        }

        commit('updateItems', jsonData);
        commit('filteredItems');

    },
    addToHistory({state, commit}, {item, type}) {
        const historyElement: ElementHistory = {
            elementId: item.id,
            elementName: item.name,
            name: state.historyType[type].title,
            type: state.historyType[type].name,
            time: new Date()
        };
        commit('addHistory', historyElement)
    }
};

export default actions;
