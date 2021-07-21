<template>
    <div>
        <header id="header">
            <div class="container header_main">
                <div class="h_box">
                    <h1>
                        <a href="https://www.hyundai.tcmotor.vn/">
                            <img src="./../assets/images/logo.png" width="250px" alt="logo">
                        </a>
                    </h1>
                </div>
                <div class="tlt_page_top">
                    <span>Nổi bật</span>
                </div>
                <nav id="gnavi" v-bind:class="{'open' : this.isOpen}" ref="mobileMenu">
                    <ul class="gnavi_pc" @click="openMenuMobile()">
                        <li><a target="_blank" href="https://www.hyundai.tcmotor.vn/mua-xe/chon-xe">Trang chủ</a></li>
                        <li><router-link to="/">Giới thiệu</router-link></li>
                        <li><router-link :to="{name: 'san-pham', params:{slug: 'i10-2020'}}">Sản phẩm</router-link></li>
                        <li><router-link to="/">Mua xe</router-link></li>
                        <li><router-link to="/">Dịch vụ</router-link></li>
                        <li><router-link to="/">Tin tức</router-link></li>
                        <li><router-link to="/">Liên hệ</router-link></li>
                    </ul>
                </nav>
                <div class="btn_share">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63312 7.65469L9.8201 4.34263M4.66176 9.2491L9.08644 11.8919M3.02161 6.44415C3.40588 6.45663 3.77792 6.58131 4.09137 6.80263C4.40483 7.02395 4.64582 7.33213 4.78422 7.68871C4.92262 8.04528 4.95234 8.43446 4.86966 8.80771C4.78698 9.18096 4.59556 9.52176 4.3193 9.78757C4.04304 10.0534 3.69409 10.2325 3.31612 10.3024C2.93814 10.3724 2.54786 10.3302 2.19385 10.1811C1.83985 10.0319 1.5379 9.7825 1.32559 9.46386C1.11328 9.14523 1.00002 8.77148 1 8.38929C1.00903 7.865 1.22698 7.36571 1.60601 7.00102C1.98504 6.63633 2.49417 6.43604 3.02161 6.44415ZM11.108 1.00025C11.4921 1.01291 11.8639 1.13771 12.1771 1.35908C12.4903 1.58045 12.731 1.88857 12.8691 2.24504C13.0073 2.6015 13.0368 2.9905 12.954 3.36352C12.8712 3.73655 12.6797 4.07708 12.4034 4.34263C12.1272 4.60817 11.7784 4.78698 11.4006 4.85674C11.0228 4.9265 10.6327 4.88417 10.2789 4.73495C9.92514 4.58574 9.62338 4.33628 9.41133 4.01771C9.19927 3.69913 9.08628 3.32548 9.08644 2.94348C9.09572 2.41944 9.31388 1.92048 9.69291 1.55614C10.0719 1.1918 10.5809 0.991884 11.108 1.00025ZM11.108 11.1108C11.4921 11.1235 11.8638 11.2483 12.177 11.4696C12.4902 11.6909 12.7308 11.999 12.869 12.3554C13.0072 12.7118 13.0369 13.1007 12.9541 13.4737C12.8714 13.8467 12.6799 14.1873 12.4038 14.4528C12.1276 14.7184 11.7789 14.8973 11.4012 14.9672C11.0234 15.037 10.6333 14.9948 10.2795 14.8457C9.9257 14.6967 9.62396 14.4473 9.41179 14.1289C9.19962 13.8104 9.08646 13.4369 9.08644 13.055C9.09547 12.5308 9.3135 12.0316 9.69256 11.667C10.0716 11.3025 10.5807 11.1024 11.108 11.1108Z" stroke="black"/>
</svg>

                </div>
                <div class="btn_search">
                    <img src="./../assets/images/search.png" alt="search" width="15px">
                </div>
                <div class="header_sp">
                    <p class="logo"><a href=""><img src="" alt=""></a></p>
                    <div class="ico_menu_click">
                        <label class="icon_menu closes" v-bind:class="{'active' : this.isOpen}" @click="openMenuMobile()"><span></span></label>
                        <label class="icon_menu open" v-bind:class="{'active' : this.isOpen}" @click="openMenuMobile()"><span></span></label>
                    </div>
                </div>
            </div>
        </header>
        
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            openMenuMobile(){
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style scoped>

</style>