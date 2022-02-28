<template>
    <div class="home-container">
        home
        {{ $store.state.count }}
        {{ store.state.count }}
    </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { key } from '../../store'

const store = useStore(key)
alert(store.state.count)

</script>
