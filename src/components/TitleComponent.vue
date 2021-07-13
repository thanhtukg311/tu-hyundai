<template>
    <section class="box01">
        <div class="container">
            <div class="tlt_center_desk">
                <h3 class="title_desk">{{title}}</h3>
                <span class="desc_desk">{{desc}}</span>
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
    .title_desk{
        font-size:44px;
        font-weight:bold;
        line-height: 1.2em;
        margin-bottom:30px;
    }
    .tlt_center_desk{
        width: 70%;
        margin: auto;
        text-align: center;
    }
    .desc_desk{
        font-size: 16px;
    }
</style>