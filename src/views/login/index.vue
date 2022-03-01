<template>
    <div class="login-container">
        login
        <el-button>Default</el-button>
        <el-button type="primary">
            Primary
        </el-button>
        <el-button type="success">
            Success
        </el-button>
        <el-button type="info">
            Info
        </el-button>
        <el-button type="warning">
            Warning
        </el-button>
        <el-button type="danger">
            Danger
        </el-button>
        <el-button>中文</el-button>
        <el-time-picker placeholder="占位" />
        <el-date-picker
            type="date"
        />
    </div>
</template>

<script lang='ts' setup>
import { getLoginInfo } from '@/api0/common'
import { onMounted } from '@vue/runtime-core'
onMounted(() => {
    getLoginInfo().then((res) => {
        console.log(res.logo_logo)
    })
})
</script>
