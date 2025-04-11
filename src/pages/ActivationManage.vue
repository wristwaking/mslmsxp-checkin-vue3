<template>
    <div class="contain">
        <ManageHeaderMenu></ManageHeaderMenu>
        <div class="main">
            <ManageMenu defaultActive="1-2"></ManageMenu>
            <div class="content">
                <div class="content-title">
                    <span>管理激活码：{{ pagination.total }}</span>
                    <el-button style="margin-left: auto;" @click="refresh" class="content-title-button">刷新数据</el-button>
                    <el-button class="content-title-button" type="primary" plain @click="createTableData(500)">创建 5
                        元激活码</el-button>
                    <el-button class="content-title-button" type="primary" plain @click="createTableData(1000)">创建 10
                        元激活码</el-button>
                    <el-button class="content-title-button" type="primary" plain @click="createTableData(2000)">创建 20
                        元激活码</el-button>
                    <el-button class="content-title-button" type="primary" plain @click="createTableData(5000)">创建 50
                        元激活码</el-button>
                    <el-button class="content-title-button" type="primary" plain @click="createTableData(10000)">创建 100
                        元激活码</el-button>
                </div>

                <div style="padding: 20px;">
                    <el-table :data="tableData" border class="custom-table">
                        <el-table-column prop="id" label="激活码 ID">
                            <template #default="scope">
                                {{ scope.row.id }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="coin" label="激活硬币数量">
                            <template #default="scope">
                                激活硬币 {{ scope.row.coin }}
                            </template>
                        </el-table-column>
                        <el-table-column label="创建时间">
                            <template #default="scope">
                                {{ scope.row.created_time }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="expired_time" label="过期日期">
                            <template #default="scope">
                                <div>{{ scope.row.expired_time }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="expired_time" label="状态">
                            <template #default="scope">
                                <el-tag v-if="scope.row.status">{{ scope.row.status ? '待激活' : '已激活' }}</el-tag>
                                <el-tag type="danger" v-else>{{ scope.row.status ? '待激活' : '已激活' }}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="激活码">
                            <template #default="scope">
                                <el-button @click="copyToClipboard(scope.row.code)">
                                    复制激活码
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <div
                    style="background-color: #ffffff; height: 50px; display: flex; align-items: center; padding: 0 10px; margin: 20px; margin-top: 0;">
                    <el-pagination @current-change="changePage" background layout="prev, pager, next"
                        :total="pagination.total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ManageHeaderMenu from '@/components/ManageHeaderMenu.vue';
import ManageMenu from '@/components/ManageMenu.vue';
import { ElMessage } from 'element-plus';
import Api from '@/apis'

export default {
    data() {
        return {
            admin: {},
            tableData: [],
            pagination: {
                page: 1,
                page_size: 10,
                total: 0,
                total_pages: 0
            }
        };
    },
    methods: {
        copyToClipboard(text) {
            if (!navigator.clipboard) {
                const textarea = document.createElement('textarea')
                textarea.value = text
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand('copy')
                document.body.removeChild(textarea)
                ElMessage.success('已复制到剪贴板: ' + text)
                return
            }
            navigator.clipboard.writeText(text)
                .then(() => ElMessage.success('已复制到剪贴板: ' + text))
                .catch((err) => ElMessage.error('复制错误'))
        },
        refresh() {
            this.selectTableData()
        },
        createTableData(coin) {
            Api.createActivationData({
                username: this.admin.username,
                password: this.admin.password,
                coin: coin,
                duration: 30,
            }).then(res => {
                if (res.data.code == 200) {
                    ElMessage({ message: res.data.message, type: 'success' });
                    this.selectTableData()
                } else {
                    ElMessage({ message: res.data.message, type: 'error' });
                }
            }).catch(() => {
                Api.feedback(this)
            })
        },
        selectTableData() {
            Api.selectActivationData({
                page: this.pagination.page,
                page_size: this.pagination.page_size,
                username: this.admin.username,
                password: this.admin.password
            }).then(res => {
                if (res.data.code == 200) {
                    ElMessage({ message: res.data.message, type: 'success' });
                    this.tableData = res.data.data.activations
                    this.pagination = res.data.data.pagination
                } else {
                    ElMessage({ message: res.data.message, type: 'error' });
                }
            }).catch(() => {
                Api.feedback(this)
            })
        },
        changePage(page) {
            this.pagination.page = page
            this.selectTableData()
        }
    },
    mounted() {
        this.admin = JSON.parse(sessionStorage.getItem("adminInfo"))
        console.log(this.admin)
        this.selectTableData()
    },
    components: {
        ManageHeaderMenu,
        ManageMenu
    }
};
</script>

<style scoped>
.main {
    justify-content: space-between;
    display: flex;
    height: calc(100vh - 60px);
}

.content {
    flex: 1;
    overflow-y: scroll;
    height: calc(100vh - 60px);
}

.content-title {
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    display: flex;
}

.content-title span {
    font-size: 20px;
}

.upload-image {
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    object-fit: cover;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #dbdee5;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
}

.upload-image:hover {
    border-color: #409eff;
}

.upload-image img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.upload-image input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
}

.upload-image-content {
    position: absolute;
    width: 100%;
    height: 100%;
    color: rgb(152, 155, 167);
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 20px;
}
</style>
