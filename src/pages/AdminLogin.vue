<template>
    <div class="contain">
        <HeaderMenu></HeaderMenu>
        <div class="main">
            <div class="login-box">
                <img src="@/assets/咕咕督学(黑).jpg" alt="">
                <el-form status-icon ref="form" label-width="100px" class="login-form">
                    <el-form-item label="咕咕督学账号" prop="username">
                        <el-input type="text" v-model="form.username" autocomplete="off"
                            placeholder="填写咕咕督学账号"></el-input>
                    </el-form-item>
                    <el-form-item label="咕咕督学密码" prop="password">
                        <el-input type="password" v-model="form.password" autocomplete="off"
                            placeholder="填写咕咕督学密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="large" type="primary" class="stretch-button" @click="handleLogin">登录</el-button>
                        <el-button size="large" class="stretch-button" @click="navigateRegister">注册账号</el-button>
                        <el-button size="large" @click="forgetPassword">忘记密码</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
            form: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        handleLogin() {
            Api.adminLogin(this.form).then(res => {
                if (res.data.code == 200) {
                    ElMessage({message: res.data.message, type: 'success'});
                    sessionStorage.setItem("adminInfo", JSON.stringify(res.data.data))
                } else {
                    ElMessage({message: res.data.message, type: 'error'});
                }
            }).catch(() => {
                Api.feedback(this)
            })
        },
        navigateRegister() {
            if (this.$route.path !== '/register') {
                this.$router.replace('/register');
            }
        },
        forgetPassword() {
            this.$alert('联系预醒网络邮箱：edgehacker@willwaking.com', '忘记密码解决方案', {
                confirmButtonText: '确定'
            })
        }
    },
    components: { HeaderMenu }
}
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