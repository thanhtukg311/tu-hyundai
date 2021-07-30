<template>
  <div>
    <section class="box01">
      <div class="container">
        <title-component
          :desc="prod.exterior.desc"
          :title="prod.exterior.title"
        />
        <div>
          <div class="img_carcl" @click="play">
<!--            <div v-for="(item, index) in prod.exterior.prod_360" :key="index" v-bind:class="[activeCar == index ? 'show' : 'hide']">-->
            <div  v-bind:class="[activeCar == listImg.id ? 'show' : 'hide']">
              <tree-sixty-component
                :amount="listImg.total_img"
                :imagePath="listImg.file_url"
                :fileName="listImg.file_name"
                :disableZoom="true"
              />
            </div>

<!--            <span-->
<!--              class="scroll360"-->
<!--              v-bind:class="{ hide: isOpen }"-->
<!--              style="width: 100%;"-->
<!--            >-->
<!--              <img-->
<!--                src="./../../assets/images/scroll360.png"-->
<!--                style="opacity: 0.5;"-->
<!--              />-->
<!--            </span>-->
          </div>
          <div class="car_color">
            <div class="tlt_choose_cl">
              <p>
                Chọn màu sắc
                <span>{{ textColor[activeCar] }}</span>
              </p>
            </div>
            <div class="sl_color">
              <ul class="list_color">
                <li class="cl_1">
                  <p v-bind:class="[activeCar == 0 ? 'ac_cl' : '']" class="" v-on:click="onChangeColor(0)">
                    <img src="./../../assets/images/cl_1.png" width="70" />
                  </p>
                </li>
                <li class="cl_2">
                  <p v-bind:class="[activeCar == 1 ? 'ac_cl' : '']" class="" v-on:click="onChangeColor(1)">
                    <img src="./../../assets/images/cl_2.png" width="70" />
                  </p>
                </li>
                <li class="cl_3">
                  <p v-bind:class="[activeCar == 2 ? 'ac_cl' : '']" class="" v-on:click="onChangeColor(2)">
                    <img src="./../../assets/images/cl_3.png" width="70" />
                  </p>
                </li>
                <li class="cl_4">
                  <p v-bind:class="[activeCar == 3 ? 'ac_cl' : '']" class="" v-on:click="onChangeColor(3)">
                    <img src="./../../assets/images/cl_4.png" width="70" />
                  </p>
                </li>
                <li class="cl_5">
                  <p v-bind:class="[activeCar == 4 ? 'ac_cl' : '']" class="" v-on:click="onChangeColor(4)">
                    <img src="./../../assets/images/cl_5.png" width="70" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="item_box_tgle">
      <div class="item_toggle">
        <img :src="prod.exterior.img_toggle1" />
        <p class="tlt_item">Mặt trước</p>
        <a class="btnShow" v-on:click="myFilter('item_anchor')"></a>
      </div>
      <div ref="item_anchor" class="item_content container">
          <title-component
            :desc="prod.exterior.main_desc"
            :title="prod.exterior.main_title"
          />
          <image-center-component :img-url="prod.exterior.main_img" />
          <double-component
            :list-desc="prod.exterior.list_desc"
            v-if="!isMobile()"
          />
          <slide-image-mobile-component
            :items="prod.exterior.list_desc"
            v-else
          />
      </div>
    </div>
    <div class="item_box_tgle">
      <div class="item_toggle">
        <img :src="prod.exterior.img_toggle2" />
        <p class="tlt_item">Cạnh bên</p>
        <a class="btnShow" v-on:click="myFilter('item_anchor_second')"></a>
      </div>
      <div class="item_content container" ref="item_anchor_second">
        <triple-component
          :list-desc="prod.exterior.list_desc2"
          v-if="!isMobile()"
        />
        <slide-image-mobile-component
          :items="prod.exterior.list_desc2"
          v-else
        />
      </div>
    </div>
    <div class="item_box_tgle">
      <div class="item_toggle">
        <img :src="prod.exterior.img_toggle3" />
        <p class="tlt_item">Mặt sau</p>
        <a class="btnShow" v-on:click="myFilter('item_anchor_third')"></a>
      </div>
      <div class="item_content container" ref="item_anchor_third">
        <triple-component
          :list-desc="prod.exterior.list_desc3"
          v-if="!isMobile() && prod.exterior.list_desc3.length == 3"
        />
        <double-component
          :list-desc="prod.exterior.list_desc3"
          v-else-if="!isMobile() && prod.exterior.list_desc3.length == 2"
        />
        <slide-image-mobile-component
          :items="prod.exterior.list_desc3"
          v-else
        />
      </div>
    </div>
    <prev-next-component
      :prev="{ slug: prod.slug, menu: 'noi-bat', name: 'Nổi bật' }"
      :next="{ slug: prod.slug, menu: 'noi-that', name: 'Nội thất' }"
    />
  </div>
</template>
<script>
import TitleComponent from "@/components/TitleComponent";
import DoubleComponent from "@/components/DoubleComponent";
import ImageCenterComponent from "@/components/ImageCenterComponent";
import TripleComponent from "@/components/TripleComponent";
import PrevNextComponent from "@/components/PrevNextComponent";
import TreeSixtyComponent from "@/components/TreeSixtyComponent";
import SlideImageMobileComponent from "@/components/SlideImageMobileComponent";

export default {
  name: "Exterior",
  components: {
    SlideImageMobileComponent,
    TreeSixtyComponent,
    PrevNextComponent,
    TripleComponent,
    ImageCenterComponent,
    DoubleComponent,
    TitleComponent,
  },
  props: ["prod"],
  data() {
    return {
      isOpen: false,
      activeCar: 0,
      textColor: ["Màu đỏ", "Màu xanh", "Màu trắng", "Màu bạc", "Màu vàng cát"],
      listImg: this.prod.exterior.prod_360[0]
    };
  },
  methods: {
    onChangeColor: function(index) {
      this.activeCar = index;
      this.loadedCarImg(index)
    },
    myFilter: function(refName) {
      window.dispatchEvent(new Event("resize"));

        if (
                event.target.parentElement.parentElement.className === "item_box_tgle"
        ) {
          event.target.parentElement.parentElement.className += " on";
          let element = this.$refs[refName];
          let top = element.offsetTop;
          top = top - 100;
          if(this.isMobile()) {
            element.getElementsByClassName("VueCarousel-dot")[0].click()
          }
          window.scrollTo({ top: top, behavior: "smooth" });
        } else {
          event.target.parentElement.parentElement.className = "item_box_tgle";
        }

    },
    play() {
      //document.getElementsByClassName('fa-sync').add;
      this.isOpen = true;
    },
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    loadedCarImg(index){
      this.listImg = this.prod.exterior.prod_360[index]
    }
  },
  mounted: function() {
    this.onChangeColor(0);
  },
};
</script>

<style scoped></style>
