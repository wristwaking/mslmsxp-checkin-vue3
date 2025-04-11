<template>
    <div class="header">
        <audio id="music" src="https://music.163.com/song/media/outer/url?id=2014552587.mp3" loop></audio>
        <img class="header-logo" src="@/assets/咕咕督学(黑).jpg" alt="" @click="navigateIndex">
        <div class="header-title" @click="navigateIndex">咕咕督学：盯盯学微信小程序管理端</div>
        
        <div class="header-contain">
            <el-tooltip content="解题星球主题曲：数学系和银河系邂逅" placement="top">
                <el-switch v-model="music" @change="changeMusic" active-text="播放音乐" inactive-text="暂停播放">
                </el-switch>
            </el-tooltip>
        </div>

        <div class="login-button">
            <img :src="admin.logo" alt="">
            <div>{{ admin.nickname }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            music: false,
            admin: {
                logo: "",
                nickname: "登录"
            }
        }
    },
    props: {

    },
    methods: {
        changeMusic(value) {
            let music = document.getElementById("music")
            console.log(value)
            if (value) {
                music.play()
            } else {
                music.pause()
            }
        },
        navigateIndex() {
            if (this.$route.path !== '/') {
                this.$router.push('/');
            }
        },
        loadLoginData() {
            this.admin = JSON.parse(sessionStorage.getItem("adminInfo"))
            this.admin.logo =  `https://q4.qlogo.cn/headimg_dl?dst_uin=${this.admin.username}&spec=640`
        }
    },
    mounted() {
        this.loadLoginData()
    }
}
</script>


<style scoped>
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    background-color: #151728;
    z-index: 1;
    position: sticky;
    top: 0;
}

.header-logo {
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
}

.header-title {
    margin-left: 20px;
    margin-right: auto;
    cursor: pointer;
    color: #FFFFFF;
}

.header-button {
    margin-left: 20px;
    padding: 0 15px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: 2px solid #7393df;
    box-sizing: border-box;
    color: #7393df;
    cursor: pointer;
    text-decoration: none;
}

.header-button:hover {
    background-color: #7393df;
    color: white;
}


.header-contain {
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-left: 20px;
    padding: 0 20px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
}

.login-button {
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #FFFFFF;
    cursor: pointer;
    margin-left: 20px;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    color: #7393df;
}

.login-button img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    box-sizing: border-box;
    margin: 5px;
}

.login-button div {
    padding: 0 20px;
}
</style>