<template>
    <div class="tbl_border open">
        <div class="tlt_select" @click="openSelect()">{{data.name}}
            <div class="arrow" style="pointer-events:none"></div>
        </div>
        <div class="tbl_content">
            <div class="row_cnt" v-for="(content, index) in data.content" :key="index">
                <p>{{content.title}}</p>
                <p style="color: #000">{{content.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TableSingleComponent",
        props:['data'],
        data() {
            return{
            }
        },
        mounted() {
        },
        created() {

        },
        methods:{
            openSelect(){
                if(event.target.parentElement.className === 'tbl_border'){
                    event.target.parentElement.className += ' open';
                }else {
                    event.target.parentElement.className = 'tbl_border';
                }
            }
        }
    }
</script>

<style scoped>

</style>