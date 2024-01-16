<script setup>
import ReviewsSliderControls from "~/components/pages-blocks/sliders/reviews-slider-controls.vue";

const props = defineProps(['slidesData']);

const windowWidth = window.innerWidth;

</script>


<template>
  <div class="swiper-wrapper">
    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="windowWidth <= 425 ? 1 : 3"
        :loop="true"
        :space-between="80"
        :draggable="true"
        class="swiper-wrapper__slider"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
    >
      <SwiperSlide v-for="(slide, index) in slidesData" :key="index" class="slide">
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
      </SwiperSlide>

      <reviews-slider-controls v-if="windowWidth >= 425"/>
    </Swiper>
  </div>
  <reviews-slider-controls v-if="windowWidth <= 425"/>
</template>

<style scoped lang="scss">
.swiper-wrapper {
  animation: showElement 1s ease-in-out alternate;

  &__slider {
    position: relative;
    z-index: 3;
    padding: 0 2.78rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;

      max-width: 30.8rem;
      width: 100%;
      height: 19.3rem;

      background: linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      max-width: 30.8rem;
      width: 100%;
      height: 19.3rem;

      background: linear-gradient(270deg, #191919 10.8%, rgba(25, 25, 25, 0.00) 105.84%);
    }
  }

}

.slide {
  position: relative;
  z-index: 2;

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

}

@include mobile {
  .swiper-wrapper {
    margin-bottom: 1.67rem;
  }

  .swiper-wrapper__slider {
    padding: 0;

    &::before, &::after {
      max-width: 5.44rem;
      height: 15rem;
    }
  }

  .slide {
    border-radius: 0.6rem;
    border: 1px solid $grey15;
    padding: 1.11rem;
  }
}
</style>