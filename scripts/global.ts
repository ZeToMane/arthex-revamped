import { ref } from 'vue';

export const firstChoise = ref('');
console.log(firstChoise);

// Mettre à jour la variable globale
export function updateFirstChoise(value: string) {
    firstChoise.value = value;
}

export const secondChoise = ref('');
console.log(secondChoise);

// Mettre à jour thirda variable globale
export function updateSecondChoise(value: string) {
    secondChoise.value = value;
}

export const thirdChoise = ref('');
console.log(thirdChoise);

// Mettre à jour la variable globale
export function updateThirdChoise(value: string) {
    thirdChoise.value = value;
}


export const synthName = ref(0);

// Mettre à jour la variable globale
export function updateSynthName(value: number) {
    synthName.value = value;
}