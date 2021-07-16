<template>
        <ul class="blog_col02">
            <li class="blog_box" v-for="(desc,index) in listDesc" :key="index">
                <a href="#">
                    <p class="img_blog">
                        <img :src="desc.img">
                    </p>
                    <p class="tlt_blog">
                        {{desc.title}}
                    </p>
                    <span>{{desc.desc}}</span>
                </a>
            </li>
        </ul>
</template>

<script>
    export default {
        name: "DoubleComponent",
        props: ['listDesc']
    }
</script>

<style scoped>

</style>