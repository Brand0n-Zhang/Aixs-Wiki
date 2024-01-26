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
                    <User />
                </el-icon>
            </template>


            <el-descriptions
                :column="1"
                size="small"
            >
                <el-descriptions-item label="账号">
                    <!-- <el-button
                        size="small"
                        round
                    >注册</el-button> -->
                    <el-button
                        size="small"
                        round
                        @click="goLogin"
                    >登录</el-button>
                </el-descriptions-item>
                <el-descriptions-item label="外设交流群">859550185</el-descriptions-item>
                <el-descriptions-item label="网站建议">amarok1217@163.com</el-descriptions-item>
            </el-descriptions>
        </el-popover>
        <LoginModal ref="loginModalRef"></LoginModal>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginModal from "../loginModal/LoginModal.vue";


const loginModalRef = ref();
const props = defineProps({
    isShowBack: {
        type: Boolean,
        default: false
    }
});

const goLogin = () => {
    loginModalRef.value.openModal();
};

const router = useRouter();
const goBack = () => {
    router.go(-1);
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './TitleBar.less';
</style>