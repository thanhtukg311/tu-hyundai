<template>
    <carousel :per-page="1" ref="carousel" :mouse-drag="false" :autoplay="false"  :autoplayTimeout="2000" v-if="items.length > 0"  :navigationEnabled="true" :loop="true" id="slide_sp">
        <slide v-for="(item, index) in items" :key="index">
            <img :src="item.img" alt="" title="">
            <div>
                <h3 class="tlt_h3">{{item.title}}</h3>
                <span class="cnt_slide">{{item.desc}}</span>
            </div>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "SlideImageMobileComponent",
        components: {Carousel, Slide},
        props: {
            items: {
                type: Array,
                default: () => []
            },
            settings: {
                type: Object,
                default: () => {}
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>