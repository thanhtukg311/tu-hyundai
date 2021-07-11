<template>
    <div>
        <header id="header">
            <div class="container header_main">
                <div class="h_box">
                    <h1>
                        <a href="#">
                            <img src="images/logo.png" width="250px" alt="logo">
                        </a>
                    </h1>
                </div>
                <div class="container header_sp">
                    <p class="logo"><a href=""><img src="" alt=""></a></p>
                    <div class="ico_menu_click">
                        <label class="icon_menu closes"><span></span></label>
                        <label class="icon_menu open"><span></span></label>
                    </div>
                </div>
                <nav id="gnavi">
                    <ul class="gnavi_pc">
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Giới thiệu</a></li>
                        <li><a href="">Sản phẩm</a></li>
                        <li><a href="">Mua xe</a></li>
                        <li><a href="">Dịch vụ</a></li>
                        <li><a href="">Tin tức</a></li>
                        <li><a href="">Liên hệ</a></li>
                        <li id="close">x 閉じる</li>
                    </ul>
                </nav>
                <div class="btn_search">
                    <img src="images/search.png" alt="search" width="15px">
                </div>
            </div>
        </header>
        <div class="container">
                <ul class="topic_path">
                    <li><a href="./">Trang chủ</a></li>
                    <li>Sản phẩm</li>
                    <li>i10 2020</li>
                    <li>Nổi bật</li>
                </ul>
            </div>
            <div id="mainvisual">
                <ul class="slider_main">
                    <li class="bg01"></li>
                    <li class="bg02"></li>
                    <li class="bg03"></li>
                </ul>
                <h2 class="tlt_slider_main">All New Grand<br/>
                i10 Sedan</h2>
            </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>

</style>