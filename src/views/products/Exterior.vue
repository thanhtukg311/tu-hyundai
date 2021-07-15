<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.exterior.desc" :title="prod.exterior.title"/>
            </div>
        </section>
        <div class="item_box_tgle" v-bind:class="{'on': isOpen}">
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
        <div class="item_box_tgle" v-bind:class="{'on': isOpen}">
            <div class="item_toggle">
                <img src="./../../assets/images/item_img02.png">
                <p class="tlt_item">Cạnh bên</p>
                <button class="btnShow" v-on:click="myFilter"></button>
            </div>
            <div class="item_content container">
                <triple-component :list-desc="prod.exterior.list_desc2"/>
            </div>
        </div>
        <div class="item_box_tgle" v-bind:class="{'on': isOpen}">
            <div class="item_toggle">
                <img src="./../../assets/images/item_img03.png">
                <p class="tlt_item">Mặt sau</p>
                <button class="btnShow" v-on:click="myFilter"></button>
            </div>
            <div class="item_content container">
            <double-component :list-desc="prod.exterior.list_desc3"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    import DoubleComponent from "@/components/DoubleComponent";
    import ImageCenterComponent from "@/components/ImageCenterComponent";
    import TripleComponent from "@/components/TripleComponent";

    export default {
        name: "Exterior",
        components: {TripleComponent, ImageCenterComponent, DoubleComponent, TitleComponent},
        props: ['prod'],
        data() {
            return{
                isOpen: {}
            }
        },
        methods: {
            myFilter: function() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style scoped>

</style>