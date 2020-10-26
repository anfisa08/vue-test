<template>
    <div class="row">
        <div class="col-2"><div class="icon404">¯\_(ツ)_/¯</div></div>
        <div class="col">
            <h4 class="text-danger">404 Ошибка!</h4>
            <p>Страница не существует</p>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';


    @Component({
        metaInfo() {
            return {
                title: "404 Ошибка"
            };
        }
    })
    export default class Error404 extends Vue {
    }
</script>
