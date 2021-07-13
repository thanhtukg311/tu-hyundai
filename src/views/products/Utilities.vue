<template>
    <div>
        <section class="box01">
            <div class="container">
                <div class="tlt_center">
                    <h3 class="tlt_h3">{{prod.utilities.title_1}}</h3>
                    <span>{{prod.utilities.desc_1}}</span>
                </div>
                <img :src="prod.utilities.img_1">
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <div class="tlt_center">
                    <h4 class="tlt_h4">Màn hình tầm trung cảm ứng 8inch</h4>
                    <span>Màn hình cảm ứng trung tâm kích cỡ 8inch đa chức năng, hỗ trợ giải trí với các kết nối các chức<br/>
                            năng Bluetooth/MP3/Radio, hỗ trợ kết nối Apple Carplay và Android Auto, cùng với bản đồ tích hợp</span>
                </div>
                <div class="blog_col03">
                    <div class="blog_box">
                        <a href="#">
                            <img src="./../../assets/images/img_blog.png" width="360px">
                            <p class="tlt_blog">
                                Camera lùi
                            </p>
                            <span>Việc di chuyển lùi cũng như đỗ xe trở nên dễ dàng hơn với hình ảnh sắc nét từ camera lùi</span>
                        </a>
                    </div>
                    <div class="blog_box">
                        <a href="#">
                            <img src="./../../assets/images/img_blog.png" width="360px">
                            <p class="tlt_blog">
                                Cảm biến áp suất lốp
                            </p>
                            <span>Loại bỏ nỗi lo về các vấn đề về lốp xe, an tâm tận hưởng các chuyến đi</span>
                        </a>
                    </div>
                    <div class="blog_box">
                        <a href="#">
                            <img src="./../../assets/images/img_blog.png" width="360px">
                            <p class="tlt_blog">
                                Cửa gió điều hòa và cổng sạc USB hàng ghế 2
                            </p>
                            <span>Việc di chuyển lùi cũng như đỗ xe trở nên dễ dàng hơn với hình ảnh sắc nét từ camera lùi</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="prev-next-cate">
            <div class="container">
                <div class="flex_cate_bottom">
                    <a class="cate_btn prev_cate" href="#"><i class="fal fa-chevron-left"></i>An toàn</a>
                    <a class="cate_btn next_cate" href="#">Thông số xe<i class="fal fa-chevron-right"></i></a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: "Utilities",
        props:['prod'],
    }
</script>

<style scoped>

</style>