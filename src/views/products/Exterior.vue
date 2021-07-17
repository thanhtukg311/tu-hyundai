
<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.exterior.desc" :title="prod.exterior.title"/>
                <div>  
                            <div class="img_carcl">
                                <img src="./../../assets/images/car_cl.jpg">
                          </div>
                          <div class="car_color">
                              <div class="tlt_choose_cl">
                                  <p>Chọn màu sắc
                                    <span>Fiery Red R4R</span>
                                  </p>
                              </div>
                              <div class="sl_color">
                                  <ul class="list_color">
                                  <li class="cl_1">
                                      <p class="ac_cl">
                                          <img src="./../../assets/images/cl_1.jpg" width="70">
                                      </p>
                                  </li>
                                  <li class="cl_2">
                                      <p>
                                          <img src="./../../assets/images/cl_2.jpg" width="70">
                                      </p>
                                  </li>
                                  <li class="cl_3">
                                      <p>
                                          <img src="./../../assets/images/cl_3.jpg" width="70">
                                      </p>
                                  </li>
                                  <li class="cl_4">
                                      <p>
                                          <img src="./../../assets/images/cl_4.jpg" width="70">
                                      </p>
                                  </li>
                                  <li class="cl_5">
                                      <p>
                                          <img src="./../../assets/images/cl_2.jpg" width="70">
                                      </p>
                                  </li>
                                  <li class="cl_6">
                                      <p>
                                          <img src="./../../assets/images/cl_1.jpg" width="70">
                                      </p>
                                  </li>
                              </ul>
                              </div>
                          </div>
                      </div>
                      
            </div>
        </section>
        <div class="item_box_tgle on">
            <div class="item_toggle">
                <img src="./../../assets/images/item_img01.png">
                <p class="tlt_item">Mặt trước</p>
                <button class="btnShow" v-on:click="myFilter"></button>
            </div>
            <div id="item_anchor" class="item_content container">
                <div class="transition">
                    <title-component :desc="prod.exterior.main_desc" :title="prod.exterior.main_title"/>
                    <image-center-component :img-url="prod.exterior.main_img"/>
                    <double-component :list-desc="prod.exterior.list_desc"/>
                </div>
            </div>
        </div>
        <div class="item_box_tgle">
            <div class="item_toggle">
                <img src="./../../assets/images/item_img02.png">
                <p class="tlt_item">Cạnh bên</p>
                <button class="btnShow" v-on:click="myFilter"></button>
            </div>
            <div class="item_content container">
                <triple-component :list-desc="prod.exterior.list_desc2"/>
            </div>
        </div>
        <div class="item_box_tgle">
            <div class="item_toggle">
                <img src="./../../assets/images/item_img03.png">
                <p class="tlt_item">Mặt sau</p>
                <button class="btnShow" v-on:click="myFilter"></button>
            </div>
            <div class="item_content container">
            <double-component :list-desc="prod.exterior.list_desc3"/>
            </div>
        </div>
        <prev-next-component :prev="{slug:prod.slug, menu:'noi-bat', name:'Nổi bật'}" :next="{slug:prod.slug, menu:'noi-that', name:'Nội thất'}"/>
    </div>
</template>
<script>
    import TitleComponent from "@/components/TitleComponent";
    import DoubleComponent from "@/components/DoubleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import TripleComponent from "@/components/TripleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";

    export default {
        name: "Exterior",
        components: {PrevNextComponent, TripleComponent, ImageCenterComponent, DoubleComponent, TitleComponent},
        props: ['prod'],
        data() {
            return{
                isOpen: false
            }
        },
        methods: {
            myFilter: function(event) {
                if(event.target.parentElement.parentElement.className === 'item_box_tgle'){
                    event.target.parentElement.parentElement.className += ' on';
                }else {
                    event.target.parentElement.parentElement.className = 'item_box_tgle';
                }
            }
        }
    }
</script>

<style scoped>

</style>