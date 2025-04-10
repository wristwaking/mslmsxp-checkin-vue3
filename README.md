# 云学霸陪学网：让学霸陪你在线学习吧！

##  前端开发日志（2025-02-26）

### 其他登录渠道
更新说明：支持微信公众号登录、抖音登录 `auth2.0` 授权登录渠道。

![a97e82d09ccd72ebc17f420426b7e29](https://github.com/user-attachments/assets/3b2c82f3-ca73-419b-a67c-26be782c0670)

### 退出登录模块
**删除登录信息（删除 session 数据）**

![image](https://github.com/user-attachments/assets/8c92eb98-c4ef-4819-a73d-83882fba76c3)

## 前端开发日志（2025-02-23）
```
{id: 'ad81e390a5254680', serial: '04399807', nickname: '123', qq: '123', wechat: '123', …}
```

清空对象属性（初始化对象）
```
clearObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = '';
        } else if (typeof obj[key] === 'number') {
            obj[key] = 0;
        }
    }
}
```

### 检查邮箱是否合法
```js
isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length > 254) {
        return false;
    }
    if (!emailRegex.test(email)) {
        return false;
    }
    const [localPart, domain] = email.split('@');
    if (localPart.length > 64) {
        return false;
    }
    if (!domain || domain.length > 255) {
        return false;
    }
    const domainParts = domain.split('.');
    for (let part of domainParts) {
        if (part.length === 0 || part.length > 63) {
            return false;
        }
        if (part.startsWith('-') || part.endsWith('-')) {
            return false;
        }
    }
    return true;
}
```


## 网站截图
<img src="https://github.com/user-attachments/assets/b159185c-fbfd-4387-aa70-47fd71414b8b" width=200 />
<img src="https://github.com/user-attachments/assets/e1d9567f-12b8-4033-a3ea-fd4b3bd007ab" width=200 />


网站链接：https://classmate.mslmsxp.com

云学霸是一款边缘骇客编程实验室打造的云端陪学督学服务性平台，同学们选择你喜欢的学霸陪伴你学习吧。


## 注册页面 UI
![image](https://github.com/user-attachments/assets/63b7e41a-7b0e-4950-81a6-0764e02b3588)

## 登录页面 UI
![image](https://github.com/user-attachments/assets/f3136874-7e6c-4e74-8e3b-7131f03f2f9b)

## 我的信息页面 UI
![image](https://github.com/user-attachments/assets/d8936147-fb58-43bb-a4ad-3595dbd1315f)


## 热门学霸页面 UI
![image](https://github.com/user-attachments/assets/62956158-24be-4b00-af70-ba8b0e7dac58)
