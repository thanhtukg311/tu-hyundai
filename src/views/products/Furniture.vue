<template>
    <div>
        <section class="box01 arr_sp" id="furni">
            <div class="container">
                <title-component :desc="prod.furniture.desc" :title="prod.furniture.title"/>
                <image-center-component :img-url="prod.furniture.img1"/>
                <slide-image-component :items="prod.furniture.img_slide2"
                               :settings="carouselSettings" :singlestyle="true" />
            </div>
        </section>
<!--        <section class="box02">-->
<!--            <div class="container">-->
<!--                <image-center-component :img-url="prod.furniture.img2"/>-->
<!--                <title-component :desc="prod.furniture.main_desc" :title="prod.furniture.main_title"/>-->
<!--            </div>-->
<!--        </section>-->
        <!-- <section class="box02">
            <div class="container">
            <slide-image-component :items="prod.furniture.img_slide"
                               :settings="carouselSettings"/>
            </div>
        </section> -->
        <prev-next-component :prev="{slug:prod.slug, menu:'ngoai-that', name:'Ngoại thất'}" :next="{slug:prod.slug, menu:'van-hanh', name:'Vận hành'}"/>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import SlideImageComponent from "@/components/SlideImageComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    export default {
        name: "Furniture",
        components: {PrevNextComponent, SlideImageComponent, ImageCenterComponent, TitleComponent},
        props:['prod'],
        data(){
            return {
                carouselSettings: {
                    autoplay: true,
                    items_per_set: "1",
                    autoplay_speed: "4000",
                    items_to_scroll: "1",
                    infinite_scrolling: true,
                    show_pagination_dots: false,
                    show_pagination_arrows: true
                },
            }
        }
    }
</script>

<style scoped>

</style>