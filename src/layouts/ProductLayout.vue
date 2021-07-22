<template>
    <div>
        <menu-nav-layout :prod="this.prod" :menu-slug="this.menuSlug"/>
        <highlights class="cntttt" v-if="this.menuSlug == 'noi-bat'" :prod="this.prod"/>
        <exterior class="cntttt" v-if="this.menuSlug == 'ngoai-that'" :prod="this.prod"/>
        <furniture v-if="this.menuSlug == 'noi-that'" :prod="this.prod"/>
        <operate v-if="this.menuSlug == 'van-hanh'" :prod="this.prod"/>
        <safe v-if="this.menuSlug == 'an-toan'" :prod="this.prod"/>
        <utilities v-if="this.menuSlug == 'tien-nghi'" :prod="this.prod"/>
        <specifications v-if="this.menuSlug == 'thong-so'" :prod="this.prod"/>
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
                menuSlug: 'noi-bat'
            }
        },
        created: function () {
            let vm = this;
            jsonData.getProduct(this.$route.params.slug, (response) => {
                vm.prod = response.data;
            });
            this.menuSlug = this.$route.params.menu
            document.title = vm.prod.title
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
        }
    }
</script>

<style scoped>

</style>