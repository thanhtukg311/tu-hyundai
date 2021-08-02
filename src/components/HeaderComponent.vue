<template>
  <div>
    <header id="header">
      <div class="overlay" v-if="this.isOpen"></div>
      <div class="inner header_main">
        <div class="h_box">
          <h1>
            <a href="https://www.hyundai.tcmotor.vn/">
              <img src="./../assets/images/HTV_Logo_Horizontal_Blue_Pantone.png" width="250px" alt="logo" />
            </a>
          </h1>
        </div>
        <!-- <div class="tlt_page_top">
          <span>Nổi bật</span>
        </div> -->
        <nav id="gnavi" v-bind:class="{ open: this.isOpen }" ref="mobileMenu">
          <ul class="gnavi_pc">
            <li>
              <a
                target="_blank"
                href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
                >Trang chủ</a
              >
            </li>
            <li>
              <a
                href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong-thuong-mai/tin-tuc/tin-cong-ty-thuong-mai"
                >Giới thiệu</a
              >
            </li>
            <li>
              <router-link
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".dropdown-menu--product"
                :to="{
                  name: 'san-pham',
                  params: { slug: 'i10-2020', menu: 'noi-bat' },
                }"
                >Sản phẩm <span class="ic"></span
              ></router-link>
              <div class="dropdown-menu dropdown-menu--product">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-o"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Tất cả
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-0"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Xe du lịch
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-1"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Xe SUV
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-2"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Xe chuy&#234;n dụng, tải nhẹ
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-3"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Xe thương mại
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-o"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <a
                      href="#"
                      class="tt-mb"
                      :data-bs-toggle="this.isCollapse"
                      data-bs-target=".content-mb--all"
                      >Tất cả</a
                    >
                    <div class="content-mb content-mb--all">
                      <div class="content-mb__wrap">
                        <div class="sb-title">Xe du lịch</div>
                        <div class="row">
                          <div class="col-sm-2 itemmenu">
                            <a href="/san-pham/i10-2020/noi-bat">
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/i102017/i10-menu.png"
                                class="img-responsive"
                              />
                              Grand i10 Hatchback
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a href="/san-pham/i10-2020-sedan/noi-bat">
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/sedan.png"
                                class="img-responsive"
                              />
                              Grand i10 Sedan
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/accent-2021"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/Accent2021/accent-2021-menu.png"
                                class="img-responsive"
                              />
                              Accent
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/elantra-2019"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/elantra-2019.png"
                                class="img-responsive"
                              />
                              Elantra
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/kona"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/hyundai-kona-side-view.png"
                                class="img-responsive"
                              />
                              Kona
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/tucson-2019"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/tucson-2019.png"
                                class="img-responsive"
                              />
                              Tucson
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/santafe-2021"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Products/MapProduct/newsantafe-2021.png"
                                class="img-responsive"
                              />
                              Santafe
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/starex-h1"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/h-1.png"
                                class="img-responsive"
                              />
                              Starex (H1)
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/santafe-cho-tien"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/santafe.png"
                                class="img-responsive"
                              />
                              Santa Fe chở tiền
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/starex-cho-tien"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anh-menu/Starex_Ambu.png"
                                class="img-responsive"
                              />
                              Starex chở tiền
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/starex-cuu-thuong"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anh-menu/Starex_Ambu.png"
                                class="img-responsive"
                              />
                              Starex cứu thương
                            </a>
                          </div>
                        </div>
                        <div class="sb-title">Xe thương mại</div>
                        <div class="row" style="">
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/new-mighty-75s-110s"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/mighty-menu.png"
                                class="img-responsive"
                              />
                              NEW MIGHTY 75S &amp; 110S/110SP
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/ex-series-gt"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhdaidien/ex-series-gt.png"
                                class="img-responsive"
                              />
                              Mighty EX8 GT
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/new-universe"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/New-Universe.png"
                                class="img-responsive"
                              />
                              New Universe
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/HD1000"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/tractor/truck_tractor-truck-quarter-view-thumb.png"
                                class="img-responsive"
                              />
                              HD1000 Đầu k&#233;o
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/hd270-Dump"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/HD270 dump/avt(1).png"
                                class="img-responsive"
                              />
                              HD270 Tự đổ
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/new-county"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/new-county.png"
                                class="img-responsive"
                              />
                              New County
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/xcient-gt"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/Xcient GT/134.png"
                                class="img-responsive"
                              />
                              Đầu K&#233;o Xcient GT
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/hd270-mixer"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/HD270 Mixer/avt.png"
                                class="img-responsive"
                              />
                              HD270 Trộn b&#234; t&#244;ng
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/HD260-320"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/ERcargo/hd260-320.png"
                                class="img-responsive"
                              />
                              HD260-320
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/hd240"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/HD210/hd210.png"
                                class="img-responsive"
                              />
                              HD240
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/mighty-n250"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/MightyN250/mighty-n250-menu.png"
                                class="img-responsive"
                              />
                              New Mighty N250 - N250SL
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/new-porter-150"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/h100.png"
                                class="img-responsive"
                              />
                              NEW PORTER 150
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/solati"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/solati.png"
                                class="img-responsive"
                              />
                              Solati
                            </a>
                          </div>
                          <div class="col-sm-2 itemmenu">
                            <a
                              href="https://www.hyundai.tcmotor.vn/san-pham/ex-series"
                            >
                              <img
                                src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/ex-series-1.png"
                                class="img-responsive"
                              />
                              Mighty Ex Series
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="nav-0" role="tabpanel">
                    <a
                      href="#"
                      class="tt-mb"
                      :data-bs-toggle="this.isCollapse"
                      data-bs-target=".content-mb--touring"
                      >Xe du lịch</a
                    >
                    <div class="row content-mb content-mb--touring">
                      <div class="col-sm-2 itemmenu">
                        <a href="/san-pham/i10-2020/noi-bat">
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/i102017/i10-menu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Grand i10 Hatchback
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a href="/san-pham/i10-2020-sedan/noi-bat">
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/sedan.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Grand i10 Sedan
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/accent-2021"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/Accent2021/accent-2021-menu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Accent
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/elantra-2019"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/elantra-2019.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Elantra
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-1"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <a
                      href="#"
                      class="tt-mb"
                      :data-bs-toggle="this.isCollapse"
                      data-bs-target=".content-mb--suv"
                      >Xe SUV</a
                    >
                    <div class="row content-mb content-mb--suv">
                      <div class="col-sm-2 itemmenu">
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/kona">
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/hyundai-kona-side-view.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Kona
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/tucson-2019"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/tucson-2019.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Tucson
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/santafe-2021"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Products/MapProduct/newsantafe-2021.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Santafe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-2"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <a
                      href="#"
                      class="tt-mb"
                      :data-bs-toggle="this.isCollapse"
                      data-bs-target=".content-mb--dedicated"
                      >Xe chuyên dụng, tải nhẹ</a
                    >
                    <div class="row content-mb content-mb--dedicated">
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/starex-h1"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/h-1.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Starex (H1)
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/santafe-cho-tien"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/santafe.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Santa Fe chở tiền
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/starex-cho-tien"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anh-menu/Starex_Ambu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Starex chở tiền
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/starex-cuu-thuong"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anh-menu/Starex_Ambu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Starex cứu thương
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-3"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <a
                      href="#"
                      class="tt-mb"
                      :data-bs-toggle="this.isCollapse"
                      data-bs-target=".content-mb--commerce"
                      >Xe thương mại</a
                    >
                    <div class="row content-mb content-mb--commerce">
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/new-mighty-75s-110s"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/mighty-menu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          NEW MIGHTY 75S &amp; 110S/110SP
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/ex-series-gt"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhdaidien/ex-series-gt.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Mighty EX8 GT
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/new-universe"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/New-Universe.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          New Universe
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/HD1000"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/tractor/truck_tractor-truck-quarter-view-thumb.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          HD1000 Đầu kéo
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/hd270-Dump"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/HD270 dump/avt(1).png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          HD270 Tự đổ
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/new-county"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/new-county.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          New County
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/xcient-gt"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/Xcient GT/134.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Đầu Kéo Xcient GT
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/hd270-mixer"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/HD270 Mixer/avt.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          HD270 Trộn bê tông
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/HD260-320"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/ERcargo/hd260-320.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          HD260-320
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a href="https://www.hyundai.tcmotor.vn/san-pham/hd240">
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/HTCV/XE/HD210/hd210.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          HD240
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/mighty-n250"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/SanPham/MightyN250/mighty-n250-menu.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          New Mighty N250 - N250SL
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/new-porter-150"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/h100.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          NEW PORTER 150
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/solati"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/solati.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Solati
                        </a>
                      </div>
                      <div class="col-sm-2 itemmenu">
                        <a
                          href="https://www.hyundai.tcmotor.vn/san-pham/ex-series"
                        >
                          <img
                            src="https://www.hyundai.tcmotor.vn/Uploads/Anhmenu/ex-series-1.png"
                            class="img-responsive"
                            alt="Hyundai Thành Công Việt Nam"
                            title="Hyundai Thành Công Việt Nam"
                          />
                          Mighty Ex Series
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <router-link
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".dropdown-menu--buying"
                to="/"
                >Mua xe <span class="ic"></span
              ></router-link>
              <div class="dropdown-menu dropdown-menu--buying">
                <div class="row equal-height">
                  <div class="col-sm-2">
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe">
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/chonxe.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>Chọn xe</div>
                    </a>
                  </div>
                  <div class="col-sm-2">
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh">
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/sosanh.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>So sánh</div>
                    </a>
                  </div>
                  <div class="col-sm-2">
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/khuyen-mai">
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/khuyenmai.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>Khuyến mại</div>
                    </a>
                  </div>
                  <div class="col-sm-2">
                    <a
                      href="https://www.hyundai.tcmotor.vn/mua-xe/dang-ky-lai-thu"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/laithu.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>Đăng ký lái thử</div>
                    </a>
                  </div>
                  <div class="col-sm-2">
                    <a href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly">
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/timdaily.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>Tìm đại lý</div>
                    </a>
                  </div>
                  <div class="col-sm-2 last-item">
                    <a
                      href="https://www.hyundai.tcmotor.vn/mua-xe/tai-catalogue"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn/images/catalog.jpg"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      <div>Tải catalog</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <router-link
                :data-bs-toggle="this.isCollapse"
                data-bs-target=".dropdown-menu--service"
                to="/"
                >Dịch vụ <span class="ic"></span
              ></router-link>
              <div class="dropdown-menu dropdown-menu--service">
                <div class="row equal-height">
                  <div class="col-sm-2" style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/ung-dung-hyundai-me"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn/Uploads/dichvu/Homepage.SoDo3.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Ứng dụng hyundai me!
                    </a>
                  </div>
                  <div class="col-sm-2" style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/chuong-trinh-dich-vu"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/ct-dv.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Chương trình dịch vụ
                    </a>
                  </div>
                  <div class="col-sm-2" style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/chinh-sach-bao-hanh"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/baohanh.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Chính sách bảo hành
                    </a>
                  </div>
                  <div class="col-sm-2" style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/phu-tung-phu-kien-chinh-hang"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/phukien.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Phụ tùng &amp; phụ kiện chính hãng
                    </a>
                  </div>
                  <div class="col-sm-2 " style="">
                    <a href="https://baohanhdientu.hyundai.tcmotor.vn/">
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/baohanh.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Bảo hành điện tử
                    </a>
                  </div>
                  <div class="col-sm-2 " style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/dich-vu/gioi-thieu-chung"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/cskh.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Chăm sóc khách hàng
                    </a>
                  </div>
                  <div class="col-sm-2 last-item" style="">
                    <a
                      href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/cap-nhat-avn/cap-nhat-avn"
                    >
                      <img
                        src="https://www.hyundai.tcmotor.vn//Uploads/dichvu/icon%20avn2.png"
                        class="img-responsive"
                        alt="Hyundai Thành Công Việt Nam"
                        title="Hyundai Thành Công Việt Nam"
                      />
                      Cập nhật avn
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://www.hyundai.tcmotor.vn/hyundai-thanh-cong/tin-tuc/tin-cong-ty"
                >Tin tức</a
              >
            </li>
            <li>
              <a
                href="https://www.hyundai.tcmotor.vn/vi/d/dang-ky-lam-dai-ly-xe-thuong-mai"
                >Liên hệ</a
              >
            </li>
          </ul>
        </nav>
        <div class="btn_share">
          <a href="https://www.facebook.com/hyundaibytcmotor/" target="_blank">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.63312 7.65469L9.8201 4.34263M4.66176 9.2491L9.08644 11.8919M3.02161 6.44415C3.40588 6.45663 3.77792 6.58131 4.09137 6.80263C4.40483 7.02395 4.64582 7.33213 4.78422 7.68871C4.92262 8.04528 4.95234 8.43446 4.86966 8.80771C4.78698 9.18096 4.59556 9.52176 4.3193 9.78757C4.04304 10.0534 3.69409 10.2325 3.31612 10.3024C2.93814 10.3724 2.54786 10.3302 2.19385 10.1811C1.83985 10.0319 1.5379 9.7825 1.32559 9.46386C1.11328 9.14523 1.00002 8.77148 1 8.38929C1.00903 7.865 1.22698 7.36571 1.60601 7.00102C1.98504 6.63633 2.49417 6.43604 3.02161 6.44415ZM11.108 1.00025C11.4921 1.01291 11.8639 1.13771 12.1771 1.35908C12.4903 1.58045 12.731 1.88857 12.8691 2.24504C13.0073 2.6015 13.0368 2.9905 12.954 3.36352C12.8712 3.73655 12.6797 4.07708 12.4034 4.34263C12.1272 4.60817 11.7784 4.78698 11.4006 4.85674C11.0228 4.9265 10.6327 4.88417 10.2789 4.73495C9.92514 4.58574 9.62338 4.33628 9.41133 4.01771C9.19927 3.69913 9.08628 3.32548 9.08644 2.94348C9.09572 2.41944 9.31388 1.92048 9.69291 1.55614C10.0719 1.1918 10.5809 0.991884 11.108 1.00025ZM11.108 11.1108C11.4921 11.1235 11.8638 11.2483 12.177 11.4696C12.4902 11.6909 12.7308 11.999 12.869 12.3554C13.0072 12.7118 13.0369 13.1007 12.9541 13.4737C12.8714 13.8467 12.6799 14.1873 12.4038 14.4528C12.1276 14.7184 11.7789 14.8973 11.4012 14.9672C11.0234 15.037 10.6333 14.9948 10.2795 14.8457C9.9257 14.6967 9.62396 14.4473 9.41179 14.1289C9.19962 13.8104 9.08646 13.4369 9.08644 13.055C9.09547 12.5308 9.3135 12.0316 9.69256 11.667C10.0716 11.3025 10.5807 11.1024 11.108 11.1108Z"
                stroke="black"
              />
            </svg>
          </a>
        </div>
        <a
          href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
          class="btn_search"
        >
          <img src="./../assets/images/search.png" alt="search" width="15px" />
        </a>
        <div class="header_sp">
          <p class="logo">
            <a href=""><img src="" alt=""/></a>
          </p>
          <div class="ico_menu_click">
            <label
              class="icon_menu closes"
              v-bind:class="{ active: this.isOpen }"
              @click="openMenuMobile()"
              ><span></span
            ></label>
            <label
              class="icon_menu open"
              v-bind:class="{ active: this.isOpen }"
              @click="openMenuMobile()"
              ><span></span
            ></label>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
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
    openMenuMobile() {
      this.isOpen = !this.isOpen;
    },
    myEventHandler() {
      var width = window.innerWidth;
      if (width > 640) {
        this.isCollapse = "";
      } else {
        this.isCollapse = "collapse";
      }
    },
  },
  mounted() {
    // $('body').addClass('abc');
  },
};
</script>

<style scoped></style>
