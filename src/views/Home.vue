<template>
    <div class="row">
        <div class="col">
            <Search/>
            <AllItems/>
        </div>
        <div class="col">
            <h3 class="pb-4">{{selectTitle}}</h3>
            <SelectedItems/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import AllItems from '@/components/AllItems.vue'
    import SelectedItems from '@/components/SelectedItems.vue'
    import Search from '@/components/Search.vue'

    @Component({
        components: {AllItems, SelectedItems, Search},
        metaInfo() {
            return {
                title: "Главная страница"
            };
        }
    })
    export default class Home extends Vue {
        selectTitle: string = 'Выбранные элементы';
    }
</script>
