<template>
    <div>
        <section class="box01">
            <div class="inner">
                <title-component :desc="prod.safe.desc" :title="prod.safe.title"/>
                <slide-image-component :items="prod.safe.list_desc"
                                       :settings="carouselSettings"/>
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
    }
</script>

<style scoped>

</style>