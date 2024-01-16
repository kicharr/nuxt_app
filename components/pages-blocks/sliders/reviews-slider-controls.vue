<script setup>
const swiper = useSwiper();
</script>

<template>
  <div class="slider-controller__wrapper">
    <button @click="swiper.slidePrev()" class="reviews-slider__button reviews-slider__button__prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M26.2083 17H8.5M8.5 17L17 8.5M8.5 17L17 25.5" stroke="#CAFF33" stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </button>
    <button @click="swiper.slideNext()" class="reviews-slider__button reviews-slider__button__next">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M8.50016 17H26.2085M26.2085 17L17.7085 8.5M26.2085 17L17.7085 25.5" stroke="#CAFF33" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">

.reviews-slider__button {
  position: absolute;
  z-index: 4;
  top: calc(50% - .7rem);
  cursor: pointer;

  display: inline-block;
  border-radius: 5.55556rem;
  border: 1px solid $grey15;
  background: $grey11;
  padding: .78rem;
  transition: background .5s ease-in-out;

  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }

  &:is(:hover) {
    background: #181818;
  }
}

@include mobile {
  .slider-controller__wrapper {
    display: flex;
    justify-content: center;
    gap: 1.11rem;
  }

  .reviews-slider__button {
    position: unset;

    padding: .67rem;

    &__prev {
      left: unset;
    }

    &__next {
      right: unset;
    }

    &:is(:hover) {
      background: #181818;
    }
  }
}

</style>