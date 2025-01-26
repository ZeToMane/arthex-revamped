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
                <Banner :img="imgSrc" variant="type-2" />
                <div class="text-container" ref="textContent">
                    <h3>Voici quelques informations qu’il vous faut assimiler :</h3>

                    <p>Le baroque émerge en <span>Italie</span> au début du <span>17e siècle</span>. Il touche peinture, sculpture, architecture et musique.</p>

                    <p>Il vise à intensifier les <span>émotions</span> et à transmettre des <span>messages</span>. </p>

                    <p>Caractérisé par des expressions dramatiques, des jeux de lumière et des détails, il a pour but d’<span>émouvoir les spectateurs</span>.</p>
                </div>
            </div>
        </div>
    </Content>
    <Button ref="buttonWrapper" variant="type-4" to="/test-1" :hidden="false">
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

    function changeBackground() {
        imgSrc.value = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
    }
    setInterval(changeBackground, 1000);
});
</script>