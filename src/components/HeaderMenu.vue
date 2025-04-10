<template>
    <div class="header">
        <audio src="https://music.163.com/song/media/outer/url?id=1997632909.mp3" ref="music" loop></audio>
        <img class="header-logo" src="@/assets/咕咕督学(黑).jpg" alt="" @click="navigateIndex">
        <div class="header-title" @click="navigateIndex">咕咕督学</div>
        <a class="header-button" href="https://cloud.mslmsxp.com" target="_blank">哔哩哔哩星伊云自习室</a>
        <a class="header-button" href="https://www.mslmsxp.com" target="_blank">秒数联盟数学派</a>
        <a class="header-button" href="https://classmate.mslmsxp.com" target="_blank">云学霸陪学网</a>

        <div class="header-contain">
            <el-tooltip content="预醒网络进行曲：时间旅行" placement="top">
                <el-switch v-model="music" @change="changeMusic" active-text="播放音乐" inactive-text="暂停播放">
                </el-switch>
            </el-tooltip>
        </div>
        <div class="login-button" @click="navigateLogin">
            <img src="@/assets/默认图标(白).png" alt="">
            <div>登录</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            music: false
        }
    },
    props: {

    },
    methods: {
        changeMusic(value) {
            console.log(value)
            if (value) {
                this.$refs.music.play()
            } else {
                this.$refs.music.pause()
            }
        },
        navigateIndex() {
            if (this.$route.path !== '/') {
                this.$router.replace('/');
            }
        },
        navigateLogin() {
            if (this.$route.path !== '/login') {
                if (sessionStorage.getItem("adminInfo")) {
                    this.$router.replace('/manage/activation');
                } else {
                    this.$router.replace('/login');
                }
            }
        }
    },
    mounted() {

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
    background-color: rgba(255, 255, 255, 0.5);
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
    color: #0079BA;
    font-size: 20px;
}

.header-button {
    margin-left: 20px;
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
    color: #0079BA;
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

.login-button img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    padding: 5px;
}

.login-button div {
    padding: 0 20px;
}
</style>