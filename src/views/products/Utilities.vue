<template>
    <div>
        <section class="box01 arr_sp">
            <div class="inner">
                <title-component :desc="prod.utilities.desc" :title="prod.utilities.title"/>
                <slide-image-component :items="prod.utilities.img_slide"
                                       :settings="carouselSettings"/>
            </div>
        </section>
<!--        <section>-->
<!--            <div class="container">-->
<!--                <sub-title-component :desc="prod.utilities.main_desc" :title="prod.utilities.main_title"/>-->
<!--            </div>-->
<!--        </section>-->
        <div style="height: 20px" class="d-show"></div>
        <section class="box02">
            <div class="inner">
                <triple-component :list-desc="prod.utilities.list_desc"  v-if="!isMobile()"/>
                <slide-image-mobile-component :items="prod.utilities.list_desc" v-else/>
            </div>
        </section>
        <prev-next-component :prev="{slug:prod.slug, menu:'an-toan', name:'An toàn'}" :next="{slug:prod.slug, menu:'thong-so', name:'Thông số xe'}"/>
    </div>
</template>
<script>
    import TitleComponent from "@/components/TitleComponent";
    import TripleComponent from "@/components/TripleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    //import SubTitleComponent from "@/components/SubTitleComponent";
    import SlideImageComponent from "@/components/SlideImageComponent";
    import SlideImageMobileComponent from "@/components/SlideImageMobileComponent";
    export default {
        name: "Utilities",
        components: {SlideImageMobileComponent, SlideImageComponent,  PrevNextComponent, TripleComponent, TitleComponent},
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
        },
        methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>

</style>