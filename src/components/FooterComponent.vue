<template>
  <div>
    <!--footer-->
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <footer id="footer">
      <!-- <div class="f_box01">
        <div class="container f_menu_flex">
          <ul class="f_menu">
            <li class="f_menu_h">
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--1"
                >Xe du lịch</a
              >
              <ul class="sub_menu footer-menu--1">
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/i10-2020/noi-bat">
                    Grand i10 Hatchback
                  </a>
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/i10-2020-sedan/noi-bat">
                    Grand i10 Sedan
                  </a>
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/accent-2021"
                    >Accent</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/elantra-2019"
                    >Elantra</a
                  >
                </li>
              </ul>
            </li>
            <li class="f_menu_h">
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--2"
                >Mua xe</a
              >
              <ul class="sub_menu footer-menu--2">
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
                    >Chọn xe</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh"
                    >So sánh xe</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/mua-xe/khuyen-mai"
                    >Khuyến mãi</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/mua-xe/dang-ky-lai-thu"
                    >Đăng ký lái thử</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly"
                    >Tìm đại lý</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/mua-xe/tai-catalogue"
                    >Tải Catalog</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="f_menu">
            <li>
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--3"
                >Xe SUV</a
              >
              <ul class="sub_menu footer-menu--3">
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/kona"
                    >Kona</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/tucson-2019"
                    >Tucson</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/santafe-2021"
                    >Santafe</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--4"
                >Thương hiệu Hyundai</a
              >
              <ul class="sub_menu footer-menu--4">
                <li>
                  <a href="://www.hyundai.tcmotor.vn/thuong-hieu/lich-su"
                    >Lịch sử</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/thuong-hieu/lich-su-hyundai-thuong-mai"
                    >Lịch sử Hyundai Thương mại</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/thuong-hieu-hyundai/cong-nghe"
                    >Công nghệ</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/thuong-hieu-hyundai/thiet-ke"
                    >Thiết kế</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--5"
                >Hyundai Thành Công</a
              >
              <ul class="sub_menu footer-menu--5">
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/tin-tuc/tin-cong-ty"
                    >Tin công ty</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/dang-ky-lam-dai-ly"
                    >Đăng ký làm đại lý</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/tin-tuc/tin-tuyen-dung"
                    >Tuyển dụng</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="f_menu">
            <li>
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--6"
                >Xe chuyên dụng, tải nhẹ</a
              >
              <ul class="sub_menu footer-menu--6">
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/starex-h1"
                    >Starex (H1)</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/san-pham/santafe-cho-tien"
                    >Santa Fe chở tiền</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/san-pham/starex-cho-tien"
                    >Starex chở tiền</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/san-pham/starex-cuu-thuong"
                    >Starex cứu thương</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="f_menu">
            <li>
              <a
                href="#"
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".footer-menu--8"
                >Xe thương mại</a
              >
              <ul class="sub_menu footer-menu--8">
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/san-pham/new-mighty-75s-110s"
                    >New Mighty 75S & 110S/110SP</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/ex-series-gt"
                    >Mighty EX8 GT</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/new-universe"
                    >New Universe</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/HD1000"
                    >HD 1000 Đầu kéo</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/hd270-Dump"
                    >HD270 tự đổ</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/new-county"
                    >New County</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/xcient-gt"
                    >Đầu kéo Xcient GT</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/hd270-mixer"
                    >HD270 Trộn bê tông</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/HD260-320"
                    >HD260-320</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/hd240"
                    >HD240</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/mighty-n250"
                    >New Mighty N250-N250SL</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.hyundai.tcmotor.vn/san-pham/new-porter-150"
                    >New Porter 150</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/solati"
                    >Solati</a
                  >
                </li>
                <li>
                  <a href="https://www.hyundai.tcmotor.vn/san-pham/ex-series"
                    >Mighty Ex Series</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="f_box02">
        <div class="container">
          <div>
            <router-link to="./" class="logo-footer" />
          </div>
          <div class="f_menu_flex">
            <ul class="f_menu">
              <li class="f_menu_h">
                <a
                  href="#"
                  :data-bs-toggle="this.isCollapse"
                  data-bs-target=".footer-menu--1"
                  >Sản phẩm</a
                >

                <ul class="sub_menu footer-menu--1">
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target=".footer-menu--sub--1"
                      >Xe du lịch</a
                    >
                    <ul class="sub_menu--sub footer-menu--sub--1">
                      <li>
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/elantra"
                          >Elantra</a
                        >
                      </li>

                      <li>
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/elantra-sport"
                          >Elantra Sport</a
                        >
                      </li>

                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/accent"
                          >Accent</a
                        >
                      </li>

                      <li>
                        <a
                          href="/san-pham/i10-2020/noi-bat"
                          >Grand i10 Hatchback</a
                        >
                      </li>

                      <li>
                        <a
                          href="/san-pham/i10-2020-sedan/noi-bat"
                          >Grand i10 sedan</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target=".footer-menu--sub--2"
                      >Xe SUV, Xe MPV</a
                    >
                    <ul class="sub_menu--sub footer-menu--sub--2">
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/santa-fe">Santa Fe</a>
                      </li>

                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/tucson">Tucson</a>
                      </li>

                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/kona">Kona</a>
                      </li>

                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/starex-h1">Starex (H1)</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target=".footer-menu--sub--3"
                      >Xe chuyến dụng, tải nhẹ</a
                    >
                    <ul class="sub_menu--sub footer-menu--sub--3">
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/santa-fe-cho-tien"
                          >Santa fe chở tiền</a
                        >
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/starex-cho-tien">Starex chở tiền</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/starex-cuu-thuong"
                          >Starex cứu thương</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target=".footer-menu--sub--4"
                      >Xe thương mại</a
                    >
                    <ul class="sub_menu--sub footer-menu--sub--4">
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/new-mighty-75s-110s"
                          >NEW MIGHTY 75S &amp; 110S</a
                        >
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/universe">Universe</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/HD700-1000%20tractor"
                          >HD700-1000 Đầu kéo</a
                        >
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/hd270-Dump">HD270 Tự đổ</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/hd270-mixer">HD270 Trộn bê tông</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/new-county">New County</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/hd260-320">HD260-320</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/hd210">HD210</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/mighty-n250">New Mighty N250</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/new-porter-150">NEW PORTER 150</a>
                      </li>
                      <li>
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/solati">Solati</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="f_menu">
              <li class="f_menu_h">
                <a
                  href="#"
                  :data-bs-toggle="this.isCollapse"
                  data-bs-target=".footer-menu--2"
                  >Mua xe</a
                >
                <ul class="sub_menu footer-menu--2">
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
                      >Chọn xe</a
                    >
                  </li>
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh"
                      >So sánh xe</a
                    >
                  </li>
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/khuyen-mai"
                      >Khuyến mãi</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/mua-xe/dang-ky-lai-thu"
                      >Đăng ký lái thử</a
                    >
                  </li>
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly"
                      >Tìm đại lý</a
                    >
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="f_menu">
              <li>
                <a
                  href="#"
                  :data-bs-toggle="this.isCollapse"
                  data-bs-target=".footer-menu--3"
                  >Dịch vụ</a
                >
                <ul class="sub_menu footer-menu--3">
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/phu-tung-phu-kien-chinh-hang"
                      >Phụ tùng & Phụ kiện chính hãng</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/dang-ky-lam-dai-ly"
                      >Đăng ký làm đại lý</a
                    >
                  </li>
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly"
                      >Tìm đại lý</a
                    >
                  </li>

                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/gioi-thieu-chung"
                      >Chăm sóc khách hàng</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/cap-nhat-avn/cap-nhat-avn"
                      >Cập nhật AVN</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="f_menu">
              <li class="f_menu_h">
                <a
                  href="#"
                  :data-bs-toggle="this.isCollapse"
                  data-bs-target=".footer-menu--4"
                  >Giới thiệu</a
                >
                <ul class="sub_menu footer-menu--4">
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong-thuong-mai/tin-tuc/tin-cong-ty-thuong-mai"
                      >Tin công ty HTV</a
                    >
                  </li>
                  <li>
                    <a href="https://www.hyundai.tcmotor.vn/thuong-hieu/lich-su"
                      >Giới thiệu Hyundai</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong-thuong-mai/tin-tuc/tin-cong-ty-thuong-mai"
                      >Giới thiệu Hyundai Thành Công</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong-thuong-mai/tin-tuc/tin-tuyen-dung-thuong-mai"
                      >Tuyển dụng</a
                    >
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="f_menu">
              <li class="f_menu_h">
                <a
                  href="#"
                  :data-bs-toggle="this.isCollapse"
                  data-bs-target=".footer-menu--5"
                  >Social Media</a
                >
                <ul class="sub_menu footer-menu--5">
                  <li>
                    <div>
                      Email:
                      <a href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
                        >cs@hyundai.tcmotor.vn</a
                      >
                    </div>
                    <div class="mt-2">
                      Hotline:
                      <a href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh"
                        >1900561212</a
                      >
                    </div>
                    <div class="mt-3">
                      <a href="https://www.facebook.com/hyundaithanhcong"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="https://www.youtube.com/user/HyundaiTC"
                        ><i class="fab fa-youtube"></i
                      ></a>
                    </div>
                    <div class="d-flex mt-3">
                      <div>
                        Tải app Hyundai ME<br />
                        <div class="mt-2">
                          <a
                            href="https://apps.apple.com/vn/app/apple-store/id1449448399?l=vi"
                            class="ic ic--down-ios"
                          ></a>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.htc.hyundaime&hl=vi"
                            class="ic ic--down-android ml5"
                          ></a>
                        </div>
                      </div>
                      <div class="ml10">
                        <a
                          href="https://hyundaime.hyundai-thanhcong.vn/mobile-platform-detection/non-mobile-platform/"
                          class="ic ic--qr-ft"
                        ></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="f_box03">
        <div class="container f_box03_flex">
          <div class="privacy">
            <span class="fs14"
              >Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam
              (HTV)</span
            >
            <span class="mt-2"
              >Trụ sở chính: Khu công nghiệp Gián Khẩu, Xã Gia Trấn, Huyện Gia
              Viễn, Tỉnh Ninh Bình</span
            >
            <span
              >Văn phòng HN: Tầng 12, Tòa nhà Thành Công Tower, 79 Dịch Vọng
              Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</span
            >
            <span
              >Văn phòng HCM: Tầng 14, Tòa nhà Vincom Center, 72 Lê Thánh Tôn,
              Phường Bến Nghé, Quận 1, TP Hồ Chí Minh</span
            >
            <span class="mt-3"
              >© Copyright 2017 TC MOTOR. All rights Reserved</span
            >
          </div>
          <a
            href="http://online.gov.vn/Home/WebDetails/76931?AspxAutoDetectCookieSupport=1"
            target="_blank"
            ><img src="./../assets/images/img_bcn.png" width="140"
          /></a>
        </div>
      </div>
      <ul class="sliderbar_fix">
        <li class="tel">
          <a href="tel:482298830" onclick="ga('send', 'event', 'sp', 'tel');"
            ><span class="call">048-229-8830</span>
            <p class="hours">9:00～13:00/15:00～19:00</p>
          </a>
        </li>
        <li class="web">
          <a href="" target="_blank"><span>WEB診療予約</span></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  data() {
    return {
      isCollapse: "collapse",
      isOpen: false,
    };
  },
  methods: {
    myEventHandler() {
      var width = window.innerWidth;
      if (width > 640) {
        this.isCollapse = "";
      } else {
        this.isCollapse = "collapse";
      }
    },
  },
};
</script>

<style scoped></style>
