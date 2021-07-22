<template>
    <div class="top_bar">
        <div class="container">
            <ul class="topic_path">
                <li><router-link to="./">Trang chủ</router-link></li>
                <li>Sản phẩm</li>
                <li>{{prod.title}}</li>
                <li>{{this.menu}}</li>
            </ul>
        </div>
        <div id="mainvisual">
            <div class="img_main">
                    <img :src="prod.img_url">
            </div>
            <h2 class="tlt_slider_main">{{prod.description}}<br/>
               <span> {{prod.name}}</span></h2>
        </div>
        <div id="content">
            <div ref="menu_fix" class="menu_fix">
            <div class="menu_content">
                <ul class="container menu_cnt_top">
                    <li><a target="_blank" href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"><p><i class="fal fa-sliders-h"></i><span>Chọn xe</span></p></a></li>
                    <li><a target="_blank" href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly"><p><i class="fal fa-map-marker-alt"></i><span>Tìm đại lý</span></p></a></li>
                    <li><a target="_blank" href="https://www.hyundai.tcmotor.vn/mua-xe/dang-ky-lai-thu"><p><i class="far fa-steering-wheel"></i><span>Đăng ký lái thử</span></p></a></li>
                    <li><a target="_blank" href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh"><p><i class="fal fa-repeat"></i><span>So sánh</span></p></a></li>
                    <li><a target="_blank" href="./public/product_new/Grand-i10-Sedan-Catalogue.pdf" download><p><i class="fal fa-arrow-to-bottom"></i><span>Tải catalog</span></p></a></li>
                </ul>
            </div>
            <div class="sub_menu_content">
                <ul class="container sub_menu_cnt_top">
                    <p class="tlt_type_car">
                        {{prod.code}}
                    </p>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'noi-bat' }}" v-bind:class="{'active': menuSlug == 'noi-bat'}">Nổi bật</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'ngoai-that' }}" v-bind:class="{'active': menuSlug == 'ngoai-that'}">Ngoại thất</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'noi-that' }}" v-bind:class="{'active': menuSlug == 'noi-that'}">Nội thất</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'van-hanh' }}" v-bind:class="{'active': menuSlug == 'van-hanh'}">Vận hành</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'an-toan' }}" v-bind:class="{'active': menuSlug == 'an-toan'}">An toàn</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'tien-nghi' }}" v-bind:class="{'active': menuSlug == 'tien-nghi'}">Tiện nghi</router-link></li>
                    <li><router-link :to="{name: 'san-pham', params:{slug: prod.slug, menu: 'thong-so' }}" v-bind:class="{'active': menuSlug == 'thong-so'}">Thông số xe</router-link></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuNavLayout",
        computed: {
        },
        components: {
        },
        props:['prod','menuSlug'],
        data() {
            return {
                slug: '',
                menu: 'Nổi bật',
                top: 750
            }
        },
        watch: {
            $route (){
                this.slug = this.$route.params.slug
                switch (this.$route.params.menu) {
                    case "noi-bat":
                        this.menu = 'Nổi bật'
                        break;
                    case "ngoai-that":
                        this.menu = 'Ngoại thất'
                        break;
                    case "noi-that":
                        this.menu = 'Nội thất'
                        break;
                    case "thong-so":
                        this.menu = 'Thông số xe'
                        break;
                    case "tien-nghi":
                        this.menu = 'Tiện nghi'
                        break;
                    case "van-hanh":
                        this.menu = 'Vận hành'
                        break;
                    case "an-toan":
                        this.menu = 'An toàn'
                        break;
                }
            }
        },
        mounted() {
            this.top = this.$refs.menu_fix.offsetTop
            document.addEventListener('scroll', this.scrollMenu)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollMenu);
        },
        methods: {
            scrollMenu(){
                if(window.scrollY > this.top){
                    this.$refs.menu_fix.classList.add('fixed')
                } else {
                    this.$refs.menu_fix.classList.remove('fixed')
                }
            }
        }
    }
</script>

<style scoped>

</style>