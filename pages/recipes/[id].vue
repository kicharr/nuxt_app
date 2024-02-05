<script setup>
import {useRecipesStore} from "~/stores/recipes/index.js";
import PhotoZoomModal from "~/components/pages-blocks/photo-zoom-modal.vue";

const recipesStore = useRecipesStore();
const route = useRoute();
let showPhotoModal = ref(false);

onBeforeMount(() => {
  recipesStore.getDefiniteRecipe(route.params.id);
})

function changePhotoView() {
  showPhotoModal.value = !showPhotoModal.value
}

</script>

<template>
  <div class="recipe-card__wrapper container">
    <recipes-breadcrumbs :recipeTitle="recipesStore.recipeItem?.name"/>
    <photo-zoom-modal @changePhotoView="changePhotoView" v-if="showPhotoModal"
                      :currentPhotoData="{'path':recipesStore.recipeItem?.image, 'title':recipesStore.recipeItem?.name}"/>
    <div class="recipe-card">
      <div class="recipe-card__preview">
        <button @click="changePhotoView">
          <img :src="recipesStore.recipeItem?.image" :alt="recipesStore.recipeItem?.name">
        </button>
      </div>

      <div class="recipe-card__content">

        <div class="recipe-card__title">
          <h1>{{ recipesStore.recipeItem?.name }}</h1>

          <strong>
            {{ recipesStore.recipeItem?.cuisine }}
          </strong>
        </div>
        <h3 class="recipe-card__subtitle">Tags:</h3>
        <div class="recipe-card__tags">
          <div v-for="(tag, index) in recipesStore.recipeItem.tags" :key="index" class="tag-item">
            {{ tag }}
          </div>

          <div class="tag-item">
            {{ recipesStore.recipeItem?.difficulty }}
          </div>
        </div>


        <div class="recipe-card__info">
          <div class="list-info__wrapper">
            <h3>Ingredients</h3>
            <ol class="list-info recipe-card__ingredients">
              <li v-for="(item, index) in recipesStore.recipeItem?.ingredients" :key="index"> {{ item }}</li>
            </ol>
          </div>

          <div class="list-info__wrapper">
            <h3>Instructions</h3>
            <ul class="list-info recipe-card__instructions">
              <li v-for="(item, index) in recipesStore.recipeItem?.instructions" :key="index"> {{ item }}</li>
            </ul>
          </div>


        </div>


      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.recipe-card {
  display: flex;
  gap: 3rem;
  padding: 2rem;
  border: .225rem solid $grey15;
  border-radius: .525rem;


  &__preview {
    max-width: 15rem;
    width: 100%;
  }

  &__subtitle {
    margin-bottom: 1rem;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.67rem;
  }

  &__content {
    width: 100%;
  }

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__ingredients {
    display: flex;
    flex-direction: column;
    list-style-type: decimal;
  }

  &__instructions {
    list-style-type: decimal;
  }
}

.list-info__wrapper h3 {
  margin-bottom: 1rem;
}

.list-info {
  padding-left: 1rem;
}

.recipe-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: .56rem;
  margin-bottom: 1.67rem;
}

.tag-item {
  border-radius: 3.78rem;
  border: 1px solid $grey15;
  background: $grey10;
  padding: .44rem .89rem;
}


@include mobile {
  .recipe-card {
    flex-direction: column;
    padding: .8rem;
    gap: 1rem;

    &__preview {
      max-width: 100%;
      border-radius: .5rem;
      overflow: hidden;
    }

    &__title {
      flex-direction: column;
      text-align: center;

      h1 {
        font-size: 1.5rem;
      }
    }

    &__info {
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>