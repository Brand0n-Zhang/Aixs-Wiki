<template>
    <div class="listPage">
        <div class="titleBar flex-column-center">
            <div class="titleText">
                Axis Wiki
            </div>
        </div>
        <div class="pageContent flex-row">
            <div class="searchBox">
                <div class="searchTitle">轴体搜索</div>
                <el-input
                    class="searchNameIpt"
                    v-model="searchName"
                    clearable
                >
                    <template #prepend>
                        <el-button :icon="Search" />
                    </template></el-input>
                <div class="searchDivider"></div>
                <div class="sortTitle">参数筛选</div>
                <div class="sortListBox">
                    <div class="sortItem flex-row-center">
                        <div class="sortTag">弹簧长度</div>
                        <div class="flex-row-center">
                            <el-input-number
                                class="sortIpt"
                                v-model="num"
                                :min="1"
                                :max="10"
                                controls-position="right"
                            />
                            mm
                        </div>
                    </div>
                </div>
            </div>
            <div class="listBox"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { ref } from 'vue';
import { Search } from "@element-plus/icons-vue";

const searchName = ref('');
const num = ref(0)


</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './List.less';
</style>