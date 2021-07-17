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
                                       :settings="carouselSettings"/>
            </div>
        </section>
<!--        <section>-->
<!--            <div class="container">-->
<!--                <sub-title-component :desc="prod.utilities.main_desc" :title="prod.utilities.main_title"/>-->
<!--            </div>-->
<!--        </section>-->
        <section class="box02"  v-if="!isMobileCheck()">
            <div class="container">
                <triple-component :list-desc="prod.utilities.list_desc"/>

                <ul class="blog_slide">
                            <li class="blog_box">
                                <a href="#">
                                    <p class="img_blog">
                                        <img src="images/noibat_img07.jpg">
                                    </p>
                                    <p class="tlt_blog">
                                        Cụm điểu chỉnh media tích hợp nhận diện giọng nói
                                    </p>
                                </a>
                            </li>
                        </ul>
            </div>
        </section>
        <prev-next-component :prev="{slug:prod.slug, menu:'van-hanh', name:'Vận hành'}" :next="{slug:prod.slug, menu:'thong-so', name:'Thông số'}"/>
    </div>
</template>
<script>
    import TitleComponent from "@/components/TitleComponent";
    import TripleComponent from "@/components/TripleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    //import SubTitleComponent from "@/components/SubTitleComponent";
    import SlideImageComponent from "@/components/SlideImageComponent";
    export default {
        name: "Utilities",
        components: {SlideImageComponent,  PrevNextComponent, TripleComponent, TitleComponent},
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