<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
</template>


<script>
import { useThemeStore } from './stores/theme'

export default {
    mounted() {
        const themeStore = useThemeStore();
        themeStore.setInitialTheme();
    }
}
</script>