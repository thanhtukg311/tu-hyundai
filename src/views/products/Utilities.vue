<template>
    <div>
        <title-component :desc="prod.utilities.desc" :title="prod.utilities.title"/>
        <section>
            <div class="container">
                <img :src="prod.utilities.main_img" style="margin-bottom: 20px">
                <div class="tlt_center">
                    <h4 class="tlt_h4">{{prod.utilities.main_title}}</h4>
                    <span>{{prod.utilities.main_desc}}</span>
                </div>
            </div>
        </section>
        <triple-component :list-desc="prod.utilities.list_desc"/>
        <prev-next-component/>
    </div>
</template>
<script>
    import TitleComponent from "@/components/TitleComponent";
    import TripleComponent from "@/components/TripleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    export default {
        name: "Utilities",
        components: {PrevNextComponent, TripleComponent, TitleComponent},
        props:['prod'],
    }
</script>

<style scoped>

</style>