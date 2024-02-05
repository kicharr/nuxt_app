<script setup>
import {useRecipesStore} from "~/stores/recipes/index.js";

const recipesStore = useRecipesStore();
const windowWidth = window.innerWidth;

const selectedCuisine = ref('');

onBeforeMount(() => {
  recipesStore.fetchAllRecipes();
})
const getCurrentRecipeData = (recipeId) => {
  console.log(recipesStore.recipesList.splice(recipeId, 1))
  return recipesStore.recipesList.splice(recipeId, 1)
}

</script>

<template>
  <div class="page-content container">
    <h1>Recipes</h1>
    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="windowWidth <= 425 ? 1 : 3"
        :loop="true"
        :draggable="true"
        :space-between="50"
        class="swiper-wrapper__slider"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
    >

      <SwiperSlide v-for="recipe in recipesStore?.recipesList" :key="recipe.id">
        <div class="recipes-slide">
          <div class="recipes-slide__preview">
            <NuxtLink :to="`recipes/${recipe?.id}`">
              <img :src="recipe?.image" :alt="recipe?.name">
            </NuxtLink>
          </div>
          <div class="recipes-slide__title">
            <p>{{ recipe?.name }}</p>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

  </div>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 2rem;
}

.recipes-slide {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  &__preview {
    border-radius: 1.525rem;
    overflow: hidden;
  }

  &__title p {
    text-align: center;
    font-size: 1.1rem;
  }
}

.swiper-wrapper__slider {
  margin-bottom: 5rem;
}
</style>