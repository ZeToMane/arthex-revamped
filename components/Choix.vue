<style lang="scss">
.choix-content{
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;

    border: 2px solid var(--primary);
    background-color: var(--primary);


    .choix-text{
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Silkscreen, sans-serif;
        font-size: 1.175rem;
        font-weight: 700;
        text-transform: uppercase;

        padding: 0.5rem;
        border: 2px solid var(--terciary);
        color: var(--terciary);
    }

    .choix{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        padding: 0.5rem;

        overflow: hidden;
    }
}

.hidden{
    opacity: 0;
}
</style>

<template>
    <div class="choix-content" :class="{'hidden': hidden}">
        <p class="choix-text">
            choix
        </p>
        
        <div class="choix " ref="choixElement">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

// Props for the button component
defineProps({
    hidden: {
        type: Boolean,
        default: true, // Whether to hide the button initially
    },
});
</script>
