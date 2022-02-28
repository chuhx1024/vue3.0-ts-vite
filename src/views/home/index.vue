<template>
    <div class="home-container">
        home
        {{ $store.state.count }}
        {{ store.state.count }}
    </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'

const store = useStore()
alert(store.state.count)
</script>
