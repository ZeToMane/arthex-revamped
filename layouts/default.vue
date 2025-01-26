<style lang="scss" scoped>
.main-container {
    width: 100%;
    height: 100vh;

    border: 2px solid var(--primary);
    padding: 1rem;
    background-color: var(--terciary);

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<template>
    <main>
        <div class="main-container">
            <slot />
        </div>
    </main>
</template>

<script setup>


</script>

