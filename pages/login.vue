<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.form-container{
  display: flex;
  width: 100%;
  
}

span{
  color: var(--secondary);
}

</style>

<template>
  <Content>
    <div class="container">
      <Banner />
      <div class="form-container">
          <form ref="formElement">
              <label for="">Entrez votre numéro de série à <span>4 chiffres</span></label>
              <input type="text" id="inputField" name="inputField"  placeholder="Ex : 4565" pattern="[0-9]{4}" maxlength="4" required ref="inputElement">
              <!-- <div class="btn-type-1">
                  <button class="btn-content" type="submit">connexion</button>
              </div> -->
              <Button variant="type-2" :hidden="false">
                connexion
              </Button>
          </form>
      </div>
    </div>
  </Content>
</template>

<script lang="ts" setup>
import { ref, onMonted } from "vue";
import { synthName, updateSynthName } from "/scripts/global.ts"

const formElement = ref<HTMLElement | null>(null);
const inputElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if(formElement.value){
    formElement.value.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        // Get the value of the input field
        const inputData = inputElement.value;
        updateSynthName(inputData.value); 
        navigateTo('/accueil')
    });
  } else{
    event.preventDefault(); 
  }
});


</script>

