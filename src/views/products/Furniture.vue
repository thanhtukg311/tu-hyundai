<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.furniture.desc" :title="prod.furniture.title"/>
                <image-center-component :img-url="prod.furniture.img1"/>
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <image-center-component :img-url="prod.furniture.img2"/>
                <title-component :desc="prod.furniture.main_desc" :title="prod.furniture.main_title"/>
            </div>
        </section>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    export default {
        name: "Furniture",
        components: {ImageCenterComponent, TitleComponent},
        props:['prod'],
    }
</script>

<style scoped>

</style>