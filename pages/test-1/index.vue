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
}

h1{
    width: 100%;

    color: var(--secondary);
    letter-spacing: .1rem;
}

</style>

<template>
    <TopHead />
    <Content>
        <div class="container">
            <div class="sub-container">
                <h1>Test N°1 : </h1>
                <div class="text-container" ref="textContent">
                    <p>Vous devrez <span>localiser le tableau</span> décrit et affiché à l'écran.</p>

                    <p>Une fois sur place, <span>imprégnez-vous</span> du tableau et <span>sélectionnez</span> l'émotion qui en ressort.</p>
                </div>
            </div>
        </div>
    </Content>
    <Button ref="buttonWrapper" variant="type-4" to="/test-1/first" :hidden="false">
        continuer
    </Button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { typeWriterEffect } from "/scripts/typewriter.ts"
import { synthName } from "/scripts/global.ts"

// Define refs for the bar and button wrapper
const isButtonHidden = ref(true);
const textContent = ref<HTMLElement | null>(null);
const paragraphs = ref<HTMLElement[]>([]);

onMounted(() => {
    if (textContent.value) {
        // Populate paragraphs ref with all <p> elements
        paragraphs.value = Array.from(textContent.value.querySelectorAll("p"));
        // Pass the paragraphs array to the typeWriterEffect function
        typeWriterEffect(paragraphs.value, () => {
            console.log("Typewriter effect completed!"); // Debug message
            isButtonHidden.value = false; // Show the button
        });
    }
});
</script>