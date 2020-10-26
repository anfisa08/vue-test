<template>
    <div class="list-group">
        <div v-for="item in filteredItems" :key="item.id" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" v-html="item.name"></h5>
                <button type="button" class="btn btn-primary" @click="select(item)">+</button>
            </div>
            <p class="mb-1" v-for="subItem in item.items" :key="subItem.id" v-html="subItem.name"></p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Element} from '@/types/models';
    import store from '@/store'

    @Component
    export default class AllItems extends Vue {

        created(){
            store.dispatch('items/getItems', process.env.VUE_APP_API_URL)
        }

        get filteredItems(): Element[]{
            return store.getters['items/filteredItems'];
        }

        select(item: Element) {
            const foundItemIndex = this.filteredItems.indexOf(item);
            if (foundItemIndex === -1) {
                console.error('Данный элемент не найден!');
                return;
            }

            store.commit('items/select', item);
            store.commit('items/removeFromItems', foundItemIndex);
            store.dispatch('items/addToHistory', {item, type: 0});
        }
    }
</script>
