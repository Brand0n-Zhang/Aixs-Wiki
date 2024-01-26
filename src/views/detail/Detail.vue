<template>
    <div class="detailPage">
        <TitleBar :is-show-back="true"></TitleBar>
        <div
            class="contentBox flex-row"
            v-if="axisDetail"
        >
            <el-image
                class="curAxisImg"
                :src="curImg"
                fit="cover"
            >
            </el-image>
            <div class="midInfoBox">
                <div class="axisName">{{ axisDetail.name || '- ' }}</div>
                <div class="groupNumber">车牌号：xxx</div>
                <div class="priceTag">参考价格</div>
                <div class="priceNum">￥{{ axisDetail.price || ' --.--' }}</div>
            </div>
            <div class="rightInfoBox">
                <div class="detailLine flex-row-center">
                    <div class="detailTag">代工厂商：</div>
                    <div class="detailContent">{{ axisDetail.producer || '- ' }}</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">轴心材质：</div>
                    <div class="detailContent">{{ axisDetail.center_m || '- ' }}</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">上盖材质：</div>
                    <div class="detailContent">{{ axisDetail.top_m || '- ' }}</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">底壳材质：</div>
                    <div class="detailContent">{{ axisDetail.bottom_m || '- ' }}</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">触发行程：</div>
                    <div class="detailContent">{{ axisDetail.trigger_travel || '- ' }}mm</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">触底行程：</div>
                    <div class="detailContent">{{ axisDetail.total_travel || '- ' }}mm</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">触发压力：</div>
                    <div class="detailContent">{{ axisDetail.trigger_pressure || '- ' }}gf</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">触底压力：</div>
                    <div class="detailContent">{{ axisDetail.bottom_pressure || '- ' }}gf</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">弹簧长度：</div>
                    <div class="detailContent">{{ axisDetail.spring_length || '- ' }}mm</div>
                </div>
                <div class="detailLine flex-row-center">
                    <div class="detailTag">弹簧类型：</div>
                    <div class="detailContent">{{ axisDetail.spring_type || '- ' }}mm</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getAxisDetail } from "../../api";
import { axis } from "../../types/axisInterface";
import TitleBar from "../../components/titleBar/TitleBar.vue";

const route = useRoute();
const axisId = ref(route.query.id);

const axisDetail = ref<axis>();

const curImg = ref('');

onMounted(() => {
    getAxisDetail({ id: axisId.value }).then((res: any) => {
        axisDetail.value = res.data.data;
        curImg.value = res.data.data.cover_img;
    });
});


</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './Detail.less';
</style>