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
                <h1>Examen N°E48 : </h1>
                <div class="text-container" ref="textContent">
                    <p><span>Synthetic KF<span>{{ synthName }}</span></span>,</p>

                    <p>Bienvenue sur notre plateforme d'évaluation semestrielle.</p>

                    <p>Votre mission est claire : <span>comprendre</span>, <span>décrire</span> et <span>créer</span>.</p>

                    <p>Vous devez <span>assimiler</span> les fondamentaux de l'art baroque, <span>identifier</span> les émotions transmises par les œuvres qui vous entourent, et <span>exprimer</span> votre vision d’une émotion.</p>

                    <p>Soyez attentif, chaque détail compte.</p> 

                    <p>Nous vous observons, <span>KF<span>{{ synthName }}</span></span>.</p>
                </div>
            </div>

            <Button ref="buttonWrapper" variant="type-3" to="/comprendre" :hidden="isButtonHidden">
                commencer
            </Button>
        </div>
    </Content>
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

const handleLoadbarComplete = () => {
    isButtonHidden.value = false;
};
</script>