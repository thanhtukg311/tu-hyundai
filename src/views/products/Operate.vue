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
                <double-component :list-desc="prod.operate.list_desc"/>
            </div>
        </section>
        <prev-next-component :prev="{slug:prod.slug, menu:'noi-that', name:'Nội thất'}" :next="{slug:prod.slug, menu:'tien-nghi', name:'Tiện nghi'}"/>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    import DoubleComponent from "@/components/DoubleComponent";
    export default {
        name: "Operate",
        components: {DoubleComponent, PrevNextComponent, ImageCenterComponent, TitleComponent},
        props: ['prod']
    }
</script>

<style scoped>

</style>