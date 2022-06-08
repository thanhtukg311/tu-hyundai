<template>
    <div>
        <menu-nav-layout :prod="this.prod" :menu-slug="this.menuSlug" v-on:fixed="fixed"/>
        <highlights class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'noi-bat'" :prod="this.prod"/>
        <exterior class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'ngoai-that'" :prod="this.prod"/>
        <furniture class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'noi-that'" :prod="this.prod"/>
        <operate class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'van-hanh'" :prod="this.prod"/>
        <safe class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'an-toan'" :prod="this.prod"/>
        <utilities class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'tien-nghi'" :prod="this.prod"/>
        <specifications class="cnt" v-bind:class="{'pd_t': this.isFixed}" v-if="this.menuSlug == 'thong-so'" :prod="this.prod"/>
    </div>
</template>

<script>
    import MenuNavLayout from "@/layouts/MenuNavLayout";
    import Highlights from "@/views/products/Highlights";
    import Exterior from "@/views/products/Exterior";
    import Furniture from "@/views/products/Furniture";
    import Operate from "@/views/products/Operate";
    import Utilities from "@/views/products/Utilities";
    import Specifications from "@/views/products/Specifications";
    import jsonData from "@/services/jsonData";
    import Safe from "@/views/products/Safe";
    export default {
        name: "ProductLayout",
        components: {Safe, Specifications, Utilities, Operate, Furniture, Exterior, Highlights, MenuNavLayout},
        data() {
            return {
                prod: {},
                menuSlug: 'noi-bat',
                isFixed: false
            }
        },
        created: function () {
            let vm = this;
            jsonData.getProduct(this.$route.params.slug, (response) => {
                vm.prod = response.data;
            });
            this.menuSlug = this.$route.params.menu
        },
        metaInfo(){
            return {
                title: this.prod.title,
                meta: [
                    { name: 'description', content: this.prod.description},
                    { property: 'og:title', content: this.prod.title},
                    { property: 'og:site_name', content: 'Hyundai TC'},
                    { property: 'og:type', content: 'website'},
                    { property: 'og:image', content: this.prod.img_url},
                ]
            }
        },
        watch: {
            $route (){
                if(this.$route.params.menu){
                    this.menuSlug = this.$route.params.menu
                }
            }
        },
        mounted() {
            let vm = this;
            jsonData.getProduct(this.$route.params.slug, (response) => {
                vm.prod = response.data;
            });
        },
        methods:{
            fixed(fix){
                this.isFixed = fix;
            }
        }
    }
</script>

<style scoped>

</style>