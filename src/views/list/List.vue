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
                        <el-button
                            :icon="Search"
                            @click="goSearch"
                        />
                    </template></el-input>
                <div class="searchDivider"></div>
                <div class="sortTitle">参数筛选</div>
                <div class="sortListBox">
                    <div class="sortItem flex-row-center">
                        <div class="sortTag">弹簧长度</div>
                        <div class="flex-row-center">
                            <el-input-number
                                class="sortIpt"
                                v-model="spring_length"
                                :min="1"
                                :max="100"
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
                                v-model="trigger_pressure"
                                :min="1"
                                :max="100"
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
                                v-model="bottom_pressure"
                                :min="1"
                                :max="100"
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
                                v-model="total_travel"
                                :min="1"
                                :max="100"
                                :step="0.1"
                            />
                            <div class="sortUnit">mm</div>
                        </div>
                    </div>
                    <!-- <div class="searchBtn">搜索</div> -->
                    <div class="buttonLine flex-row-center">

                        <el-button
                            class="bottomSearchBtn"
                            type="primary"
                            round
                            size="large"
                            color="rgba(0, 90, 255, 1)"
                            @click="goSearch"
                            :icon="Search"
                        >搜索</el-button>
                        <el-button
                            :icon="Delete"
                            circle
                            plain
                            size="large"
                            @click="reset"
                        />
                    </div>

                </div>
            </div>
            <div class="listBox">
                <div
                    class="listItem flex-column-center"
                    v-for="item in listData"
                    :key="item.id"
                    @click="goDetail(item.id)"
                >
                    <el-image
                        class="imgBox"
                        :src="item.cover_img"
                        alt=""
                        fit="cover"
                        lazy
                    >
                    </el-image>

                    <div class="axisName">{{ item.name }}</div>
                    <!-- <div class="axisDesc">{{ item.desc }}</div>
                    <el-button
                        class="goDetailBtn"
                        color="rgba(0, 90, 255, 1)"
                        type="primary"
                    >查看详情</el-button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Search, Delete } from "@element-plus/icons-vue";
import { getAxisList } from '../../api';
import { useRouter } from 'vue-router';

const searchName = ref('');

const pageSize = ref(10);
const pageNo = ref(1);

const listData = ref<any[]>([]);

onMounted(() => {
    initList();
});

const spring_length = ref();
const trigger_pressure = ref();
const bottom_pressure = ref();
const total_travel = ref();

const initList = () => {
    getAxisList({
        name: searchName.value,
        spring_length: spring_length.value,
        trigger_pressure: trigger_pressure.value,
        bottom_pressure: bottom_pressure.value,
        total_travel: total_travel.value,
        pageNo: pageNo.value,
        pageSize: pageSize.value
    }).then((res: any) => {
        listData.value = res.data.data.list;
    });
};

const goSearch = () => {
    initList();
};

const router = useRouter();
const goDetail = (id: number) => {
    router.push({
        path: '/detail',
        query: {
            id: id
        }
    });
};

const reset = () => {
    spring_length.value = null;
    trigger_pressure.value = null;
    bottom_pressure.value = null;
    total_travel.value = null;
    searchName.value = '';
}


</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './List.less';
</style>