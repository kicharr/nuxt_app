<script setup>
const props = defineProps(['recipeTitle']);
</script>

<template>
  <div class="breadcrumbs__wrapper container">
    <ul class="breadcrumbs__list">
      <li>
        <NuxtLink to="/recipes">Recipes</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link-disabled">{{ recipeTitle }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {

  &__list {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      position: relative;

      &:after {
        content: '→';

        position: absolute;
        top: 0;
        left: 4.3rem;
      }

      &:last-child {
        &:after {
          content: '';
        }
      }
    }


  }

  &__wrapper {
    margin: 1rem 0;
  }

}


.link-disabled {
  color: $grey70;
  cursor: default;
}
</style>