<script setup>

const props = defineProps(['slidesData']);

const changeCurrentSlides = (val) => {
  if (val === 'next') {
    console.log(val)
  } else {
    console.log(val)
  }
}

</script>


<template>
    <div class="reviews-slider">
      <button @click="changeCurrentSlides('prev')" class="reviews-slider__button reviews-slider__button__prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M26.2083 17H8.5M8.5 17L17 8.5M8.5 17L17 25.5" stroke="#CAFF33" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>

      <div v-for="slide in slidesData" class="slide slide__active">
          <div class="slide__heading">
            <span class="slide__heading__line"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                  d="M6.77735 28.5883L6.7764 28.5911C5.59498 32.0841 5.00049 35.4598 5.00049 38.7158V47.8238C5.00049 49.2045 6.11978 50.3238 7.50049 50.3238H18.7694C20.1501 50.3238 21.2694 49.2045 21.2694 47.8238L21.2694 38.6069L21.2693 38.6027C21.2345 34.4487 21.8968 30.6661 23.2485 27.2484C24.41 24.3556 25.8002 21.5615 27.4193 18.8658C28.1143 17.7087 27.8102 16.1863 26.6697 15.4264L20.643 11.4104C19.7279 10.8006 18.4984 10.8491 17.6652 11.6089C15.4942 13.5883 13.5102 15.9257 11.7118 18.6179L11.7111 18.6189C9.63778 21.7397 7.99299 25.0631 6.77735 28.5883ZM33.6569 28.5883L33.656 28.5911C32.4745 32.0841 31.8801 35.4598 31.8801 38.7158V47.8238C31.8801 49.2045 32.9993 50.3238 34.3801 50.3238H45.6489C47.0296 50.3238 48.1489 49.2045 48.1489 47.8238L48.1489 38.6069L48.1489 38.6027C48.114 34.4489 48.7763 30.6664 50.1279 27.2488C51.2895 24.3559 52.6797 21.5616 54.2988 18.8658C54.9938 17.7087 54.6898 16.1863 53.5493 15.4264L47.5226 11.4104C46.6074 10.8006 45.378 10.8491 44.5447 11.6089C42.3738 13.5883 40.3898 15.9257 38.5914 18.6179L38.5907 18.6189C36.5173 21.7397 34.8726 25.0631 33.6569 28.5883Z"
                  fill="url(#paint0_linear_11_89096)" stroke="#CAFF33"/>
              <defs>
                <linearGradient id="paint0_linear_11_89096" x1="30.2064" y1="11.0002" x2="30.2064" y2="49.8238"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CAFF33"/>
                  <stop offset="1" stop-color="#191919"/>
                </linearGradient>
              </defs>
            </svg>
            <span class="slide__heading__line"></span>
          </div>

        <div class="slide__content">
          <p class="slide__content__text">
            {{ slide?.body }}
          </p>
          <span class="slide__content__name">
            {{ slide?.user?.username }}
          </span>
        </div>
      </div>

      <button @click="changeCurrentSlides('next')" class="reviews-slider__button reviews-slider__button__next">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M8.50016 17H26.2085M26.2085 17L17.7085 8.5M26.2085 17L17.7085 25.5" stroke="#CAFF33" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
</template>

<style scoped lang="scss">
.reviews-slider {
  display: flex;
  justify-content: center;
  gap: 4.44rem;
  overflow-x: hidden;
  position: relative;

  &__button {
    position: absolute;
    top: calc(50% - .7rem);

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

  .slide {
    max-width: 22.4rem;
    width: 100%;
    flex-shrink: 0;
    position: relative;

    &__heading {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.11rem;
      margin-bottom: 2.78rem;

      &__line {
        display: inline-block;

        max-width: 8.4rem;
        width: 100%;
        height: 0.05rem;

        background: #262626;
      }
    }

    &__content {
      text-align: center;

      &__text {
        font-weight: 400;
        margin-bottom: 2.78rem;
      }

      &__name {
        color: $green60;
        font-weight: 500;
      }
    }

    &::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      max-width: 30.8rem;
      width: 100%;

      height: 19.3rem;
      background: linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, $grey10 105.84%);
    }

    &::after {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      max-width: 30.8rem;
      width: 100%;

      height: 19.3rem;
      background: linear-gradient(270deg, $grey10 10.8%, rgba(25, 25, 25, 0.00) 105.84%);
    }

    &__active {

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }

  }

}
</style>