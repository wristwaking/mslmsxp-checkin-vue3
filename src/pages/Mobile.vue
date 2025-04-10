<template>
    <div class="phone-contain">
        <div class="header">
            <img class="header-logo" src="@/assets/咕咕督学(黑).jpg" alt="">
            <div class="header-title">咕咕督学</div>
            <a class="header-button" href="https://work.weixin.qq.com/kfid/kfcac1a16f5cf9e4809" target="_blank">微信客服</a>
        </div>
        <div class="content">
            <img src="@/assets/咕咕督学(黑).jpg" alt="">
            <div class="content-title">咕咕督学</div>
            <div class="content-tip">
                咕咕督学：咕咕督学是边缘骇客编程实验室和云同桌合作打造在线督学、陪学服务平台。咕咕督学目前客户端产品主要包含盯盯学微信小程序、咕咕鸽打卡机器人。咕咕督学开设在线学习自习室，并且提供一站式智能化、人性化、个性化督学陪学服务，全新高品质督学陪学体验等你报名。
            </div>
            <div class="content-button">
                <a>盯盯学微信小程序</a>
                <a>咕咕鸽打卡机器人</a>
                <a href='https://m.tb.cn/h.66aHPf6sTfBqo8n'>咕咕督学淘宝店铺</a>
                <a href='https://work.weixin.qq.com/kfid/kfcac1a16f5cf9e4809'>微信客服详细咨询</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        };
    },

}
</script>

<style scoped>
.phone-contain {
    background-color: #F1F6FD;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 360px;
    max-width: 768px;
    height: 100vh;
    overflow-y: scroll;
    margin: 0 auto;
    box-sizing: border-box;
    background-size: cover;
    background-image: url(@/assets/登录炫彩模糊背景.png);
}

.header {
    height: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
}

.header:hover {
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: rgba(255, 255, 255, 0.5);
}

.header-logo {
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
}

.header-title {
    margin-left: 10px;
    margin-right: auto;
}
.header-button {
    margin-left: 10px;
    padding: 0 15px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: 2px solid #0079BA;
    box-sizing: border-box;
    color: #0079BA;
    cursor: pointer;
    text-decoration: none;
}

.header-button:hover {
    background-color: #0079BA;
    color: white;
}

.content {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px 0;
    padding-top: 20px;
    padding-bottom: 0;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    overflow: hidden;
    box-sizing: border-box;
}

.content img {
    width: 120px;
    height: 120px;
    border-radius: 20px;
}

.content-title {
    font-size: 50px;
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(45deg, #898db3, #45B3F9, #fdc034);
    display: flex;
    align-items: center;
    color: transparent;
    -webkit-background-clip: text;
}

.content-tip {
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: #a7b0c7;
    padding: 0 10px;
    text-align: justify;
    margin-bottom: auto;
    line-height: 25px;
    font-size: 12px;
    margin-bottom: 20px;
}

.content-button {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 5px;
    background-color: white;
    flex-wrap: wrap;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
}

.content-button a {
    width: calc(50% - 10px);
    color: #2689B7;
    margin: 5px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    font-size: 12px;
    border: 2px solid #2689B7;
    font-family: "linenazi";
    box-sizing: border-box;
    text-decoration: none;
}

button:hover {
    color: white;
    background-color: #2689B7;
}
</style>