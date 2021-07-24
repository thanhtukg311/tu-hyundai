<template>
    <div id="content">
        <!--box01-->
        <section class="box01">
            <div class="inner">
                <div class="tlt_left">
                    <h3 class="tlt_h3">Thông số xe</h3>
                </div>
                <div class="select_ver">
                    <p class="tlt_ver">Chọn phiên bản</p>
                    <div style="width: 56px"></div>
                    <div class="custom-select-wrapper">
                        <div class="custom-select">
                            <div class="custom-select__trigger" v-on:click="openSelect">
                                <span style="pointer-events:none">{{this.versionSelected.version_name}}</span>
                                <div class="arrow" style="pointer-events:none"></div>
                            </div>
                            <div class="custom-options">
                                <span v-for="(version,index) in this.prod.specification.version_info" :key="index" class="custom-option" v-bind:class="{'selected': versionSelected.version_id == version.version_id}" v-on:click="selectVersion(version.version_id)">{{version.version_name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tbl_select">
                    <table-single-component v-for="(version,index) in this.versionSelected.version_table" :key="index" :data="version"/>
                </div>
            </div>
        </section>
        <section class="box02">
            <div class="inner">
                <div class="tlt_left">
                    <h3 class="tlt_h3">So sánh các phiên bản</h3>
                </div>
                <div class="tbl_select_ss">
                    <div class="tab">
                    <p></p>
                    <p class="btn_tab" v-for="(version,index) in this.prod.specification.version_info" :key="index" >{{version.version_name}}</p>
                </div>
                <table-multi-component v-for="(version,index) in this.prod.specification.version_compare" :key="index" :data="version"/>
                </div>
            </div>
        </section>
        <div style="height: 70px" class="d-show"></div>
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
                this.versionSelected = this.prod.specification.version_info[2]
            },
            selectVersion(versionId){
                let vm = this
                this.prod.specification.version_info.forEach(function (e) {
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