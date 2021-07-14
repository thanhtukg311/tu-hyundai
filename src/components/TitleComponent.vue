<template>
    <section class="box01">
        <div class="container">
            <div class="tlt_center">
                <h3 class="tlt_h3">{{title}}</h3>
                <span>{{desc}}</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TitleComponent",
        props: ['title', 'desc']
    }
</script>

<style scoped>

</style>