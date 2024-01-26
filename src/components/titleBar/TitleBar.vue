<template>
    <div class="titleBar flex-column-center">
        <el-icon
            class="backIcon"
            @click="goBack"
            v-show="props.isShowBack"
        >
            <Back />
        </el-icon>
        <div class="titleText">
            Axis Wiki
        </div>
        <el-popover
            placement="bottom"
            :width="220"
            trigger="hover"
            content=""
        >
            <template #reference>
                <el-icon class="chatIcon">
                    <ChatDotRound />
                </el-icon>
            </template>
            <el-descriptions
                :column="1"
                size="small"
            >
                <el-descriptions-item label="外设交流群">859550185</el-descriptions-item>
                <el-descriptions-item label="网站建议">amarok1217@163.com</el-descriptions-item>


            </el-descriptions>
        </el-popover>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { useRouter } from "vue-router";

const props = defineProps({
    isShowBack: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './TitleBar.less';
</style>