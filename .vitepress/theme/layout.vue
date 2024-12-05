<script setup>
import DefaultTheme from 'vitepress/theme'
import { VueDataUi } from "vue-data-ui";
import "vue-data-ui/style.css";
const { Layout } = DefaultTheme
const config = {
    isLoading: true,
    crosshairStroke: "#000",
    centerCircleStroke: "#000",
    intersectCirclesFill: "#000",
}
</script>

<template>
    <Layout>
        <template #doc-after>
            <VueDataUi component="VueUiCursor" :config="config" />
        </template>
    </Layout>
</template>