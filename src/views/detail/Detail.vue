<template>
    <div class="detailPage">
        <TitleBar :is-show-back="true"></TitleBar>
        <div
            class="contentBox flex-row"
            v-if="axisDetail"
        >
            <!-- <transition name="fade"> -->
            <el-image
                class="curAxisImg"
                :key="curImg"
                :src="curImg"
                fit="cover"
                :preview-src-list="[curImg]"
            >
            </el-image>
            <!-- </transition> -->
            <div class="midInfoBox">
                <div class="axisName">{{ axisDetail.name || '- ' }}</div>
                <div class="tagList flex-row">
                    <div
                        class="typeTag c1"
                        v-if="axisDetail.type == '磁轴'"
                    >{{ axisDetail.type }}</div>
                    <div
                        class="typeTag c2"
                        v-if="axisDetail.type == '机械轴'"
                    >{{ axisDetail.type }}</div>
                    <div
                        class="typeTag c3"
                        v-if="axisDetail.trigger_type == '段落'"
                    >{{ axisDetail.trigger_type }}</div>
                    <div
                        class="typeTag c4"
                        v-if="axisDetail.sound_type == '静音'"
                    >{{ axisDetail.sound_type }}</div>

                </div>
                <div class="groupNumber">车牌号：{{ axisDetail.qq || '--' }}</div>
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
                    <div class="detailContent">{{ axisDetail.spring_type || '- ' }}</div>
                </div>
            </div>
        </div>
        <div class="detailImgBox flex-row">
            <div
                class="detailImgItemBox"
                v-for="(item, index) in detailImgList"
                :key="index"
                @mouseover="onHoverImg(item)"
            >
                <el-image
                    class="detailImgItem"
                    :src="item"
                    fit="cover"
                    lazy
                    :preview-src-list="detailImgList"
                    :initial-index="index"
                    close-on-press-escape
                >
                </el-image>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getAxisDetail } from "../../api";
// import { axis } from "../../types/axisInterface";
import TitleBar from "../../components/titleBar/TitleBar.vue";

const route = useRoute();
const axisId = ref(route.query.id);

const axisDetail = ref<any>();

const curImg = ref('');
const detailImgList = ref<string[]>([]);

onMounted(() => {
    getAxisDetail({ id: axisId.value }).then((res: any) => {
        axisDetail.value = res.data.data;
        curImg.value = res.data.data.cover_img;
        if (res.data.data.imgs) {
            detailImgList.value = res.data.data.imgs.split(',');
        }
    });
});

const onHoverImg = (item: string) => {
    curImg.value = item;
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './Detail.less';
</style>