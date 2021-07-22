<template>
            <ul class="blog_col03">
                <li class="blog_box" v-for="(desc,index) in listDesc" :key="index">
                        <p class="img_blog">
                            <img :src="desc.img">
                        </p>
                        <p class="tlt_blog">
                            {{desc.title}}
                        </p>
                        <span style="font-size: 16px">{{desc.desc}}</span>
                </li>
            </ul>
</template>

<script>
    export default {
        name: "TripleComponent",
        props: ['listDesc']
    }
</script>

<style scoped>

</style>