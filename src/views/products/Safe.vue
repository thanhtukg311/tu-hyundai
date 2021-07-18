<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.utilities.desc" :title="prod.utilities.title"/>
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <slide-image-component :items="prod.furniture.img_slide"
                                       :settings="false"/>
            </div>
        </section>
        <prev-next-component :prev="{slug:prod.slug, menu:'van-hanh', name:'Vận hành'}"
                             :next="{slug:prod.slug, menu:'tien-nghi', name:'Tiện nghi'}"/>
    </div>
</template>

<script>
    import PrevNextComponent from "@/components/PrevNextComponent";
    import TitleComponent from "@/components/TitleComponent";
    import SlideImageComponent from "@/components/SlideImageComponent";

    export default {
        name: "Safe",
        components: {SlideImageComponent, TitleComponent, PrevNextComponent},
        props:['prod']
    }
</script>

<style scoped>

</style>