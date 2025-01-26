<style lang="scss" scoped>
.content{
    width: 100%;
    height: auto;
    //min-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;

    border: 1px solid var(--primary);
    padding: 2rem 1rem;

    overflow-y: scroll;
}
</style>

<template>
    <div class="content">
        <slot />
    </div>
</template>

<script lang="ts" setup>

</script>
