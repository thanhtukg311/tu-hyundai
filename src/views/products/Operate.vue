<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.operate.desc" :title="prod.operate.title"/>
                <image-center-component :img-url="prod.operate.img1"/>
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <title-component :desc="prod.operate.main_desc" :title="prod.operate.main_title"/>
                <image-center-component :img-url="prod.operate.img2"/>
            </div>
        </section>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    export default {
        name: "Operate",
        components: {ImageCenterComponent, TitleComponent},
        props: ['prod']
    }
</script>

<style scoped>

</style>