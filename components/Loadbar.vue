<style lang="scss" scoped>
.loadbar-container{
    width: 100%;
    height: 2rem;

    border: 2px solid white;
    padding: 0.5rem;

    .bar{
        width: 0%;
        height: 100%;
        
        
        background: var(--secondary);
    }
}
</style>

<template>
    <div class="loadbar-container">
        <div class="bar" ref="bar"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineEmits } from "vue";
import { gsap } from "gsap";
import { typeWriterEffect } from "~/scripts/typewriter.ts"

const emit = defineEmits(["complete"]);

// Define refs for the bar and button wrapper
const bar = ref<HTMLDivElement | null>(null);


onMounted(() => {
  // Animate the bar using GSAP
    if (bar.value) {
        gsap.to(bar.value, { 
        duration: 3.75, // Duration in seconds
        width: "100%", // Target width
        ease: "power2.out", // Optional easing function
        onComplete() {
            emit("complete");
        }
        });
    }
});
</script>