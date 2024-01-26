<template>
    <div class="loginModal">
        <el-dialog
            v-model="isShowModal"
            :title="modalTitle"
            width="550"
        >
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="140px"
                size="default"
                status-icon
                v-if="isShowModal"
            >
                <el-form-item
                    label="昵称"
                    prop="period"
                >
                    <el-input
                        class="loginIpt"
                        v-model="ruleForm.nickname"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="用户名"
                    prop="period"
                >
                    <el-input
                        class="loginIpt"
                        v-model="ruleForm.userName"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="密码"
                    prop="period"
                >
                    <el-input
                        class="loginIpt"
                        v-model="ruleForm.password"
                    ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm(ruleFormRef)"
                        round
                    >
                        确定
                    </el-button>
                    <el-button
                        @click="isShowModal = false"
                        round
                    >
                        取消
                    </el-button>

                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script type="text/ecmascript-6" lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from 'element-plus/lib/components/index.js';
import { register } from "../../api";

const modalTitle = ref('登录');

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    userName: '',
    password: '',
    nickname: ''
});

const rules = reactive<FormRules>({
    userName: [
        { required: true, message: '请输入用户名', trigger: 'change' },
    ],
    nickname: [
        { required: true, message: '请输入昵称', trigger: 'change' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'change' },
    ],
});


const isShowModal = ref(false);
const openModal = () => {
    isShowModal.value = true;
};


const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            register({
                username: ruleForm.userName,
                nickname: ruleForm.nickname,
                password: ruleForm.password
            }).then((res: any) => {
                console.log(res);
            });

        } else {
            console.log('error submit!', fields);
        }
    });
};
defineExpose({ openModal });
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import './LoginModal.less';
</style>