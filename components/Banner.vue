
<style lang="scss" scoped>
.banner{
    width: 100%;
    height: fit-content;

    border: 2px solid var(--primary);
    padding: 0.5rem;

    img{
        width: 100%;
        height: auto;
        min-height: 200px
    }
}

.type-2{
    //height: 100%;
    img{
        //height: 100%;
        height: 300px;
        object-fit: cover;
    }
}

</style>

<template>
    <template v-if="variant === 'type-1'">
        <div class="banner">
            <img :src="img" alt="">
        </div>
    </template>
    <template v-if="variant === 'type-2'">
        <div class="banner type-2">
            <img :src="img" alt="">
        </div>
    </template>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
    img: {
        type: String,
        default: '/assets/logo.svg'
    },
    variant: {
        type: String,
        default: 'type-1',
    },
})
</script>
