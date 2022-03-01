<template>
    <div class="login-container">
        login
    </div>
</template>

<script lang='ts' setup>
import { getLoginInfo } from '@/api/common'
import { onMounted } from '@vue/runtime-core'
onMounted(() => {
    getLoginInfo().then((res) => {
        console.log(res.logo_logo)
    })
})
</script>
