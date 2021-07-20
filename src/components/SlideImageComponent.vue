<template>
            <carousel :per-page="1" :mouse-drag="false" :autoplay="true"  :autoplayTimeout="2000" v-if="items.length > 0"  :navigationEnabled="true" :loop="true" id="slide_pc">
                <slide v-for="(item, index) in items" :key="index">
                    <img :src="item.img" alt="" title="" style="margin-bottom: 30px">
                    <div class="tlt_center">
                        <h3 class="tlt_h3">{{item.title}}</h3>
                        <span>{{item.desc}}</span>
                    </div>
                </slide>
            </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "SlideImageComponent",
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
    }
</script>

<style scoped>
    .owl-pagination {
        position: absolute;
        right: 0;
        top: -50px;
    }
</style>