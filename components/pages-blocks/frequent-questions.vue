<script setup>
import {useGeneralStore} from "~/stores/general/index.js";

const generalStore = useGeneralStore();

const props = defineProps(['newsList', 'limit']);
const emit = defineEmits(['changeCurrentLimit']);

const changeLimit = (val) => emit('changeCurrentLimit', val);

</script>

<template>
  <section class="page-content__section page-content__faq">
    <div class="page-content__heading faq-content__heading">
      <h2><span>Frequently </span>Asked Questions</h2>
      <p class="page-content__description faq-item__description">
        Still you have any questions? Contact our Team via support@yourbank.com
      </p>
    </div>

    <h2 v-if="!newsList.length" class="frequently-questions__message">
      Oops, we failed to upload the actual questions for you. Try again
      later.
    </h2>

    <div v-else class="faq-list">
      <div v-for="news in newsList" :key="news.id" class="faq-item">
        <h5 class="faq-item__title">{{ news?.title }}</h5>
        <hr class="faq-item__separator">
        <p class="faq-item__description">{{ news?.body }}</p>
      </div>

      <button v-if="generalStore?.questionsAskedList?.length < generalStore?.questionsAskedListTotal"
              @click="changeLimit(4)" class="faq-list__button">
        Load All FAQ’s
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
          <path d="M16.5 8.75L11 14.25L5.5 8.75" stroke="white" stroke-width="2"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.page-content {
  &__heading {
    margin-bottom: 4.44rem;

    h2 {
      margin-bottom: .78rem;

      &:is(span) {
        color: $green60;
      }
    }
  }
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.67rem;

  position: relative;
  z-index: 2;

  &__button {
    position: absolute;
    left: calc(50% - 5.556rem);
    bottom: -1.1rem;
    z-index: 3;

    border-radius: 5.55rem;
    border: 1px solid $grey15;
    background: $grey11;
    color: $white;
    padding: 1rem 1.33rem;
    transition: background .4s ease-in-out;

    display: inline-flex;
    align-items: center;
    gap: .22rem;

    font-size: 1rem;
    font-weight: 400;

    &:is(:hover) {
      background: $grey15;
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 15rem;

    position: absolute;
    bottom: 0;
    left: 0;

    background: linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0%, #191919 100%);
  }
}

.faq-item {
  border-radius: 0.77rem;
  border: 1px solid $grey15;
  padding: 2.78rem;

  &__title {
    font-size: 1.11rem;

    font-weight: 500;
    line-height: normal;
  }

  &__separator {
    margin: 1.67rem 0;
    border: 0.05rem solid $grey15;
  }

  &__description {
    font-size: 1rem;
    color: $grey70;
  }
}

.frequently-questions__message {

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
  }

  .faq-list {
    gap: 1.11rem;

    &__button {
      left: calc(50% - 4.7rem);
      padding: .78rem 1.11rem;
      font-size: 0.77rem;
    }

  }

  .faq-item {

    &__title {
      font-size: 1rem;
    }

    &__separator {
      margin: 1.33rem 0;
    }

    &__description {
      font-size: 0.88rem;
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
  }

  .faq-list {
    grid-template-columns: 1fr;

    &__button {
      bottom: -1.1rem;
    }
  }

  .faq-item {
    padding: 1.67rem;

    &__title {
      font-size: 1rem;
    }

    &__separator {
      margin: 1.11rem 0;
    }

    &__description {
      font-size: 0.88rem;
    }
  }
}
</style>