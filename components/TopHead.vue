
<style lang="scss" scoped>
.head{
    width: 100%;
    display: flex;
    align-items: center;

    border: 1px solid var(--primary);
    border-bottom: 0;

    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;

        border-right: 1px solid #fff;
        padding: 0 1rem;
    }

    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-grow: 1;
        gap: 1rem;

        padding: 1rem;

        p{
            color: var(--secondary);
            letter-spacing: 0;
        }

        h2{
            color: var(--secondary);
            text-align: right;
            font-style: italic;
        }
    }
}
</style>

<template>
    <div class="head">
        <div class="logo">
            <img src="/assets/logo.svg" alt="">
        </div>
        <div class="info">
            <p>v0.4.5.5 - PIcorp™</p>
            <h2>/Synthetic KF<span>{{ synthName }}</span>/</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { synthName } from "/scripts/global.ts"

</script>
