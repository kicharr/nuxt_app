<script setup>
import {useUserStore} from "~/stores/user/index.js";

const userStore = useUserStore();

const login = ref('');
const password = ref('');

const authorization = () => {
  if (!login.value || !password.value) {
    alert('Заполинте данные!');
    password.value = '';
  } else {
    userStore.authorization({login: 'kminchelle', password: '0lelplR'})
  }
}



</script>

<template>
  <div class="form-wrapper container">
    <form class="auth-form">
      <img class="auth-form__abstract" src="@/assets/images/abstracts/abstract-appeal.svg">

      <div class="auth-form__heading">
        <h1>Login</h1>
        <p>Welcome back! Please log in to access your account.</p>
      </div>

      <div class="auth-form__inputs">
        <input v-model="login" class="input input__auth input__login" type="text" placeholder="Enter your Email">
        <input v-model="password" class="input input__auth input__password" type="text"
               placeholder="Enter your Password">
      </div>

      <NuxtLink class="forgot-link" to="/">Forgot Password?</NuxtLink>

      <div class="auth-form__buttons">
        <button @click.prevent="authorization" class="btn btn__auth" type="submit">Login</button>
        <NuxtLink to="/registration" class="btn btn__sign">Sign Up</NuxtLink>

        <p class="continue__text">Or Continue with</p>

        <div class="continue__links-wrapper">
          <NuxtLink class="continue__link">
            <img src="@/assets/images/icons/google.png" alt="Google">
          </NuxtLink>
          <NuxtLink class="continue__link">
            <img src="@/assets/images/icons/facebook.png" alt="Facebook">
          </NuxtLink>
          <NuxtLink class="continue__link">
            <img src="@/assets/images/icons/apple.png" alt="Apple">
          </NuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.auth-form {
  display: flex;
  flex-direction: column;
  padding: 5.56rem 8.33rem;
  background-image: url("@/assets/images/authorization-page.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 8.33rem;

  position: relative;
  z-index: 2;

  &__abstract {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 19rem;
    width: 100%;
    z-index: 3;
    transform: rotate(90deg);
  }

  &__heading {
    text-align: center;
    margin-bottom: 4.44rem;

    h1 {
      color: $green60;
      font-size: 2.6rem;
      font-weight: 500;
      margin-bottom: 1.11rem;
    }

    p {
      color: $grey75;
      line-height: normal;
    }
  }

  &__inputs {
    display: flex;
    justify-content: center;
    gap: 1.67rem;
    margin-bottom: 2.22rem;
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.33rem;
    margin-top: 2.22rem;
    text-align: center;
  }
}

.forgot-link {
  color: $white;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  text-decoration-line: underline;
}

.btn {
  padding: 1rem 1.11rem;
  border-radius: 3.5rem;
  max-width: 28.7rem;
  width: 100%;

  &__auth {
    background: $green60;
  }

  &__sign {
    color: $white;
    background: $grey15;
    order: 1px solid $grey20;
    padding: 1rem 1.11rem;
  }
}

.continue__text {
  position: relative;

  color: $grey70;
  font-weight: 400;

  &::before, &::after {
    content: '';
    position: absolute;
    top: calc(50% - 0rem);

    width: 100%;
    height: .05rem;
    background: $grey70;
  }

  &::after {
    left: 9.11rem;
  }

  &::before {
    right: 9.11rem;
  }

}


.continue__links-wrapper {
  display: flex;
  gap: 1.33rem;
}

.continue__link {
  cursor: pointer;
}


@include laptop {
  .auth-form {
    padding: 4.44rem 11.11rem;
    margin-bottom: 6.67rem;


    &__abstract {
      max-width: 14rem;
    }

    &__heading {
      margin-bottom: 3.33rem;

      h1 {
        font-size: 2.1rem;
        margin-bottom: .89rem;
      }

      p {
        font-size: .8rem;
      }
    }

    &__inputs {
      gap: 1.33rem;
      margin-bottom: 1.67rem;
    }

    &__buttons {
      gap: 1.33rem;
      margin-top: 2.22rem;
    }
  }

  .forgot-link {
    font-size: .8rem;
  }

  .btn {
    padding: .78rem 1.33rem;
    max-width: 19.7rem;
  }

  .continue__text {
    font-size: 0.7rem;

    &::before, &::after {
      top: calc(50% - 0rem);

      width: 100%;
      height: .05rem;
      background: $grey70;
    }

    &::after {
      left: 7.11rem;
    }

    &::before {
      right: 7.11rem;
    }

  }

  .continue__links-wrapper {
    gap: 1.11rem;
  }

  .continue__link {
    cursor: pointer;
    max-width: 3.7rem;
    width: 100%;
  }
}


@include mobile {
  .auth-form {
    padding: 1.67rem;
    margin-bottom: 4.44rem;

    &__abstract {
      max-width: 9.7rem;
    }

    &__heading {
      margin-bottom: 2.2rem;

      h1 {
        font-size: 1.5rem;
        margin-bottom: .56rem;
      }

      p {
        font-size: 0.7rem;
      }
    }

    &__inputs {
      flex-direction: column;
      gap: 1.11rem;
      margin-bottom: 1.33rem;
    }

    &__buttons {
      gap: 1.33rem;
      margin-top: 2.22rem;
    }
  }

  .forgot-link {
    font-size: 0.7rem;
  }

  .btn {
    max-width: 100%;
  }

  .continue__text {

    &::after {
      left: 6.11rem;
    }

    &::before {
      right: 6.11rem;
    }

  }

  .continue__link {
    max-width: 2.8rem;
  }
}

</style>