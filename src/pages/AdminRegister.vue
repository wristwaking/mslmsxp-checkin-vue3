<template>
    <div class="contain">
        <HeaderMenu></HeaderMenu>
        <div class="main">
            <div class="login-box">
                <img src="@/assets/咕咕督学(黑).jpg" alt="">
                <el-form status-icon ref="form" label-width="125px" class="login-form">
                    <el-form-item label="咕咕督学注册邮箱" prop="mail" style="display: flex; align-items: center">
                        <el-input type="text" v-model="form.mail" autocomplete="off" style="flex: 1; margin-right: 20px;"
                            placeholder="填写咕咕督学注册邮箱"></el-input>
                        <el-button @click="getRegisterCode" :disabled="countdown > 0">{{ codeBtnTitle }}</el-button>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input type="text" v-model="form.code" autocomplete="off"
                            placeholder="填写咕咕督学注册邮箱验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="咕咕督学注册昵称" prop="nickname">
                        <el-input type="text" v-model="form.nickname" autocomplete="off"
                            placeholder="填写咕咕督学注册昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="咕咕督学注册账号" prop="username">
                        <el-input type="text" v-model="form.username" autocomplete="off"
                            placeholder="填写咕咕督学注册账号"></el-input>
                    </el-form-item>
                    <el-form-item label="咕咕督学注册密码" prop="password">
                        <el-input type="password" v-model="form.password" autocomplete="off"
                            placeholder="填写咕咕督学注册密码"></el-input>
                    </el-form-item>
                    <el-form-item label="边缘骇客注册凭证" prop="license">
                        <el-input type="text" v-model="form.license" autocomplete="off"
                            placeholder="填写边缘骇客注册凭证"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="large" type="primary" class="stretch-button" @click="handleRegsiter">注册账号</el-button>
                        <el-button size="large" @click="navigateLogin">继续登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import { ElMessage } from 'element-plus';
import Api from '@/apis';

export default {
    data() {
        return {
            codeBtnTitle: '请求验证码',
            countdown: 0,  // 倒计时秒数
            form: {
                mail: '',
                code: '',
                nickname: '',
                username: '',
                password: '',
                license: ''
            }
        };
    },
    methods: {
        getRegisterCode() {
            if (this.countdown > 0) return; // 倒计时期间禁用点击
            Api.getRegisterCode({
                mail: this.form.mail,
                code: this.form.code
            }).then(res => {
                if (res.data.code === 200) {
                    ElMessage({ message: res.data.message, type: 'success' });
                    // 启动 300 秒倒计时
                    this.startCountdown(300);
                } else {
                    ElMessage({ message: res.data.message, type: 'error' });
                }
            }).catch(() => {
                Api.feedback(this);
            });
        },
        startCountdown(seconds) {
            this.countdown = seconds;
            this.codeBtnTitle = `有效期${this.countdown}s`;
            const timer = setInterval(() => {
                this.countdown--;
                this.codeBtnTitle = `有效期${this.countdown}s`;
                if (this.countdown <= 0) {
                    clearInterval(timer);
                    this.codeBtnTitle = '请求验证码';
                }
            }, 1000);
        },
        handleRegsiter() {
            Api.adminRegister(this.form).then(res => {
                if (res.data.code === 200) {
                    ElMessage({ message: res.data.message, type: 'success' });
                } else {
                    ElMessage({ message: res.data.message, type: 'error' });
                }
            }).catch(() => {
                Api.feedback(this);
            });
        },
        navigateLogin() {
            if (this.$route.path !== '/login') {
                this.$router.replace('/login');
            }
        },
        forgetPassword() {
            this.$alert('联系预醒网络邮箱：edgehacker@willwaking.com', '忘记密码解决方案', {
                confirmButtonText: '确定'
            });
        }
    },
    components: { HeaderMenu }
};
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    min-height: calc(100vh - 80px);
    justify-content: center;
}

.login-box {
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgb(99 99 99 / 0.1);
    border-radius: 5px;
    width: 500px;
}

img {
    width: 100px;
    height: 100px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    margin: 40px auto;
}

.login-form {
    margin: 20px;
}

.el-form-item {
    margin-bottom: 20px;
}
</style>