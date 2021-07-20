<template>
    <div id="content">
        <!--box01-->
        <section class="box01">
            <div class="container">
                <div class="tlt_left">
                    <h3 class="tlt_h3">Thông số xe</h3>
                </div>
                <div class="select_ver">
                    <p class="tlt_ver">Chọn phiên bản</p>
                    <div class="custom-select-wrapper">
                        <div class="custom-select">
                            <div class="custom-select__trigger" v-on:click="openSelect">
                                <span style="pointer-events:none">{{this.versionSelected.version_name}}</span>
                                <div class="arrow" style="pointer-events:none"></div>
                            </div>
                            <div class="custom-options">
                                <span v-for="(version,index) in this.prod.specification" :key="index" class="custom-option" v-bind:class="{'selected': versionSelected.version_id == version.version_id}" v-on:click="selectVersion(version.version_id)">{{version.version_name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tbl_select">
                    <table-single-component :data="this.versionSelected.version_table"/>
                    <table-single-component :data="this.versionSelected.version_table"/>
                </div>
            </div>
        </section>
        <section class="box02">
            <div class="container">
                <div class="tlt_left">
                    <h3 class="tlt_h3">So sánh các phiên bản</h3>
                </div>
                <div class="tab_ver">
                    <p class="btn_tab" v-for="(version,index) in this.prod.specification" :key="index" >{{version.version_name}}</p>
                </div>
                <table-multi-component :data="this.prod.specification[0].version_compare"/>
                <table-multi-component :data="this.prod.specification[0].version_compare"/>
            </div>
        </section>
        <prev-next-component :prev="{slug:prod.slug, menu:'tien-nghi', name:'Tiện nghi'}" :next="false"/>
    </div>
</template>

<script>
    import PrevNextComponent from "@/components/PrevNextComponent";
    import TableSingleComponent from "@/components/TableSingleComponent";
    import TableMultiComponent from "@/components/TableMultiComponent";

    export default {
        name: "Specifications",
        props: ['prod'],
        components: {TableMultiComponent, TableSingleComponent, PrevNextComponent},
        data() {
            return{
                versionSelected: ''
            }
        },
        mounted() {
        },
        created() {
            this.getVersionDefault()
        },
        methods: {
            getVersionDefault () {
                this.versionSelected = this.prod.specification[0]
            },
            selectVersion(versionId){
                let vm = this
                this.prod.specification.forEach(function (e) {
                    if(e.version_id == versionId){
                        vm.versionSelected = e
                    }
                })
                event.target.parentElement.parentElement.className = 'custom-select'
            },
            openSelect(){
                if(event.target.parentElement.className === 'custom-select'){
                    event.target.parentElement.className += ' open';
                }else {
                    event.target.parentElement.className = 'custom-select';
                }
            }
        }

    }
</script>

<style scoped>

</style>