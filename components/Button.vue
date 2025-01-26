<style lang="scss" scoped>
.btn-content{
    width: fit-content;
    height: fit-content;

    .btn-text{
        width: fit-content;
        height: fit-content;

        font-family: Silkscreen, sans-serif;
        font-size: 1.175rem;
        font-weight: 700;
        text-transform: uppercase;

        padding: 0.5rem;
        border: 2px solid var(--primary);
    }
}


.type-1{
    width: 100%;
    background-color: var(--terciary);

    .btn-text{
        width: 100%;
        text-align: center;
        color: var(--primary);
    }
}

.type-2{
    width: 100%;

    border: 2px solid var(--primary);
    background-color: var(--primary);

    .btn-text{
        width: 100%;
        text-align: center;

        border: 2px solid var(--terciary);
        color: var(--terciary);
    }
}

.type-4{
    width: 100%;

    border: 2px solid var(--primary);
    background-color: var(--primary);

    .btn-text{
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 2px solid var(--terciary);
        color: var(--terciary);

        img{
            width: auto;
            height: 100%;
        }
    }
}

/* .type-4.hidden{
    display: none;
} */

.hidden{
    //opacity: 0;
    display: none;
}
</style>

<template>
    <template v-if="variant === 'type-1'">
        <NuxtLink :to="to" class="btn-content type-1" :class="{ 'hidden': hidden }">
            <p class="btn-text">
                <slot />
            </p>
        </NuxtLink>
    </template>

    <template v-if="variant === 'type-2'">
        <NuxtLink class="btn-content type-2" :class="{ 'hidden': hidden }">
            <button class="btn-text" type="submit">
                <slot />
            </button>
        </NuxtLink>
    </template>

    <template v-if="variant === 'type-3'">
        <NuxtLink :to="to" class="btn-content type-2" :class="{ 'hidden': hidden }">
            <p class="btn-text">
                <slot />
            </p>
        </NuxtLink>
    </template>

    <template v-if="variant === 'type-4'">
        <NuxtLink :to="to" class="btn-content type-4" :class="{ 'hidden': hidden }">
            <p class="btn-text">
                <slot />
                <img src="/assets/arrow.svg" alt="">
            </p>
        </NuxtLink>
    </template>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

// Props for the button component
defineProps({
to: {
    type: String,
    required: true, // The destination route (e.g., "/login")
},
hidden: {
    type: Boolean,
    default: true, // Whether to hide the button initially
},
variant: {
    type: String,
    default: 'type-1'
}
});
</script>

