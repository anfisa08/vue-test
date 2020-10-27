<template>
    <div>
        <h3>{{pageTitle}}</h3>
        <ul class="list-group">
            <li v-for="(item, index) in historyItems" :key="index" class="list-group-item"
                :class="[(item.type==='added') ? 'list-group-item-success': 'list-group-item-danger']">
                {{item.elementName}} - {{item.name}} ({{item.time | date('datetime')}})
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {ElementHistory} from '@/types/models';
    import store from '@/store'

    @Component({
        props: ['type'],
        metaInfo() {
            return {
                title: this.$data.pageTitle
            };
        }
    })
    export default class History extends Vue {

        pageTitle: string = '';

        get historyItems() {
            const historyItems = store.state.items.historyItems;

            switch (this.$props.type) {
                case 'added':
                    this.pageTitle = 'История добавлений';
                    return historyItems.filter((el: ElementHistory) => el.type === 'added');
                case 'deleted':
                    this.pageTitle = 'История удалений';
                    return historyItems.filter((el: ElementHistory) => el.type === 'deleted');
                default:
                    this.pageTitle = 'История';
                    return historyItems;
            }
        }
    }
</script>