<script setup>

</script>

<template>
  <div class="appeal-content">
    <div class="appeal-content__text">
      <h2 class="appeal-content__title">
        Start your financial journey with
        <span>YourBank today!</span>
      </h2>
      <p class="appeal-content__description">
        Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with
        our tailored <br> solutions and exceptional customer service
      </p>
    </div>
    <div class="appeal-content__action">
      <button @click="checkUserToken" id="linkAppeal" class="btn btn__main">Open Account</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.appeal-content {
  background-image: url("assets/images/abstracts/abstract-appeal.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;

  border-radius: 1.11111rem;
  border: 1px solid #262626;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.44rem;
  margin: 8.88rem 0;

  &__title {
    font-size: 2.22222rem;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: .78rem;
  }

  &__description {
    color: $grey70;
  }
}

@include laptop {
  .appeal-content {
    padding: 3.33rem;
    margin: 6.67rem 0;

    &__title {
      font-size: 1.66667rem;
      margin-bottom: .56rem;
    }

    &__description {
      font-size: 0.88889rem;
    }
  }
}

@include mobile {
  .appeal-content {
    flex-direction: column;
    padding: 1.67rem;
    margin: 4.44rem 0;
    background-position: 0 0;

    &__text {
      margin-bottom: 1.33rem;
    }

    &__title {
      font-size: 1.33333rem;
      margin-bottom: .78rem;

    }

    &__description {
      text-align: center;
      font-size: 0.77778rem;
    }
  }
}
</style>