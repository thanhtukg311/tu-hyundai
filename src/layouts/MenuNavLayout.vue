<template>
  <div class="top_bar">
    <div class="inner">
      <ul class="topic_path">
        <li><router-link to="./">Trang chủ</router-link></li>
        <li>Sản phẩm</li>
        <li>{{ prod.title }}</li>
        <li>{{ this.menu }}</li>
      </ul>
    </div>
    <div id="mainvisual">
      <div class="img_main">
        <img v-if="isTablet" :src="prod.img_url" />
        <img v-else-if="isMobile" :src="prod.img_url_mobile" />
        <img v-else :src="prod.img_url" />

      </div>
      <h2 class="tlt_slider_main">
        {{ prod.description }}<br />
        <span> {{ prod.name }}</span>
      </h2>
    </div>
    <div id="content">
      <div ref="menu_fix" class="menu_fix">
        <div class="menu_content">
          <ul class="inner menu_cnt_top">
            <li>
              <a
                target="_blank"
                href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe"
                ><p><i class="fal fa-sliders-h"></i><span>Chọn xe</span></p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.hyundai.tcmotor.vn/mua-xe/tim-dai-ly"
                ><p>
                  <i class="fal fa-map-marker-alt"></i><span>Tìm đại lý</span>
                </p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.hyundai.tcmotor.vn/mua-xe/dang-ky-lai-thu"
                ><p>
                  <i class="far fa-steering-wheel"></i
                  ><span>Đăng ký lái thử</span>
                </p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.hyundai.tcmotor.vn/mua-xe/so-sanh"
                ><p><i class="fal fa-repeat"></i><span>So sánh</span></p></a
              >
            </li>
            <li>
              <a target="_blank" :href="prod.catalog" download
                ><p>
                  <i class="fal fa-arrow-to-bottom"></i><span>Tải catalog</span>
                </p></a
              >
            </li>
          </ul>
        </div>
        <div class="sub_menu_content" ref="sub_menu_content">
          <ul class="inner sub_menu_cnt_top" ref="sub_menu_content_ul">
            <li ref="sub_0" class="tlt_type_car" style="width: 15% !important;" v-if="!isMobile || isTablet">
              <p>
                {{ prod.code }}
              </p>
            </li>
            <li ref="sub_1">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'noi-bat' },
                }"
                v-bind:class="{ active: menuSlug == 'noi-bat' }"
                >Nổi bật</router-link
              >
            </li>
            <li ref="sub_2">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'ngoai-that' },
                }"
                v-bind:class="{ active: menuSlug == 'ngoai-that' }"
                >Ngoại thất</router-link
              >
            </li>
            <li ref="sub_3">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'noi-that' },
                }"
                v-bind:class="{ active: menuSlug == 'noi-that' }"
                >Nội thất</router-link
              >
            </li>
            <li ref="sub_4">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'van-hanh' },
                }"
                v-bind:class="{ active: menuSlug == 'van-hanh' }"
                >Vận hành</router-link
              >
            </li>
            <li ref="sub_5">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'an-toan' },
                }"
                v-bind:class="{ active: menuSlug == 'an-toan' }"
                >An toàn</router-link
              >
            </li>
            <li ref="sub_6">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'tien-nghi' },
                }"
                v-bind:class="{ active: menuSlug == 'tien-nghi' }"
                >Tiện nghi</router-link
              >
            </li>
            <li ref="sub_7">
              <router-link
                :to="{
                  name: 'san-pham',
                  params: { slug: prod.slug, menu: 'thong-so' },
                }"
                v-bind:class="{ active: menuSlug == 'thong-so' }"
                >Thông số xe</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as mobileDetect from 'mobile-device-detect';
export default {
  name: "MenuNavLayout",
  computed: {},
  components: {},
  props: ["prod", "menuSlug"],
  data() {
    return {
      slug: "",
      menu: "Nổi bật",
      top: 750,
      isMobile: false,
      isTablet: false
    };
  },
  watch: {
    $route() {
      this.slug = this.$route.params.slug;
      switch (this.$route.params.menu) {
        case "noi-bat":
          this.scrollSub(1);
          this.menu = "Nổi bật";
          break;
        case "ngoai-that":
          this.scrollSub(2);
          this.menu = "Ngoại thất";
          break;
        case "noi-that":
          this.scrollSub(3);
          this.menu = "Nội thất";
          break;
        case "van-hanh":
          this.scrollSub(4);
          this.menu = "Vận hành";
          break;
        case "an-toan":
          this.scrollSub(5);
          this.menu = "An toàn";
          break;
        case "tien-nghi":
          this.scrollSub(6);
          this.menu = "Tiện nghi";
          break;
        case "thong-so":
          this.scrollSub(7);
          this.menu = "Thông số xe";
          break;
      }
    },
  },
  mounted() {
    if (mobileDetect.isTablet){
      this.isTablet = true;
    }
    if(mobileDetect.isAndroid || mobileDetect.isIOS){
      this.isMobile = true;
    }
    this.top = this.$refs.menu_fix.offsetTop;
    document.addEventListener("scroll", this.scrollMenu);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollMenu);
  },
  methods: {
    scrollSub(index) {
      var w0 = this.$refs.sub_0.clientWidth;
      var w1 = this.$refs.sub_1.clientWidth;
      var w2 = this.$refs.sub_2.clientWidth;
      var w3 = this.$refs.sub_3.clientWidth;
      var w4 = this.$refs.sub_4.clientWidth;
      var w5 = this.$refs.sub_5.clientWidth;
      var w6 = this.$refs.sub_6.clientWidth;
      var w7 = this.$refs.sub_7.clientWidth;
      var array = [w0, w1, w2, w3, w4, w5, w6, w7];
      var width = 0;
      for(var i = 0; i < index; i++){
          width = width + array[i];
      }
      var y = width - (window.innerWidth / 2);
      this.$refs.sub_menu_content.scrollLeft = y + (array[index] / 2) + 15;
    },
    scrollMenu() {
      if (window.scrollY > this.top) {
        if (this.$refs.menu_fix.classList) {
          this.$refs.menu_fix.classList.add("fixed");
          this.$emit("fixed", true);
        }
      } else {
        if (this.$refs.menu_fix.classList) {
          this.$refs.menu_fix.classList.remove("fixed");
          this.$emit("fixed", false);
        }
      }
    },
  },
};
</script>

<style scoped></style>
