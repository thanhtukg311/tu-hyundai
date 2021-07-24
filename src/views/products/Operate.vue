<template>
    <div>
        <section class="box01 arr_sp">
            <div class="inner">
                <title-component :desc="prod.operate.desc" :title="prod.operate.title"/>
                <image-center-component :img-url="prod.operate.img1"/>
                <title-component :desc="prod.operate.main_desc" :title="prod.operate.main_title"/>
                <image-center-component :img-url="prod.operate.img2"/>
                <double-component :list-desc="prod.operate.list_desc" v-if="!isMobile()"/>
                <slide-image-mobile-component :items="prod.operate.list_desc" v-else/>
                <div style="height: 70px" class="d-show"></div>
            </div>
        </section>
        <!-- <section class="box02">
            <div class="container">
                <title-component :desc="prod.operate.main_desc" :title="prod.operate.main_title"/>
                <image-center-component :img-url="prod.operate.img2"/>
                <double-component :list-desc="prod.operate.list_desc" v-if="!isMobile()"/>
                <slide-image-mobile-component :items="prod.operate.list_desc" v-else/>
            </div>
        </section> -->
        <prev-next-component :prev="{slug:prod.slug, menu:'noi-that', name:'Nội thất'}" :next="{slug:prod.slug, menu:'an-toan', name:'An toàn'}"/>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    import DoubleComponent from "@/components/DoubleComponent";
    import SlideImageMobileComponent from "@/components/SlideImageMobileComponent";
    export default {
        name: "Operate",
        components: {
            SlideImageMobileComponent, DoubleComponent, PrevNextComponent, ImageCenterComponent, TitleComponent},
        props: ['prod'],
        methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
    }
</script>

<style scoped>

</style>