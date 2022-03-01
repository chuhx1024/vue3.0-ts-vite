<template>
    <div class="home-container">
        home
        {{ $store.state.count }}
        {{ store.state.count }}
        <p class="desc">
            我是描述
        </p>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from '@/store'

const store = useStore()
// alert(store.state.count)

</script>
<style lang="scss" scoped>
.home-container {
    color: $injectedColor;
    .desc {
        color: yellow;
    }
}
</style>
