<template>
    <section class="box02">
        <div class="container">
            <div class="blog_col03">
                <div class="blog_box" v-for="(desc,index) in listDesc" :key="index">
                    <a href="#">
                        <img :src="desc.img" width="360px">
                        <p class="tlt_blog">
                            {{desc.title}}
                        </p>
                        <span>{{desc.desc}}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TripleComponent",
        props: ['listDesc']
    }
</script>

<style scoped>

</style>