<template>
    <el-menu :default-active="defaultActive" class="el-menu-vertical" text-color="#ffffff" active-text-color="#006eff"
        background-color="#24273b">

        <el-menu-item index="1">
            <el-icon>
                <TrendCharts />
            </el-icon>
            <span>管理激活码</span>
        </el-menu-item>

        <el-menu-item index="2">
            <el-icon>
                <TrendCharts />
            </el-icon>
            <span>自动创建激活码链接</span>
        </el-menu-item>

        <el-menu-item index="3">
            <el-icon>
                <TrendCharts />
            </el-icon>
            <span>登录信息</span>
        </el-menu-item>

    </el-menu>
</template>
  
<script>
export default {
    name: 'Menu',
    props: {
        defaultActive: {
            type: String,
            default: '1-1'
        }
    },
    methods: {
        navigateTo(targetPath) {
            if (this.$route.path === targetPath) {
                return;
            }
            this.$router.push(targetPath);
        }
    }
}
</script>
  
<style scoped>
.el-menu-vertical {
    width: 215px;
    height: calc(100vh - 60px);
    background-color: #24273b;
    border-right: none;
}
</style>
  