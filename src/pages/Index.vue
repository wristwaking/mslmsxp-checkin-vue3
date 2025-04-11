<template>
    <div class="contain">
        <HeaderMenu></HeaderMenu>
        <div class="main">
            <div class="main-content">
                <div class="main-content-title">
                    咕咕督学
                </div>
                <div class="main-content-english-title">GUGU Supervised Learning Serivce Platform</div>
                <div class="main-content-tip">
                    <div>咕咕督学是边缘骇客编程实验室和云同桌合作打造在线督学、陪学服务平台。咕咕督学目前客户端产品主要包含盯盯学微信小程序、咕咕鸽打卡机器人。咕咕督学开设在线学习自习室，并且提供一站式智能化、人性化、个性化督学陪学服务，全新高品质督学陪学体验等你报名。</div>
                </div>
                <div class="main-content-menu">
                    <a class="main-content-menu-button" @click="LoginServer">盯盯学微信小程序</a>
                    <a class="main-content-menu-button" @click="LoginServer">咕咕鸽打卡机器人</a>
                </div>

                <div class="main-content-menu">
                    <a class="main-content-menu-button" target="_blank" href='https://m.tb.cn/h.66aHPf6sTfBqo8n' style="background-color: #E33F31;">咕咕督学淘宝店铺</a>
                    <a class="main-content-menu-button" target="_blank" href='https://work.weixin.qq.com/kfid/kfcac1a16f5cf9e4809' style="background-color: #4ed786" @click="LoginServer">微信客服详细咨询</a>
                </div>
            </div>

            <img class="main-image" src="@/assets/background.jpg" alt="">
        </div>
    </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import { ElMessage } from 'element-plus';
import Api from '@/apis'
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components: { HeaderMenu }
}
</script>

<style scoped>
.contain {
    background-color: #ffffff;
}

.main {
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    min-height: calc(100vh - 80px);
    justify-content: center;
}

.main-content {
    flex: 1;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0;
    margin-right: 20px;
    /* box-shadow: 0 2px 8px 0 rgba(99, 99, 99, .25);
    padding: 20px;
    box-sizing: border-box; */
}

.main-content-title {
    margin-top: auto;
    font-size: 100px;
}

.main-content-english-title {
    margin-top: 20px;
    margin-bottom: auto;
    font-size: 25px;
}

.main-content-tip {
    color: #606468;
    line-height: 35px;
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 20px;
}

.main-content-menu {
    display: flex;
}

.main-content-menu input {
    margin-right: 20px;
    border-radius: 5px;
    border: 2px solid #1296DB;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 20px;
    width: 320px;
}

.main-content-menu-button {
    background-color: #1296DB;
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    margin-right: 20px;
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
    text-decoration: none;
}


.main-image {
    width: 800px;
    height: 600px;
    background-color: #ECF2F7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #B2B8BF;
    border-radius: 20px;
    /* box-shadow: 0 2px 8px 0 rgba(99, 99, 99, .25); */
    box-sizing: border-box;
    border: 2px dashed #1296db;
}
</style>