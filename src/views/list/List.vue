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
                    <template #append>
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
                                v-model="num1"
                                :min="1"
                                :max="10"
                                :step="0.1"
                            />
                            <div class="sortUnit">mm</div>
                        </div>
                    </div>
                    <div class="sortItem flex-row-center">
                        <div class="sortTag">触发压力</div>
                        <div class="flex-row-center">
                            <el-input-number
                                class="sortIpt"
                                v-model="num2"
                                :min="1"
                                :max="10"
                                :step="1"
                            />
                            <div class="sortUnit">g</div>
                        </div>
                    </div>
                    <div class="sortItem flex-row-center">
                        <div class="sortTag">触底压力</div>
                        <div class="flex-row-center">
                            <el-input-number
                                class="sortIpt"
                                v-model="num3"
                                :min="1"
                                :max="10"
                                :step="1"
                            />
                            <div class="sortUnit">g</div>
                        </div>
                    </div>
                    <div class="sortItem flex-row-center">
                        <div class="sortTag">总行程</div>
                        <div class="flex-row-center">
                            <el-input-number
                                class="sortIpt"
                                v-model="num4"
                                :min="1"
                                :max="10"
                                :step="1"
                            />
                            <div class="sortUnit">mm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="listBox">
                <div
                    class="listItem flex-column-center"
                    v-for="item in dataList"
                    :key="item.id"
                >
                    <div class="imgBox"></div>
                    <div class="axisName">{{ item.name }}</div>
                    <div class="axisDesc">{{ item.desc }}</div>
                    <el-button
                        class="goDetailBtn"
                        color="rgba(0, 90, 255, 1)"
                        type="primary"
                    >查看详情</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { ref } from 'vue';
import { Search } from "@element-plus/icons-vue";

const searchName = ref('');
const num1 = ref();
const num2 = ref();
const num3 = ref();
const num4 = ref();

const dataList = ref([
    {
        id: 1,
        img: '',
        name: '测试轴',
        desc: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
    },
    {
        id: 2,
        img: '',
        name: '测试轴',
        desc: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
    },
    {
        id: 3,
        img: '',
        name: '测试轴',
        desc: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
    },
    {
        id: 4,
        img: '',
        name: '测试轴',
        desc: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
    }
])


</script>
<style lang="less" rel="stylesheet/less" scoped>@import './List.less';</style>