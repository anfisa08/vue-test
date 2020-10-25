<template>
    <div>
        <header class="pb-4">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="../assets/logo.png" width="40px">
                    <div class="navbar-brand">Тестовое задание на vue</div>
                </nav>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-action" v-for="(link, index) in links" :key="index">
                            <router-link :to="link.path">{{link.title}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <router-view/>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import {Links} from '@/types/links'

    @Component
    export default class MainLayout extends Vue {
        links: Links[] = [
            {
                path: '/',
                title: 'Главная'
            },
            {
                path: '/history/',
                title: 'История'
            },
            {
                path: '/history/?historyType=added',
                title: 'История добавлений'
            },
            {
                path: '/history/?historyType=deleted',
                title: 'История удалений'
            },
        ]
    }
</script>

<style scoped>

</style>