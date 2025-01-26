<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    .sub-container{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
    }
    .banner-container{
        width: 100%;
        
        flex: 0 0 30%;

        border: 2px solid var(--primary);
        padding: 0.5rem;

        background-image: url("/assets/img/Le Miracle de saint Just.webp");
        background-size: cover;
        background-position: center;
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
            <div class="banner-container">
            </div>
            <div class="sub-container" ref="subElement">
                <div class="text-container" ref="textContent">
                    <p>Vous avez trouvé l’oeuvre !</p>

                    <p>Maintenant , veuillez <span>sélectionner</span> l’émotion correspondante. </p>
                </div>
            </div>
            <Choix :hidden="isButtonHidden">
                <Button variant="type-1" :hidden="false">
                    horreur
                </Button>
                <Button variant="type-1" :hidden="false">
                    compassion
                </Button>
                <Button variant="type-1" :hidden="false">
                    confusion
                </Button>
            </Choix>
        </div>
    </Content>
    <Button ref="buttonWrapper" variant="type-4" to="/login" :hidden="false">
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
const subElement = ref<HTMLElement | null>(null);
const paragraphs = ref<HTMLElement[]>([]);
const images: String[] = ['/assets/img/Le Martyre de saint Georges.webp','/assets/img/Le Martyre de saint Laurent.webp','/assets/img/Le Miracle de saint Just.webp'];
const imgSrc = ref<String>('/assets/img/Le Martyre de saint Georges.webp');
let imageIndex = 1

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