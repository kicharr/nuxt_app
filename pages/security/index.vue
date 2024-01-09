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
          <h1>Your Security is Our <br> <span>Top Priority</span></h1>
          <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust
            security measures and advanced technologies to protect your personal and financial data. Rest assured that
            when you bank with us, your security is our utmost priority.</p>
        </div>
        <img class="hero-content__img" src="@/assets/images/security-page/security-hero-bg.png">
      </div>
    </section>

    <section class="page-content__section protect-block">
      <div class="page-content__heading protect-heading">
        <h2>How We <span>Protect You</span></h2>
        <p class="page-content__description">
          At YourBank, we prioritize the security and confidentiality of your financial information. Our
          state-of-the-art encryption technology and stringent data protection measures ensure your assets and
          transactions are safeguarded at all times
        </p>
      </div>
      <div class="protect-content">
        <div class="protect-content__card">
          <div class="protect-card__heading">
            <img src="@/assets/images/security-page/protect-icon-1.svg">
            <p>Secure Online Banking Platform</p>
          </div>
          <p class="protect-card__description">
            Our online banking platform is built with multiple layers of security to safeguard your information. We
            utilize industry-standard encryption protocols to ensure that your data remains confidential and protected
            during transmission.
          </p>
        </div>
        <div class="protect-content__card">
          <div class="protect-card__heading">
            <img src="@/assets/images/security-page/protect-icon-2.svg">
            <p>Multi-Factor Authentication</p>
          </div>
          <p class="protect-card__description">
            To enhance the security of your online banking experience, we employ multi-factor authentication. This
            additional layer of security requires you to provide multiple pieces of identification, such as a password
            and a one-time verification code, to access your account.
          </p>
        </div>
        <div class="protect-content__card">
          <div class="protect-card__heading">
            <img src="@/assets/images/security-page/protect-icon-3.svg">
            <p>Fraud Monitoring</p>
          </div>
          <p class="protect-card__description">
            We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious
            activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions,
            providing you with peace of mind.
          </p>
        </div>
        <div class="protect-content__card">
          <div class="protect-card__heading">
            <img src="@/assets/images/security-page/protect-icon-4.svg">
            <p>Secure Mobile Banking</p>
          </div>
          <p class="protect-card__description">
            Our mobile banking app is designed with the same level of security as our online banking platform. You can
            confidently access your accounts, make transactions, and manage your finances on the go, knowing that your
            information is protected.
          </p>
        </div>
      </div>
    </section>

    <Loader v-if="isLoader"/>
    <FrequentQuestions @changeCurrentLimit="changeLimit" :newsList="generalStore.questionsAskedList"
                       :limit="questionsAskedLimit"/>
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

.protect-content {
  display: grid;
  gap: 1.67rem;
  border-radius: 2.7rem 2.7rem 1.1rem 1.1rem;
  grid-template-columns: repeat(2, 1fr);
  background: url("@/assets/images/security-page/protect-cards-wrapper__bg.png") no-repeat 100% 0;
  padding: 4.58rem 5.17rem;

  &__card {
    padding: 2.78rem;
    z-index: 2;
    background-image: url("@/assets/images/careers-page/benefits-card-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.1111rem;

    background-blend-mode: normal, normal, screen;
  }

  .protect-card {

    &__heading {
      display: flex;
      align-items: center;
      gap: 1.11rem;
      margin-bottom: 1.33rem;

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

  .protect-content {
    gap: 1.11rem;
    padding: 3.44rem 4.17rem;

    &__card {
      padding: 2.22rem;
    }

    .protect-card {

      &__heading {
        gap: .78rem;
        margin-bottom: 1.11rem;

        img {
          max-width: 4.2rem;
        }

        p {
          font-size: 1.1rem;
        }
      }

      &__description {
        font-size: 0.8rem;
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

  .protect-content {
    gap: 1.11rem;
    grid-template-columns: repeat(1, 1fr);
    background: none;
    padding: 0;

    &__card {
      padding: 1.33rem;
    }

    .protect-card {

      &__heading {
        margin-bottom: 1rem;

        img {
          max-width: 3.7rem;
        }

        p {
          font-size: 1rem;
        }
      }

      &__description {
        font-size: 0.7rem;
      }
    }


  }
}
</style>