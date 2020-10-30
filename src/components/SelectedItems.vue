<template>
    <div class="list-group">
        <div v-for="item in selectedItems" :key="item.id"
             class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" v-html="item.name"></h5>
                <button type="button" class="btn btn-primary" @click="remove(item)">-</button>
            </div>
            <p class="mb-1" v-for="subItem in item.items" :key="subItem.id" v-html="subItem.name" v-opacity></p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Element} from '@/types/models';
    import store from '@/store'

    @Component
    export default class SelectedItems extends Vue {
        get selectedItems():Element[] {
            return store.state.items.selectedItems;
        }

        remove(item: Element) {
            store.dispatch('items/removeFromSelectedItems', item)
            store.dispatch('items/addToHistory', {item, type: 1});
        }
    }
</script>