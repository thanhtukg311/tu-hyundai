<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.utilities.desc" :title="prod.utilities.title"/>
                <img :src="prod.utilities.main_img" style="margin-bottom: 20px">
            </div>
        </section>
        <section>
            <div class="container">
                <sub-title-component :desc="prod.utilities.main_desc" :title="prod.utilities.main_title"/>
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <triple-component :list-desc="prod.utilities.list_desc"/>
            </div>
        </section>
        <prev-next-component/>
    </div>
</template>
<script>
    import TitleComponent from "@/components/TitleComponent";
    import TripleComponent from "@/components/TripleComponent";
    import PrevNextComponent from "@/components/PrevNextComponent";
    import SubTitleComponent from "@/components/SubTitleComponent";
    export default {
        name: "Utilities",
        components: {SubTitleComponent, PrevNextComponent, TripleComponent, TitleComponent},
        props:['prod'],
    }
</script>

<style scoped>

</style>