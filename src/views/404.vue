<template>
    <div id="page_404">
        <h3>Page Not Found</h3>
        <p>xxxx</p>
        <router-link
                :to="{name: 'home'}"
                style="width: 300px">Back to home
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>

</style>