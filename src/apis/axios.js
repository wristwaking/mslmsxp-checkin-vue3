import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cloudmate.willwaking.com/dingdingxue',
    timeout: 10000,
});

// api.interceptors.request.use((config) => {
//     const adminInfo = sessionStorage.getItem("adminInfo");
//     if (adminInfo) {
//         let user = JSON.parse(adminInfo);
//         if (user && user.id) {
//             config.headers.Authorization = "Bearer " + user.id;
//         } else {
//             console.warn("请求权限错误");
//         }
//     } else {
//         console.warn("请求权限异常");
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

export default api;