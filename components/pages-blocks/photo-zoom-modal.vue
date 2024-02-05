<script setup>
import {closeModalClick} from "~/utils/utils.js";

const props = defineProps(['currentPhotoData']);
const emit = defineEmits(['changePhotoView']);

onBeforeMount(() => {
  document.addEventListener('keydown', checkCurrentKey);
})

onUnmounted(() => {
  document.removeEventListener('keydown', checkCurrentKey);
})

const changePhotoView = () => emit('changePhotoView');
const checkCurrentKey = (e) => e.key === 'Escape' ? changePhotoView() : null;
const checkUserClickPosition = (e) => closeModalClick(e, '.photo') ? changePhotoView() : null;

</script>

<template>
  <div @click="checkUserClickPosition" class="photo-wrapper">
    <div class="photo">
      <button @click="changePhotoView" class="btn btn__close">Закрыть</button>
      <img class="photo__img" :src="currentPhotoData.path" :alt="currentPhotoData.name">
    </div>
  </div>

</template>

<style scoped lang="scss">
body {
  position: relative;
  z-index: 3;
}

.photo-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, .5);
}

.photo {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: calc(50% - 25rem);
  left: calc(50% - 20rem);
  animation: showElement .5s ease-in-out alternate;

  width: fit-content;
  background-color: $grey10;
  box-shadow: 0 0 .5rem #6b6b6b;


  border-radius: .5rem;
  padding: 1rem;

  &__img {
    border-radius: .5rem;
    max-width: 40rem;
    width: 100%;
    height: 100%;
  }
}

.btn {
  margin: 0 0 1rem auto;

  &__close {
    color: $grey70;
  }
}
</style>