<template>
    <div>
        <section class="box01">
            <div class="container">
                <title-component :desc="prod.exterior.desc" :title="prod.exterior.title"/>
            </div>
        </section>
    </div>
</template>

<script>
    import TitleComponent from "@/components/TitleComponent";
    export default {
        name: "Exterior",
        components: {TitleComponent},
        props:['prod']
    }
</script>

<style scoped>

</style>