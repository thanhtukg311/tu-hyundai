<template>
    <div>
        <header id="header">
            <div class="container header_main">
                <div class="h_box">
                    <h1>
                        <a href="#">
                            <img src="./../assets/images/logo.png" width="250px" alt="logo">
                        </a>
                    </h1>
                </div>
                <div class="tlt_page_top">
                    <span>Nổi bật</span>
                </div>
                <nav id="gnavi">
                    <ul class="gnavi_pc">
                        <li><router-link to="/">Trang chủ</router-link></li>
                        <li><router-link to="/">Giới thiệu</router-link></li>
                        <li><router-link :to="{name: 'san-pham', params:{slug: 'i10-2020'}}">Sản phẩm</router-link></li>
                        <li><router-link to="/">Mua xe</router-link></li>
                        <li><router-link to="/">Dịch vụ</router-link></li>
                        <li><router-link to="/">Tin tức</router-link></li>
                        <li><router-link to="/">Liên hệ</router-link></li>
                    </ul>
                </nav>
                <div class="btn_search">
                    <img src="./../assets/images/search.png" alt="search" width="15px">
                </div>
                <div class="header_sp">
                    <p class="logo"><a href=""><img src="" alt=""></a></p>
                    <div class="ico_menu_click">
                        <label class="icon_menu closes"><span></span></label>
                        <label class="icon_menu open"><span></span></label>
                    </div>
                </div>
            </div>
        </header>
        
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>

</style>