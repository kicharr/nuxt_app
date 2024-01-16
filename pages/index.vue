<script setup>

// Imports

import {useGeneralStore} from "~/stores/general/index.js";
import ReviewsSlider from "~/components/pages-blocks/sliders/reviews-slider.vue";

// State

const generalStore = useGeneralStore();
let productPlan = ref('Individuals');
let featuresTab = ref('online');
let isLoader = ref(false);

const questionsAskedLimit = 4

// Hooks

onBeforeMount(() => {
  generalStore.getQuestionsAsked(questionsAskedLimit);
  generalStore.getReviewsList();
})

// Functions

const changeLimit = (val) => {
  isLoader.value = true;
  document.body.classList.add('loader-active');
  setTimeout(() => {
    generalStore.getQuestionsAskedSliced(val, disableLoader);
  }, 500)
}
const changeCurrentPlanProducts = (val) => productPlan.value = val;
function disableLoader() {
  isLoader.value = false;
  document.body.classList.remove('loader-active');
}

// Page setup

definePageMeta({
  layout: "default",
  middleware: 'auth',
})
</script>

<template>
  <Loader v-if="isLoader"/>
  <main class="page-content container">
    <section class="page-content__section page-content__hero">
      <div class="hero-content">
        <div class="hero-content__tip">
          <div class="hero-content__tip-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.60288 3.79876C9.42705 2.85093 10.6433 2.25 12 2.25C13.3566 2.25 14.5728 2.85087 15.397 3.79861C16.6501 3.71106 17.9352 4.14616 18.8946 5.10557C19.854 6.06498 20.2891 7.35009 20.2016 8.60319C21.1492 9.42735 21.75 10.6435 21.75 12C21.75 13.3568 21.149 14.5731 20.2011 15.3973C20.2884 16.6502 19.8533 17.935 18.8941 18.8943C17.9348 19.8535 16.65 20.2886 15.3971 20.2013C14.5729 21.1491 13.3567 21.75 12 21.75C10.6434 21.75 9.4272 21.1491 8.60304 20.2014C7.34992 20.289 6.0648 19.8539 5.10537 18.8945C4.14596 17.935 3.71086 16.6499 3.79841 15.3968C2.85079 14.5726 2.25 13.3565 2.25 12C2.25 10.6434 2.85085 9.42723 3.79855 8.60306C3.7111 7.35005 4.14621 6.06507 5.10554 5.10574C6.06488 4.1464 7.34987 3.71129 8.60288 3.79876ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z"
                    fill="#CAFF33"/>
            </svg>
          </div>
          <p class="hero-content__tip-text">
            No LLC Required, No Credit Check.
          </p>
        </div>
        <div class="hero-content__title">
          <h1>
            Welcome to YourBank <br>
            Empowering Your
            <span>Financial <br> Journey</span>
          </h1>
          <p class="hero-content__title__description">
            At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and
            businesses to achieve their financial goals. We are committed to delivering personalized and innovative
            services that prioritize our customers' needs.
          </p>
        </div>
        <button class="btn btn__main btn__main__hero">Open Account</button>
      </div>
      <div class="hero__preview">
        <img class="hero__preview-img" src="@/assets/images/home-page/hero.png" alt="Hero image">
        <img class="hero__preview__arrows" src="@/assets/images/abstracts/abstract-hero.svg" alt="">
      </div>
    </section>
    <section class="page-content__section page-content__products">
      <div class="products-content">
        <div class="products-content__heading">
          <div class="products-content__title">
            <h2>Our <span>Products</span></h2>
            <p class="products-content__title__description">
              Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your
              <br>
              unique financial needs and aspirations
            </p>
          </div>
          <SwitchTabsPlan :currentPlan="productPlan" @changePlan="changeCurrentPlanProducts"/>
        </div>
        <div v-if="productPlan === 'Individuals'" class="products-content__cards">
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-1.svg" alt="Accounts">
            <h3 class="product-card__title">Checking Accounts</h3>
            <p class="product-card__description">Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and mobile banking, debit cards, and free
              ATM access.</p>
          </div>
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-2.svg" alt="Accounts">
            <h3 class="product-card__title">Savings Accounts</h3>
            <p class="product-card__description">Build your savings with our competitive interest rates and flexible
              savings account options. Whether you're saving for a specific goal or want to grow your wealth over time,
              we have the right account for you.</p>
          </div>
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-3.svg" alt="Accounts">
            <h3 class="product-card__title">Loans and Mortgages</h3>
            <p class="product-card__description">Realize your dreams with our flexible loan and mortgage options. From
              personal loans to home mortgages, our experienced loan officers are here to guide you through the
              application process and help you secure the funds you need.</p>
          </div>
        </div>
        <div v-if="productPlan === 'Businesses'" class="products-content__cards">
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-3.svg" alt="Accounts">
            <h3 class="product-card__title">Loans and Mortgages</h3>
            <p class="product-card__description">Realize your dreams with our flexible loan and mortgage options. From
              personal loans to home mortgages, our experienced loan officers are here to guide you through the
              application process and help you secure the funds you need.</p>
          </div>
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-1.svg" alt="Accounts">
            <h3 class="product-card__title">Checking Accounts</h3>
            <p class="product-card__description">Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and mobile banking, debit cards, and free
              ATM access.</p>
          </div>
          <div class="product-card">
            <img class="product-card__icon" src="@/assets/images/home-page/products-icon-2.svg" alt="Accounts">
            <h3 class="product-card__title">Savings Accounts</h3>
            <p class="product-card__description">Build your savings with our competitive interest rates and flexible
              savings account options. Whether you're saving for a specific goal or want to grow your wealth over time,
              we have the right account for you.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="page-content__section page-content__cases">
      <div class="cases-content">
        <div class="page-content__heading cases-content__heading">
          <h2><span>Use Cases</span></h2>
          <p class="page-content__description cases-content__title__description">
            At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of
            financial solutions
          </p>
        </div>
        <div class="cases-content__content">
          <div class="cases-content__row cases-content__individuals">
            <div class="icons-boxes">
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-1.svg" alt="Cases 1">
                <h4>Managing Personal Finances</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-2.svg" alt="Cases 2">
                <h4>Saving for the Future</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-3.svg" alt="Cases 3">
                <h4>Homeownership</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-4.svg" alt="Cases 4">
                <h4>Education Funding</h4>
              </div>
            </div>
            <div class="cases-info">
              <h3 class="cases-info__title">For Individuals</h3>
              <p class="cases-info__description">For individuals, our mortgage services pave the way to homeownership,
                and our flexible personal loans provide vital support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for our customers</p>

              <div class="cases-info__list">
                <div class="cases-info__list__item">
                  <span>78%</span>
                  <p>Secure Retirement Planning</p>
                </div>
                <div class="cases-info__list__item">
                  <span>63%</span>
                  <p>Manageable Debt Consolidation</p>
                </div>
                <div class="cases-info__list__item">
                  <span>91%</span>
                  <p>Reducing financial burdens</p>
                </div>
              </div>

              <NuxtLink class="cases-info__link btn__main" to="/">Learn more</NuxtLink>
            </div>
          </div>
          <div class="cases-content__row cases-content__business">
            <div class="cases-info">
              <h3 class="cases-info__title">For Business</h3>
              <p class="cases-info__description">For individuals, our mortgage services pave the way to homeownership,
                and our flexible personal loans provide vital support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for our customers</p>

              <div class="cases-info__list">
                <div class="cases-info__list__item">
                  <span>65%</span>
                  <p>Cash Flow Management</p>
                </div>
                <div class="cases-info__list__item">
                  <span>70%</span>
                  <p>Drive Business Expansion</p>
                </div>
                <div class="cases-info__list__item">
                  <span>45%</span>
                  <p>Streamline payroll processing</p>
                </div>
              </div>
              <NuxtLink class="cases-info__link btn__main" to="/">Learn more</NuxtLink>
            </div>
            <div class="icons-boxes">
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-5.svg" alt="Cases 1">
                <h4>Startups and Entrepreneurs</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-6.svg" alt="Cases 2">
                <h4>Cash Flow Management</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-7.svg" alt="Cases 3">
                <h4>Business Expansion</h4>
              </div>
              <div class="icons-boxes__card">
                <img src="@/assets/images/home-page/cases-icon-8.svg" alt="Cases 4">
                <h4>Payment Solutions</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-content__section page-content__features">
      <div class="page-content__heading features-content__heading">
        <h2>Our <span>Features</span></h2>
        <p class="page-content__description cases-content__title__description">
          Experience a host of powerful features at YourBank, including seamless online banking, secure transactions,
          and personalized financial insights, all designed to enhance your banking experience
        </p>
      </div>
      <div class="features-content">
        <div class="features-content__content">
          <div class="features-content__aside">
            <div class="features-content__nav">
              <button @click="featuresTab = 'online'" class="btn-nav"
                      :class="{'btn-nav__active': featuresTab === 'online'}">Online Banking
              </button>
              <button @click="featuresTab = 'tools'" class="btn-nav"
                      :class="{'btn-nav__active': featuresTab === 'tools'}">Financial Tools
              </button>
              <button @click="featuresTab = 'support'" class="btn-nav"
                      :class="{'btn-nav__active': featuresTab === 'support'}">Customer Support
              </button>
            </div>
          </div>
          <div v-if="featuresTab === 'online'" class="features-content__links">
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Secure Transactions</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Rest assured knowing that your transactions are protected by industry-leading security measures. We
                employ encryption and multi-factor authentication to safeguard your financial information.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Bill Pay and Transfers</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make
                one-time transfers between your accounts with just a few clicks.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">24/7 Account Access</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking
                platform. Check balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Mobile Banking App</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your
                accounts, deposit checks, and make payments from your smartphone or tablet.
              </p>
            </div>
          </div>
          <div v-if="featuresTab === 'tools'" class="features-content__links">
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">24/7 Account Access</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking
                platform. Check balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Mobile Banking App</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your
                accounts, deposit checks, and make payments from your smartphone or tablet.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Secure Transactions</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Rest assured knowing that your transactions are protected by industry-leading security measures. We
                employ encryption and multi-factor authentication to safeguard your financial information.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Bill Pay and Transfers</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make
                one-time transfers between your accounts with just a few clicks.
              </p>
            </div>
          </div>
          <div v-if="featuresTab === 'support'" class="features-content__links">
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">24/7 Account Access</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking
                platform. Check balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Mobile Banking App</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your
                accounts, deposit checks, and make payments from your smartphone or tablet.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Secure Transactions</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Rest assured knowing that your transactions are protected by industry-leading security measures. We
                employ encryption and multi-factor authentication to safeguard your financial information.
              </p>
            </div>
            <div class="features-card__link">
              <div class="features-card__heading">
                <p class="features-card__title">Bill Pay and Transfers</p>
                <NuxtLink to="/" class="features-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                          stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <p class="features-card__description">
                Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make
                one-time transfers between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>

    <FrequentQuestions @changeCurrentLimit="changeLimit" :newsList="generalStore.questionsAskedList"
                       :limit="questionsAskedLimit"/>

    <section class="page-content__section page-content__reviews">
      <div class="page-content__heading">
        <div class="reviews-content__heading">
          <h2>Our <span>Testimonials</span></h2>
          <p class="page-content__description reviews-content__title__description">
            Discover how YourBank has transformed lives with innovative digital solutions and personalized customer
            service. See why our clients trust us for a secure and prosperous financial journey
          </p>
        </div>
        <SwitchTabsPlan :currentPlan="productPlan" @changePlan="changeCurrentPlanProducts"/>
      </div>

      <ReviewsSlider v-if="productPlan === 'Individuals'" :slidesData="generalStore?.reviewsList"/>

    </section>
    <AppealRegistration/>
  </main>

</template>

<style scoped lang="scss">


.page-content {
  &__section {
    margin-bottom: 8.33rem;
  }

  &__heading {
    margin-bottom: 4.44rem;

    h2 {
      margin-bottom: .78rem;

      &:is(span) {
        color: $green60;
      }
    }
  }

  &__description {
    color: $grey70;
    max-width: 72rem;
    font-size: 1rem;
  }

  &__hero {
    display: flex;
    gap: 6.67rem;
    padding: 5.56rem 6.5rem 5.56rem 0;

    .hero-content {
      &__tip {
        display: inline-flex;
        align-items: center;
        gap: .33rem;

        border-radius: 3.38889rem;
        background: $grey15;
        padding: .56rem 1.11rem .56rem .67rem;
        margin-bottom: 1.11rem;

        &-icon {
          display: flex;
        }

        &-text {
          color: $white;
          font-weight: 300;
          line-height: 133.333%;
        }
      }

      &__title {

        h1 {
          color: $white;
          font-size: 2.66667rem;
          font-weight: 500;
          font-style: normal;
          line-height: 150%;
          margin-bottom: .78rem;

          span {
            color: $green60;
          }
        }

        &__description {
          color: $white90;
          font-size: 1rem;
          font-style: normal;
          font-weight: 300;
          line-height: 150%;

          margin-bottom: 2.78rem;
        }
      }
    }

    .hero__preview {
      position: relative;
      z-index: 3;

      &-img {
        display: block;
        position: relative;
      }

      &__arrows {
        position: absolute;
        top: 3%;
        left: 58%;
        z-index: -1;

        max-width: 23.21933rem;
        width: 100%;
      }
    }
  }

  &__products {
    .products-content {
      &__heading {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 5.56rem;
      }

      &__title__description {
        color: $grey70;
        font-size: 1rem;
      }

      &__cards {
        display: flex;
        gap: 5.56rem;
        align-items: center;
        transition: all 1s ease-in-out;
        animation: showElement 1s ease-in-out alternate;

        .product-card {
          display: flex;
          flex-direction: column;
          text-align: center;
          position: relative;

          max-width: 25.9rem;
          width: 100%;

          &__icon {
            max-width: 4.11rem;
            width: 100%;
            margin: 0 auto 1.67rem;
          }

          &__title {
            font-size: 1.33333rem;
            line-height: 150%;
            margin-bottom: 1.11rem;
          }

          &__description {
            color: $grey70;
          }

          &::before {
            display: inline-block;
            content: "";
            width: 17.7rem;
            height: 0.05rem;
            background: #262626;

            position: absolute;
            top: 53%;
            right: -46%;

            transform: rotate(90deg);
          }

          &:last-child {
            &:before {
              display: none;
            }
          }
        }
      }
    }
  }

  &__cases {
    .cases-content {
      &__content {
        display: flex;
        flex-direction: column;
        gap: 3.33rem;
      }

      &__row {
        display: flex;
        align-items: center;
        gap: 5.56rem;

        .icons-boxes {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.11rem;
          padding: 2.78rem;

          border-radius: 1.1rem;
          background-color: $grey11;

          flex-basis: 50%;

          background-image: url("@/assets/images/abstracts/abstract-appeal.svg");
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: auto;

          &__card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.33rem;
            padding: 1.67rem;

            border-radius: 0.88rem;
            border: 1px solid $grey15;
            background: $grey10;

            img {
              max-width: 4.3rem;
              width: 100%;
              margin: 0 auto;
            }

            h4 {
              font-size: 1.11111rem;
              font-weight: 400;
              text-align: center;
            }
          }
        }


        .cases-info {
          flex-basis: 50%;

          &__title {
            font-size: 1.66667rem;
            font-weight: 500;
            margin-bottom: .7rem;
          }

          &__description {
            color: $grey70;
            margin-bottom: 3.44rem;
          }

          &__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 3.44rem;

            &__item {
              max-width: 10.15rem;
              width: 100%;

              span {
                color: $green60;
                font-size: 3.22222rem;
                font-weight: 500;
                margin-bottom: .28rem;
              }

              p {
                color: $grey70;
              }
            }
          }

          &__link {
            display: inline-block;
            padding: 1rem 1.33rem;
            border: 1px solid $grey15;
            background: $grey11;
          }
        }
      }

    }


  }

  &__features {
    .features-content {
      &__content {
        display: flex;
        gap: 1.67rem;
        justify-content: space-between;
      }

      &__nav {
        display: flex;
        gap: 1.13rem;
        flex-direction: column;

        border-radius: 0.66rem;
        background: $grey11;
        padding: 2.78rem;

        .btn-nav {
          border-radius: 5.55556rem;
          border: 1px solid $grey15;
          background-color: $grey15;
          padding: 1rem 1.33rem;
          color: $white;

          font-size: 1rem;
          font-weight: 400;
          text-wrap: nowrap;

          transition: all .4s ease-in-out;

          &__active {
            background-color: $grey10;
            color: $green60;
          }

          &:is(:hover) {
            opacity: .7;
          }

        }
      }

      &__links {
        display: grid;
        gap: 1.67rem;
        grid-template-columns: repeat(2, 1fr);
        animation: showElement 1s ease-in-out alternate;

        .features-card {
          &__link {
            max-width: 34rem;
            width: 100%;

            border-radius: 0.6rem;
            border: 1px solid $grey15;
            background-color: $grey11;
            padding: 2.78rem;

            transition: background-color .4s ease-in-out;

            &:is(:hover) {
              background-color: $grey15;

            }

            &:hover .features-card__icon {
              transform: rotate(0deg);
            }
          }

          &__icon {
            transform: rotate(45deg);
            transition: all .4s ease-in-out;
          }

          &__heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.72rem;
          }

          &__title {
            font-size: 1.2rem;
          }

          &__description {
            color: $grey70;
          }
        }

      }
    }
  }

  &__reviews {
    .page-content__heading {
      display: flex;
      align-items: flex-end;
      gap: 16rem;
      margin-bottom: 5.56rem;
    }
  }
}

// Media laptop
@include laptop {
  .page-content {
    &__heading {
      margin-bottom: 3.58rem;

      h2 {
        color: $green60;
        margin-bottom: .56rem;
      }
    }

    &__hero {
      gap: 5.56rem;
      padding: 3.33rem 6.5rem 3.33rem 0;

      .hero-content {
        &__tip {
          gap: .22rem;
          padding: .44rem .89rem;
          margin: 0 auto;

          &-text {
            font-size: 0.66667rem;
            line-height: 200%;
          }
        }

        &__title {
          h1 {
            font-size: 2.11111rem;
            margin-bottom: .56rem;
          }

          &__description {
            font-size: 0.88889rem;
            margin-bottom: 2.22rem;
          }
        }
      }

      .hero__preview {
        position: relative;
        z-index: 3;

        &__arrows {
          position: absolute;
          top: 3%;
          left: 50%;
          z-index: -1;

          max-width: 23.21933rem;
          width: 100%;
        }
      }
    }

    &__products {
      .products-content {
        &__heading {
          margin-bottom: 4.44rem;
        }

        &__title__description {
          font-size: 0.88889rem;
        }

        &__cards {
          gap: 4.44rem;
          justify-content: space-between;

          .product-card {
            max-width: 20.7rem;
            width: 100%;

            &__icon {
              max-width: 4rem;
              margin: 0 auto 1.33rem;
            }

            &__title {
              font-size: 1.11111rem;
              margin-bottom: .89rem;
            }

            &__description {
              font-size: 0.88889rem;
            }

            &::before {
              top: 53%;
              right: -65%;
            }

            &:last-child {
              &:before {
                display: none;
              }
            }
          }
        }
      }
    }

    &__cases {
      .cases-content {
        &__content {
          gap: 2.22rem;
        }

        &__row {
          gap: 3.33rem;

          .icons-boxes {
            gap: .56rem;
            padding: 2.22rem;

            &__card {
              gap: .78rem;
              padding: 1.33rem;

              img {
                max-width: 3.5rem;
              }

              h4 {
                font-size: 0.88889rem;
              }
            }
          }


          .cases-info {

            &__title {
              font-size: 1.44444rem;
              margin-bottom: .56rem;
            }

            &__description {
              font-size: 0.88889rem;
              margin-bottom: 2.78rem;
            }

            &__list {
              margin-bottom: 2.78rem;

              &__item {
                max-width: 7.5rem;

                span {
                  font-size: 2.22222rem;
                }

                p {
                  font-size: 0.83333rem;
                }
              }
            }

            &__link {
              padding: .78rem 1.11rem;
              font-size: 0.77778rem;
            }
          }
        }

      }

    }

    &__features {
      .features-content {
        &__content {
          gap: 1.11rem;
        }

        &__nav {
          gap: 1.11rem;
          padding: 2.22rem;

          .btn-nav {
            padding: .78rem 1.11rem;
            font-size: 0.7rem;
          }
        }

        &__links {
          gap: 1.11rem;

          .features-card {
            &__link {
              padding: 2.22rem;
            }

            &__heading {
              margin-bottom: 1.33rem;
            }

            &__title {
              font-size: 1rem;
            }

            &__description {
              font-size: 0.8rem;
            }
          }

        }
      }
    }
  }
}

// Media mobile
@include mobile {
  .page-content {
    &__heading {
      margin-bottom: 2.58rem;
      text-align: center;

      h2 {
        color: $green60;
        margin-bottom: .56rem;
      }
    }

    &__description {
      font-size: 0.77778rem;
    }

    &__section {
      margin-bottom: 3.85rem;
    }

    &__hero {
      flex-direction: column;
      gap: 4.44rem;
      padding: 0 .79rem;


      .hero-content {
        display: flex;
        flex-direction: column;

        &__tip {
          gap: .22rem;
          padding: .44rem .89rem;
          margin-bottom: .89rem;

          &-text {
            font-size: 0.7rem;
            line-height: 171%;
          }
        }

        &__title {
          h1 {
            font-size: 1.55rem;
            margin-bottom: .44rem;
            text-align: center;

            br {
              display: none;
            }
          }

          &__description {
            font-size: 0.7rem;
            text-align: center;
            margin-bottom: 1.67rem;
          }
        }
      }

      .hero__preview {

        &-img {
          width: 100%;
        }

        &__arrows {
          top: -10%;
          left: 44%;

          max-width: 12rem;
        }
      }

      .btn {
        max-width: 8rem;
        width: 100%;
        margin: 0 auto;
      }
    }

    &__products {
      .products-content {
        &__heading {
          flex-direction: column;
          text-align: center;
          margin-bottom: 3.33rem;
        }

        &__title__description {
          font-size: 0.77778rem;
          margin-bottom: 1.11rem;
        }

        &__cards {
          gap: 3.33rem;
          flex-direction: column;

          .product-card {
            max-width: 20.7rem;

            &__icon {
              max-width: 3.11rem;
              margin: 0 auto 1.11rem;
            }

            &__title {
              font-size: 1.11111rem;
              margin-bottom: .67rem;
            }

            &__description {
              font-size: 0.77778rem;
            }

            &::before {
              top: 53%;
              right: -65%;
              display: none;
            }

            &:last-child {
              &:before {
                display: none;
              }
            }
          }
        }
      }
    }

    &__cases {
      .cases-content {
        &__row {
          flex-direction: column;
          gap: 1.67rem;

          .icons-boxes {
            padding: 1.11rem;

            &__card {
              padding: 1.11rem .78rem;

              img {
                max-width: 3.5rem;
              }

              h4 {
                line-height: 150%;
                font-size: 0.7rem;
              }
            }
          }


          .cases-info {
            text-align: center;

            &__title {
              font-size: 1.11111rem;
            }

            &__description {
              font-size: 0.77778rem;
            }

            &__list {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 3.33rem;

              &__item {
                max-width: 100%;
              }
            }
          }
        }

        &__business {
          flex-direction: column-reverse;
        }

      }


    }

    &__features {
      .features-content {
        &__content {
          flex-direction: column;
        }

        &__nav {
          gap: 1.11rem;
          padding: 1.11rem;
          flex-direction: row;
          overflow: scroll;

          &::-webkit-scrollbar {
            height: .139rem;
          }

          .btn-nav {
            padding: .78rem 1.11rem;
            text-wrap: nowrap;
          }
        }

        &__links {
          grid-template-columns: 1fr;
          gap: 1.11rem;

          .features-card {
            &__link {
              padding: 1.67rem;
            }

            &__heading {
              margin-bottom: 1.33rem;
            }

            &__title {
              font-size: 1rem;
            }

            &__description {
              font-size: 0.77rem;
            }
          }

        }
      }
    }

    &__reviews {
      .page-content__heading {
        flex-direction: column;
        gap: 2.22rem;
      }
    }
  }
}
</style>