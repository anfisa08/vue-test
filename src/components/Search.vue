<template>
    <div class="pb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Поиск" v-model="searchPhrase">
    </div>
</template>


<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import store from '@/store'

    @Component
    export default class Search extends Vue {

        searchPhrase: string = '';

        @Watch('searchPhrase')
        onPropertyChanged(value: string, oldValue: string) {
            store.dispatch('items/setSearchPhrase', value);
        }
    }
</script>