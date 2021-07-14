<template>
    <div class="tlt_center">
        <h3 class="tlt_h4">{{title}}</h3>
        <span>{{desc}}</span>
    </div>
</template>

<script>
    export default {
        name: "SubTitleComponent",
        props: ['title', 'desc']
    }
</script>

<style scoped>

</style>