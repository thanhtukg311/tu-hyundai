<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.exterior.desc" :title="prod.exterior.title"/>
            </div>
        </section>
        <!--box02-->
                <div class="item_box_tgle on">
                    <div class="item_toggle">
                        <img src="./../../assets/images/item_img01.png">
                        <p class="tlt_item">Mặt trước</p>
                        <button class="btnShow"></button>
                    </div>
                    <div id="item_anchor" class="item_content container">
                        <div class="transition">
                            <div class="tlt_center">
                                <h3 class="tlt_h3">Mặt trước thiết kế thể thao mạnh mẽ</h3>
                                <span>Kích thích thị giác bằng lưới tản nhiệt thác nước mới cùng cụm đèn ban ngày DRL thiết kế phá cách dạng boomerang và đèn sương mù.
                                </span>
                            </div>
                            <div class="img_center">
                                <img src="./../../assets/images/ngoaithat_img01.jpg">
                            </div>
                            <ul class="blog_col02">
                                <li class="blog_box">
                                    <a href="#">
                                        <p class="img_blog">
                                            <img src="./../../assets/images/ngoaithat_img02.jpg">
                                        </p>
                                        <p class="tlt_blog">
                                            Cụm đèn ban ngày DRL (Daytime Running Light) được thiết kế phá cách dạng boomerang
                                        </p>
                                    </a>
                                </li>
                                <li class="blog_box">
                                    <p class="img_blog">
                                        <img src="./../../assets/images/ngoaithat_img03.jpg">
                                    </p>
                                    <p class="tlt_blog">
                                        Đèn sương mù tích hợp trên cản trước thể thao
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item_box_tgle on">
                    <div class="item_toggle">
                        <img src="./../../assets/images/item_img02.png">
                        <p class="tlt_item">Cạnh bên</p>
                        <button class="btnShow"></button>
                    </div>
                    <div class="item_content container">
                        <ul class="blog_col03">
                            <li class="blog_box">
                                <a href="#">
                                    <p class="img_blog">
                                        <img src="./../../assets/images/ngoaithat_img04.jpg">
                                    </p>
                                    <p class="tlt_blog">
                                        Gương chiếu hậu gập điện tích hợp sưởi gương
                                    </p>
                                </a>
                            </li>
                            <li class="blog_box">
                                <p class="img_blog">
                                    <img src="./../../assets/images/ngoaithat_img05.jpg">
                                </p>
                                <p class="tlt_blog">
                                    Tay nắm cửa mạ chrome
                                </p>
                            </li>
                            <li class="blog_box">
                                <p class="img_blog">
                                    <img src="./../../assets/images/ngoaithat_img06.jpg">
                                </p>
                                <p class="tlt_blog">
                                    Vành hợp kim 15 inch cao cấp tạo hình trẻ trung 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item_box_tgle on">
                    <div class="item_toggle">
                        <img src="./../../assets/images/item_img03.png">
                        <p class="tlt_item">Mặt sau</p>
                        <button class="btnShow"></button>
                    </div>
                    <div class="item_content container">
                        <ul class="blog_col02">
                            <li class="blog_box">
                                <a href="#">
                                    <p class="img_blog">
                                        <img src="./../../assets/images/ngoaithat_img07.jpg">
                                    </p>
                                    <p class="tlt_blog">
                                        Đèn hậu dạng LED thiết kế cách điệu, đồng bộ với cụm đèn phía trước
                                    </p>
                                </a>
                            </li>
                            <li class="blog_box">
                                <p class="img_blog">
                                    <img src="./../../assets/images/ngoaithat_img08.jpg">
                                </p>
                                <p class="tlt_blog">
                                    Đèn phanh trên cao
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    export default {
        name: "Exterior",
        components: {TitleComponent},
        props:['prod']
    }
</script>

<style scoped>

</style>