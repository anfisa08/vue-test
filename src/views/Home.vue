<template>
    <div class="row">
        <div class="col-12"><Search /></div>
        <div class="col">
            <AllItems/>
        </div>
        <div class="col">
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
        components: {AllItems, SelectedItems, Search}
    })
    export default class Home extends Vue {

    }
</script>
