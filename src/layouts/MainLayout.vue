<template>
    <div>
        <header-component/>
        <router-view />
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent";
    import FooterComponent from "@/components/FooterComponent";
    export default {
        name: "MainLayout",
        components: {FooterComponent, HeaderComponent}
    }
</script>

<style scoped>

</style>