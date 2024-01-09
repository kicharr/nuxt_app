<script setup>

import {useReleasesStore} from "~/stores/press-releases/index.js";

const releasesStore = useReleasesStore();

definePageMeta({
  layout: "page-layout",
  middleware: 'auth',
})
</script>

<template>
  <main class="page-content container">
    <section class="page-content__section hero-block">
      <div class="hero-content">
        <div class="hero-content__title">
          <span>Welcome to YourBank</span>
          <h1>Where Banking Meets <br> <span>Excellence!</span></h1>
          <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that
            empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial
            institution, we are committed to delivering exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking
            experience for our valued customers. Join us on this exciting journey and discover a new level of banking
            excellence.</p>
        </div>
        <img class="hero-content__img" src="@/assets/images/about-page/about-hero-bg.png">
      </div>
    </section>

    <section class="page-content__section mission-block">
      <div class="page-content__heading mission-heading">
        <h2><span>Mission & Vision</span></h2>
        <p class="page-content__description">
          We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating
          a brighter financial future for individuals and businesses while maintaining a strong commitment to customer
          satisfaction and community development
        </p>
      </div>

      <div class="mission-content">
        <div class="mission-content__row">
          <img src="@/assets/images/about-page/mission-img-1.png" alt="Mission image 1">
          <div class="mission-card">
            <p class="mission-card__title">Mission</p>
            <p class="mission-card__description">At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative banking solutions that cater to their unique
              needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build
              strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them
              navigate their financial journey and realize their dreams.</p>
          </div>
        </div>

        <div class="mission-content__row">
          <div class="mission-card">
            <p class="mission-card__title">Vision</p>
            <p class="mission-card__description">Our vision at YourBank is to redefine banking by creating a seamless
              and personalized experience for our customers. We envision a future where banking is accessible,
              transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we
              strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our unwavering commitment to excellence,
              trust, and customer satisfaction.</p>
          </div>
          <img src="@/assets/images/about-page/mission-img-2.png" alt="Mission image 2">
        </div>
      </div>
    </section>

    <section class="page-content__section releases-block">
      <div class="page-content__heading releases-heading">
        <h2><span>Press Releases</span></h2>
        <p class="page-content__description">
          Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
        </p>
      </div>
      <div class="releases-content">
        <ReleaseCard v-for="(release, index) in releasesStore?.releasesList" :key="index" :realiseData="release"/>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.hero-content {
  background: $grey11 url("@/assets/images/careers-page/careers-hero-bg.png") no-repeat 100% 0;
  border-radius: 1.11rem;
  padding: 2.78rem;

  position: relative;

  span {
    font-size: 1.11rem;
  }

  @include page-hero__desktop;
}

.releases-content {
  @include default-grid;
}

.mission-content {
  &__row {
    display: flex;
    align-items: center;

    .mission-card {

      &:nth-child(odd) {
        border-right: 1px solid $green60;
        padding-right: 2.78rem;
      }

      &:nth-child(even) {
        border-left: 1px solid $green60;
        padding-left: 2.78rem;
      }

      &__title {
        font-size: 2.1rem;
        font-weight: 500;
        margin-bottom: .78rem;
      }

      &__description {
        color: $grey70;
      }
    }

    img {
      max-width: 36.8rem;
      width: 100%;
    }
  }
}

@include laptop {
  .hero-content {
    padding: 2.22rem;

    span {
      font-size: 1rem;
    }

    @include page-hero__laptop;
  }

  .mission-content {
    &__row {
      .mission-card {

        &:nth-child(odd) {
          padding-right: 2.22rem;
        }

        &:nth-child(even) {
          padding-left: 2.22rem;
        }

        &__title {
          font-size: 1.7rem;
          margin-bottom: .56rem;
        }

        &__description {
          font-size: 0.88rem;
        }
      }

      img {
        max-width: 30rem;
      }
    }
  }
}

@include mobile {
  .hero-content {
    display: flex;
    flex-direction: column-reverse;

    padding: .78rem;

    span {
      font-size: 0.7rem;
      text-align: center;
    }

    @include page-hero__mobile;
  }

  .mission-content {
    display: flex;
    flex-direction: column;
    gap: 2.78rem;

    &__row {
      display: flex;
      flex-direction: column;

      &:nth-child(even) {
        flex-direction: column-reverse;
      }

      &:nth-child(odd) {
        flex-direction: column;
      }

      .mission-card {
        border-top: 1px solid $green60;
        padding-top: 1.67rem;
        text-align: center;

        &:nth-child(odd) {
          border-right: 0;
          padding-right: 0;
        }

        &:nth-child(even) {
          border-left: 0;
          padding-left: 0;
        }

        &__title {
          font-size: 1.4rem;
        }

        &__description {
          font-size: 0.77rem;
        }
      }

      img {
        max-width: 100%;
      }
    }
  }
}
</style>