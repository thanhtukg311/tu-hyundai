<template>
    <div>
       <!--footer-->
        <footer id="footer">
            <div class="f_box01">
                <div class="container f_menu_flex">
                    <ul class="f_menu">
                        <li>Sản phẩm</li>
                        <li><a href="#">Xe du lịch</a></li>
                        <li><a href="#">Xe SUV, Xe MPV</a></li>
                        <li><a href="#">Xe chuyên dụng, tải nhẹ</a></li>
                        <li><a href="#">Xe thương mại</a></li>
                    </ul>
                    <ul class="f_menu">
                        <li>Mua xe</li>
                        <li><a href="#">Chọn xe</a></li>
                        <li><a href="#">So sánh xe</a></li>
                        <li><a href="#">Khuyến mãi</a></li>
                        <li><a href="#">Đăng ký lái thử</a></li>
                        <li><a href="#">Tìm đại lý</a></li>
                        <li><a href="#">Tải Catalog</a></li>
                    </ul>
                    <ul class="f_menu">
                        <li>Giới thiệu</li>
                        <li><a href="#">Thương hiệu Hyundai</a></li>
                        <li class="mb50"><a href="#">TC Motor</a></li>
                        <ul class="f_menu">
                            <li>Hyundai Thành Công</li>
                            <li><a href="#">Tin công ty</a></li>
                            <li><a href="#">Đăng ký làm đại lý</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                        </ul>
                    </ul>
                    <ul class="f_menu">
                        <li>Dịch vụ</li>
                        <li><a href="#">Ứng dụng Hyundai ME!</a></li>
                        <li><a href="#">Chương trình dịch vụ</a></li>
                        <li><a href="#">Phụ tùng & Phụ kiện chính hãng</a></li>
                        <li><a href="#">Chăm sóc khách hàng</a></li>
                        <li><a href="#">Cập nhật AVN</a></li>
                    </ul>
                </div>
            </div>
            <div class="f_box02">
                <div class="container f_box02_flex">
                    <div class="f_intro">
                        <p>Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam (HTV)</p>
                        <span>Trụ sở chính: KCN Gián Khẩu, Gia Trấn, Gia Viễn, Ninh Bình</span>
                        <span>Văn phòng Hà Nội: Thành Công Tower, số 79 Dịch Vong Hậu, Cầu Giấy, Hà Nội.</span>
                        <span>Mã số doanh nghiệp: 2700919392. Đăng ký lần đầu ngày 18/11/2020. Đăng ký thay đổi lần thứ 1 ngày 31/03/2021</span>
                        <span class="f_icon f_gmail"><i class="far fa-envelope"></i>cs@hyundai.tcmotor.vn</span>
                        <span class="f_icon f_hline"><i class="fas fa-phone-alt"></i>Hotline: 1900561212</span>
                        <span class="f_social">
                            <span class="f_icon fb"><a href="#"><i class="fab fa-facebook-square"></i>Facebook</a></span>
                            <span class="f_icon yb"><a href="#"><i class="fab fa-youtube"></i>Youtube</a></span>
                        </span>
                    </div>
                    <div class="dow_app">
                        <p>Tải và cài đặt Ứng dụng Hyundai ME!</p>
                        <div class="img_app">
                            <img src="./../assets/images/qr_code.png" width="170">
                            <p class="btn_app">
                                <a class="btn_store" href="#">Apple Store<i class="fab fa-apple"></i></a>
                                <a class="btn_store" href="#">Google Play<i class="fab fa-google-play"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f_box03">
                <div class="container f_box03_flex">
                    <div class="privacy">
                        <span>Chính sách bảo mật thông tin</span>
                        <span>© Copyright 2021 Hyundai TC Motor. All rights Reserved</span>
                    </div>
                    <img src="./../assets/images/img_bcn.png" width="140">
                </div>
            </div>
            <p id="totop"><a href="#"><img src="images/totop.png" alt="to top" /></a></p>
            <ul class="sliderbar_fix">
                <li class="tel"> <a href="tel:482298830" onclick="ga('send', 'event', 'sp', 'tel');"><span class="call">048-229-8830</span>
                    <p class="hours">9:00～13:00/15:00～19:00</p>
                </a></li>
                <li class="web"><a href="" target="_blank"><span>WEB診療予約</span></a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>