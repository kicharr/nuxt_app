<script setup>
import {useUserStore} from "~/stores/user/index.js";
import {checkUserAuth} from "~/utils/utils.js"

const elementStyle = ref({
  scale: 0.5,
  opacity: .1,
});

const bottomLine = ref(0)
const topLine = ref(0);

const userStore = useUserStore();
const logout = () => {
  userStore.logout();
}

onMounted(() => {
  window.addEventListener('scroll', eventListener);
})

function eventListener() {
  const scrollPosition = window.scrollY.toFixed(0);
  const num = scrollPosition / 100;

  const max = 1.30;
  const min = 0.5;

  if (Number(num) <= max) {
    elementStyle.value.scale = num > min ? num : min;
    elementStyle.value.opacity = num > min ? 1 : .1;
  }

  // element.style.top = scrollPosition / 5 + 'vh';
}


</script>

<template>
  <header class="header">
<!--    <div id="element" :style="elementStyle" class="header__element"></div>-->
    <img src="@/assets/images/abstracts/abstract-header.svg" alt="" class="header__abstract-bg">
    <div class="header__content container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="@/assets/images/logo.svg" alt="Logotype">
        </NuxtLink>
      </div>

      <nav class="header__nav header__nav-desktop">
        <ul class="header__nav-list">
          <li>
            <NuxtLink to="/" class="header__link" active-class="header__link-active">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers" class="header__link" active-class="header__link-active">
              Careers
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="header__link" active-class="header__link-active">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/security" class="header__link" active-class="header__link-active">
              Security
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/recipes" class="header__link" active-class="header__link-active">
              Recipes
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/planner" class="header__link" active-class="header__link-active">
              Planner
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/page-pagination" class="header__link" active-class="header__link-active">
              Page pagination
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__nav header__nav-mobile">
        <button class="btn btn__main header__nav-burger">
          <img src="@/assets/images/icons/burger.svg" alt="">
        </button>
      </div>

      <div v-if="checkUserAuth()" class="header__action">
        <button @click="logout" class="btn btn__main header__btn">Log Out</button>
      </div>

      <div v-if="!checkUserAuth()" class="header__action">
        <NuxtLink to="/registration" class="btn btn__link header__btn">Sign Up</NuxtLink>
        <NuxtLink to="/authorization" class="btn btn__main header__btn">Login</NuxtLink>
      </div>


    </div>
  </header>
</template>

<style scoped lang="scss">

.header__abstract-bg {
  position: absolute;
  top: -1rem;
  left: -2rem;
  z-index: -1;

  max-width: 30rem;
  width: 100%;
}

.header {
  padding: 0 0.556rem;
  position: relative;

  //&__element {
  //  position: absolute;
  //  top: 0;
  //  left: calc(50% - 200px);
  //  z-index: 200;
  //
  //  display: inline-block;
  //  max-width: 400px;
  //  width: 100%;
  //  height: 400px;
  //  background-color: rgba(0, 0, 0, .5);
  //
  //  transform: scale(0.5);
  //
  //  transition: all 1s ease-in-out;
  //}

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    margin: 2.78rem auto 2.94rem;
    border-radius: 5.55556rem;
    border: 1px solid $grey15;
    background: $grey11;
  }

  &__logo img {
    max-width: 8.65739rem;
    width: 100%;
  }

  &__nav {
    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.44rem;
      color: $white;
    }

    &-mobile {
      display: none;
    }

    &-burger {
      padding: .33rem .78rem;
    }
  }


  &__link {
    color: $white;

    &-active {
      border-radius: 4.55556rem;
      background: $grey15;
      padding: .67rem 1.33rem;
      cursor: default;

      &:is(:hover) {
        opacity: 1;
      }
    }
  }

  &__action {
    display: flex;
    flex-wrap: wrap;
    gap: 1.67rem;
  }

}

.btn__link {
  color: $white;
}


// Media laptop
@include laptop {
  .header {
    &__content {
      font-size: 0.77778rem;
      padding: .78rem 1.33rem;
    }

    &__logo img {
      max-width: 6.49306rem;
      width: 100%;
    }

    &__link {
      &-active {
        padding: .56rem 1rem;
      }
    }

  }
}

// Media mobile
@include mobile {
  .header {

    &__content {
      margin: 2.22rem auto 2.78rem;
    }

    &__nav {
      &-desktop {
        display: none;
      }

      &-mobile {
        display: block;
      }
    }

    &__action {
      display: none;
    }
  }
}
</style>