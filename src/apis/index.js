import api from './axios';
import { ElMessage } from 'element-plus';

const IMAGEURL = "https://cloudmate.mslmsxp.com/dingdingxue"

/**
 * API module for handling various administrative operations.
 * 
 * This module provides functions to manage user feedback, 
 * handle admin login, and perform registration via email or phone.
 * It also includes methods for managing scholar records and 
 * selecting orders.
 * 
 * @module Api
 */
let Api = {
    feedback() {
        ElMessage({ message: '服务器端或者客户端网络异常', type: 'warning' })
    },
    adminLogin(params) {
        return api.post('/admin/login', params)
    },
    adminRegister(params) {
        return api.post('/admin/register', params)
    },
    getRegisterCode(params) {
        return api.post('/admin/register/mail/code', params)
    }
}

export default Api;
