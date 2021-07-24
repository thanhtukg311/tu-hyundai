<template>
    <section class="prev-next-cate">
        <div class="inner">
            <div class="flex_cate_bottom">
                <router-link :to="{name: 'san-pham', params:{slug: prev.slug, menu: prev.menu }}" class="cate_btn prev_cate"><i class="fal fa-chevron-left" v-if="prev"></i>{{prev.name}}</router-link>
                <router-link :to="{name: 'san-pham', params:{slug: next.slug, menu: next.menu }}" class="cate_btn next_cate">{{next.name}} <i class="fal fa-chevron-right" v-if="next"></i></router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PrevNextComponent",
        props:['prev', 'next'],

    }
</script>

<style scoped>

</style>