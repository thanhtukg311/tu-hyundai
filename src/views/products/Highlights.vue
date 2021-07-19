<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.highlights.desc" :title="prod.highlights.title"/>
                <image-center-component :img-url="prod.highlights.img1"/>
            </div>
        </section>
        <section class="box02 bg_02">
            <div class="container">
                <title-component :desc="prod.highlights.main_desc" :title="prod.highlights.main_title"/>
                <image-center-component :img-url="prod.highlights.img2"/>
                <triple-component :list-desc="prod.highlights.list_desc"/>
            </div>
        </section>
        <section class="box03">
            <div class="container">
                <title-component :desc="prod.highlights.main_desc2" :title="prod.highlights.main_title2"/>
                <image-center-component :img-url="prod.highlights.img3"/>
                <triple-component :list-desc="prod.highlights.list_desc_2"/>
            </div>
        </section>
        <!--box03-->
        <section class="box04">
            <div class="container">
                <title-component :title="'Thư Viện'"/>
                <image-center-component :img-url="prod.highlights.img4"/>
                <ul class="thumb_img">
                    <li><img src="/product/hi_desc1.jpg"></li>
                    <li><img src="/product/hi_desc1.jpg"></li>
                    <li><img src="/product/hi_desc1.jpg"></li>
                    <li><img src="/product/hi_desc1.jpg"></li>
                </ul>
                <slide-thump-component :starting-image="2"
                                       :images="prod.highlights.gallery"
                                       :auto-slide-interval="1500"/>
                <p class="btn_r">
                    <a class="btn_down" href="#"><span><img src="./../../assets/images/btn_download.png"></span>Tải
                        Catalog</a>
                </p>
            </div>
        </section>
        <prev-next-component :prev="false" :next="{slug:prod.slug, menu:'ngoai-that', name:'Ngoại thất'}"/>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    import TripleComponent from "@/components/TripleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import SlideThumpComponent from "@/components/SlideThumpComponent";
    export default {
        name: "Highlights",
        components: {SlideThumpComponent, ImageCenterComponent, PrevNextComponent, TitleComponent, TripleComponent},
        props: ['prod'],
    }
</script>

<style scoped>

</style>