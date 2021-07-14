<template>
    <div class="img_center">
        <img :src="imgUrl">
    </div>
</template>

<script>
    export default {
        name: "ImageCenterComponent",
        props: ['imgUrl']
    }
</script>

<style scoped>

</style>