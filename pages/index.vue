<style lang="scss" scoped>
.container{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    .sub-container{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
    }
}

.text-container{
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem 0rem;

    p{
        color: var(--secondary);
        font-size: 1.175em;
    }
}

</style>

<template>
    <Content>
        <div class="container">
            <Loadbar @complete="handleLoadbarComplete" />
            
            <div class="sub-container">
                <Banner />
                <div class="text-container" ref="textContent">
                    <p class="">Nous sommes le 26 mars 2089 à Bordeaux.</p>
                    <p class="">Vous êtes un être artificiel.</p>
                    <p class="">Vous devez passer un examen obligatoire pour mesurer vos capacités à vous adapter à l’espèce humaine.</p>
                </div>
            </div>

            <Button ref="buttonWrapper" to="/login" :hidden="isButtonHidden">
                login
            </Button>
        </div>
    </Content>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { typeWriterEffect } from "/scripts/typewriter.ts"

// Define refs for the bar and button wrapper
const isButtonHidden = ref(true);
const textContent = ref<HTMLElement | null>(null);
const paragraphs = ref<HTMLElement[]>([]);

onMounted(() => {
    if (textContent.value) {
        // Populate paragraphs ref with all <p> elements
        paragraphs.value = Array.from(textContent.value.querySelectorAll("p"));
        // Pass the paragraphs array to the typeWriterEffect function
        typeWriterEffect(paragraphs.value);
    }
});

const handleLoadbarComplete = () => {
    isButtonHidden.value = false;
};
</script>