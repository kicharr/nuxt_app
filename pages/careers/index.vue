<script setup>
import {useGeneralStore} from "~/stores/general/index.js";
import {useOpeningStore} from "~/stores/job-openings/index.js";

const generalStore = useGeneralStore();
const openingStore = useOpeningStore();

let isLoader = ref(false);
let productPlan = ref('Individuals');
const questionsAskedLimit = 4;

onBeforeMount(() => {
  generalStore.getQuestionsAsked(questionsAskedLimit);
  generalStore.getReviewsList();
})

const changeLimit = (val) => {
  isLoader.value = true;
  document.body.classList.add('loader-active');
  setTimeout(() => {
    generalStore.getQuestionsAskedSliced(val, disableLoader);
  }, 1000)
}

function disableLoader() {
  isLoader.value = false;
  document.body.classList.remove('loader-active');
}

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
          <h1>Welcome to <span>YourBank</span> <br> Careers!</h1>
          <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to
            fostering a culture of excellence and providing opportunities for professional growth. With a focus on
            innovation, customer service, and integrity, we strive to make a positive impact in the lives of our
            customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
        </div>
        <img class="hero-content__img" src="@/assets/images/careers-page/careers-hero-img.png" alt="">
      </div>
    </section>

    <section class="page-content__section values">
      <div class="page-content__heading values-heading">
        <h2>Our <span>Values</span></h2>
        <p class="page-content__description">
          At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding
          the highest standards of integrity, delivering exceptional service, and embracing innovation. These values
          define our culture and shape the way we work together to achieve our goals.
        </p>
      </div>
      <div class="values-content">
        <div class="values-content__card">
          <span>Integrity</span>
          <p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is
            right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
        </div>
        <div class="values-content__card">
          <span>Customer Centricity</span>
          <p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs,
            providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
        </div>
        <div class="values-content__card">
          <span>Collaboration</span>
          <p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By
            leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater
            success together.</p>
        </div>
        <div class="values-content__card">
          <span>Innovation</span>
          <p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We
            encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the
            future of banking.</p>
        </div>
      </div>
    </section>

    <section class="page-content__section benefits">
      <div class="page-content__heading benefits-heading">
        <h2>Our <span>Benefits</span></h2>
        <p class="page-content__description">
          At YourBank, we value our employees and are dedicated to their well-being and success. We offer a
          comprehensive range of benefits designed to support their personal and professional growth.
        </p>
      </div>
      <div class="benefits-content">
        <div class="benefits-card">
          <div class="benefits-card__heading">
            <img src="@/assets/images/careers-page/benefits-icon-1.svg">
            <p>Competitive Compensation</p>
          </div>
          <p class="benefits-card__description">
            We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank
            believes in rewarding exceptional performance and offering opportunities for financial growth.
          </p>
        </div>
        <div class="benefits-card">
          <div class="benefits-card__heading">
            <img src="@/assets/images/careers-page/benefits-icon-2.svg">
            <p>Health and Wellness</p>
          </div>
          <p class="benefits-card__description">
            We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and
            vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy
            lifestyle.
          </p>
        </div>
        <div class="benefits-card">
          <div class="benefits-card__heading">
            <img src="@/assets/images/careers-page/benefits-icon-3.svg">
            <p>Retirement Planning</p>
          </div>
          <p class="benefits-card__description">
            YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a
            generous employer match to help them build a secure financial foundation for the long term.
          </p>
        </div>
        <div class="benefits-card">
          <div class="benefits-card__heading">
            <img src="@/assets/images/careers-page/benefits-icon-4.svg">
            <p>Work-Life Balance</p>
          </div>
          <p class="benefits-card__description">
            We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work
            arrangements, paid time off, parental leave, and other programs that support employees in managing their
            personal and professional commitments.
          </p>
        </div>
      </div>
    </section>

    <section class="page-content__section openings">
      <div class="page-content__heading openings-heading">
        <h2><span>Job Openings</span></h2>
        <p class="page-content__description">
          Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer
          service. Join our team and be part of shaping a brighter future in the banking industry
        </p>
      </div>

      <div class="openings-content">
        <OpeningCard v-for="job in openingStore?.jobList" :key="job.id" :jobData="job"/>
      </div>

    </section>

    <Loader v-if="isLoader"/>

    <FrequentQuestions @changeCurrentLimit="changeLimit" :newsList="generalStore.questionsAskedList"
                       :limit="questionsAskedLimit"/>

    <AppealRegistration/>
  </main>

</template>

<style scoped lang="scss">
.hero-content {
  background: $grey11 url("@/assets/images/careers-page/careers-hero-bg.png") no-repeat 100% 0;
  border-radius: 1.11rem;
  padding: 2.78rem;

  position: relative;

  @include page-hero__desktop;
}

.values-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.44rem;

  &__card {
    border-left: 1px solid $green60;
    padding-left: 1.67rem;

    span {
      display: inline-block;
      color: $grey30;
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 1.67rem;
    }

    p {
      color: $grey70;
    }
  }
}

.benefits-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5.56rem;
  position: relative;

  &::before {
    position: absolute;
    top: calc(50% - 1rem);
    right: 0;
    z-index: 4;

    content: url("@/assets/images/careers-page/benefits-card-row-line.png");
    width: 100%;
  }
}

.benefits-card {
  padding: 2.78rem;
  position: relative;
  z-index: 2;
  border-radius: 2.7rem 1.1rem;
  border: 1px solid rgba(202, 255, 51, 0.10);
  background-image: url("@/assets/images/careers-page/benefits-card-bg.png");
  background-blend-mode: normal, normal, screen;

  &__heading {
    position: relative;
    z-index: 3;

    display: flex;
    align-items: center;
    gap: 1.11rem;
    margin-bottom: 1.67rem;

    img {
      max-width: 5.4rem;
      width: 100%;
    }

    p {
      color: $white;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  &__description {
    color: $grey70;
  }

  &::before {
    position: absolute;
    top: 0;
    right: 2.78rem;
    z-index: 4;

    content: url("@/assets/images/careers-page/benefits-card-line.png");
    width: 100%;
  }

  &:nth-child(odd) {
    &::before {
      display: none;
    }
  }
}

.openings-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.67rem;
}

@include laptop {
  .hero-content {
    padding: 2.22rem;

    @include page-hero__laptop;
  }

  .values-content {
    gap: 3.33rem;

    &__card {
      padding-left: 1.33rem;

      span {
        font-size: 2.2rem;
        margin-bottom: 1.11rem;
      }

      p {
        font-size: 0.88rem;
      }
    }
  }

  .benefits-content {
    gap: 3.33rem;

    &::before {
      top: calc(50% - 1rem);
      right: 0;
      max-width: 88.6rem;
      overflow: hidden;
    }

  }

  .benefits-card {
    padding: 2.22rem;
    border-radius: 2.2rem .77rem;

    &__heading {
      gap: .78rem;
      margin-bottom: 1.33rem;

      img {
        max-width: 4.2rem;
      }

      p {
        font-size: 1.1rem;
      }
    }

    &__description {
      font-size: 0.88rem;
    }

    &::before {
      right: 1.6rem;
      max-height: 18.6rem;
      height: 100%;
      overflow: hidden;
    }
  }

  .openings-content {
    gap: 1.11rem;
  }
}


@include mobile {
  .hero-content {
    display: flex;
    flex-direction: column-reverse;

    padding: .78rem;

    @include page-hero__mobile;
  }

  .values-content {
    grid-template-columns: repeat(1, 1fr);
    gap: 2.78rem;

    &__card {
      padding-left: 1.11rem;

      span {
        font-size: 1.6rem;
        margin-bottom: .78rem;
      }

      p {
        font-size: 0.77rem;
      }
    }
  }

  .benefits-content {
    grid-template-columns: repeat(1, 1fr);
    gap: 2.67rem;

    &::before {
      display: none;
    }
  }

  .benefits-card {
    padding: 1.33rem;
    border-radius: 2.2rem 2.2rem 0.7rem 0.7rem;

    &__heading {
      gap: .56rem;
      margin-bottom: 1.11rem;

      img {
        max-width: 4rem;
      }

      p {
        font-size: 1rem;
      }
    }

    &__description {
      font-size: 0.77rem;
    }

    &::before {
      top: unset;
      right: .5rem;
      bottom: -18rem;
      z-index: 4;
      transform: rotate(90deg);
    }

    &:nth-child(odd) {
      &::before {
        display: block;
      }
    }

    &:last-child {
      &::before {
        display: none;
      }
    }
  }

  .openings-content {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>