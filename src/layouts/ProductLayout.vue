<template>
    <div>
        <menu-nav-layout :prod="this.prod" :menu-slug="this.menuSlug"/>
        <highlights v-if="this.menuSlug == 'noi-bat'"/>
        <exterior v-if="this.menuSlug == 'ngoai-that'"/>
        <furniture v-if="this.menuSlug == 'noi-that'"/>
        <operate v-if="this.menuSlug == 'van-hanh'"/>
        <utilities v-if="this.menuSlug == 'tien-nghi'"/>
        <specifications v-if="this.menuSlug == 'thong-so'"/>
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
    export default {
        name: "ProductLayout",
        components: {Specifications, Utilities, Operate, Furniture, Exterior, Highlights, MenuNavLayout},
        data() {
            return {
                prod: {},
                menuSlug: 'noi-bat'
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
        }
    }
</script>

<style scoped>

</style>