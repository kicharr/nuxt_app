<script setup>

</script>

<template>
  <footer class="footer-wrapper">
    <div class="footer-content container">
      <div class="footer-content__logo">
        <NuxtLink to="/">
          <img class="" src="@/assets/images/logo.svg" alt="Logotype">
        </NuxtLink>
      </div>
      <nav class="footer-content__nav">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers">Careers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/security">Security</NuxtLink>
          </li>
        </ul>
      </nav>
      <hr class="footer-content__separator">
      <div class="footer-content__links">
        <a class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
                d="M1.75 7.22425V14.375C1.75 15.7557 2.86929 16.875 4.25 16.875H16.75C18.1307 16.875 19.25 15.7557 19.25 14.375V7.22425L11.8102 11.8026C11.0067 12.297 9.99327 12.297 9.18976 11.8026L1.75 7.22425Z"
                fill="#CAFF33"/>
            <path
                d="M19.25 5.75652V5.625C19.25 4.24429 18.1307 3.125 16.75 3.125H4.25C2.86929 3.125 1.75 4.24429 1.75 5.625V5.75652L9.84488 10.738C10.2466 10.9852 10.7534 10.9852 11.1551 10.738L19.25 5.75652Z"
                fill="#CAFF33"/>
          </svg>
          hello@skillbirdge.com
        </a>

        <a class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.75 3.75C1.75 2.36929 2.86929 1.25 4.25 1.25H5.39302C6.11 1.25 6.73498 1.73796 6.90887 2.43354L7.83037 6.11952C7.98284 6.72942 7.75495 7.37129 7.25202 7.74849L6.174 8.557C6.06206 8.64096 6.03772 8.7639 6.06917 8.84974C7.01542 11.4329 9.0671 13.4846 11.6503 14.4308C11.7361 14.4623 11.859 14.4379 11.943 14.326L12.7515 13.248C13.1287 12.7451 13.7706 12.5172 14.3805 12.6696L18.0665 13.5911C18.762 13.765 19.25 14.39 19.25 15.107V16.25C19.25 17.6307 18.1307 18.75 16.75 18.75H14.875C7.62626 18.75 1.75 12.8737 1.75 5.625V3.75Z"
                  fill="#CAFF33"/>
          </svg>
          +91 91813 23 2309
        </a>

        <a class="footer-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.1165 18.6259C10.1416 18.6405 10.1614 18.6517 10.1754 18.6596L10.1987 18.6726C10.3844 18.7745 10.6148 18.7738 10.8007 18.6729L10.8246 18.6596C10.8386 18.6517 10.8584 18.6405 10.8835 18.6259C10.9339 18.5967 11.0058 18.5542 11.0963 18.4985C11.2771 18.3872 11.5323 18.223 11.8372 18.0076C12.4459 17.5776 13.2581 16.9395 14.0721 16.1061C15.6922 14.4474 17.375 11.9551 17.375 8.75C17.375 4.95304 14.297 1.875 10.5 1.875C6.70304 1.875 3.625 4.95304 3.625 8.75C3.625 11.9551 5.30777 14.4474 6.92788 16.1061C7.74188 16.9395 8.55409 17.5776 9.16282 18.0076C9.46771 18.223 9.72295 18.3872 9.90375 18.4985C9.99419 18.5542 10.0661 18.5967 10.1165 18.6259ZM10.5 11.25C11.8807 11.25 13 10.1307 13 8.75C13 7.36929 11.8807 6.25 10.5 6.25C9.11929 6.25 8 7.36929 8 8.75C8 10.1307 9.11929 11.25 10.5 11.25Z"
                  fill="#CAFF33"/>
          </svg>
          Somewhere in the World
        </a>
      </div>
      <hr class="footer-content__separator">
      <div class="footer-content__description">
        <div class="social-links">
          <a href="#">
            <img src="@/assets/images/icons/fc.svg" alt="Facebook">
          </a>

          <a href="#">
            <img src="@/assets/images/icons/tw.svg" alt="Twitter">
          </a>

          <a href="#">
            <img src="@/assets/images/icons/in.svg" alt="In">
          </a>
        </div>

        <p>YourBank All Rights Reserved</p>

        <div class="privacy-links">
          <a href="#">Privacy Policy</a>
          <span></span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-wrapper {
  background: $grey11;
}

.footer-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3.33rem 4.44rem 1.67rem;

  font-size: 0.8rem;
  color: $white90;
  font-weight: 400;

  &__logo {
    margin-bottom: 2.2rem;

    img {
      max-width: 7.3rem;
      width: 100%;
      margin: 0 auto;
    }
  }

  &__nav {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      gap: .78rem;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.11rem;

    .footer-link {
      display: flex;
      align-items: center;
      gap: .33rem;
    }
  }

  &__separator {
    border-color: $grey15;
    width: 100%;
    margin: 2.22rem 0;
  }

  &__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .67rem 1.33rem;
    border-radius: 5.5rem;
    border: 1px solid $grey15;
    background: $grey10;

    .social-links {
      display: flex;
      align-items: center;
      gap: .44rem;

      a img {
        max-width: 2.44rem;
        width: 100%;
      }
    }

    p {
      color: $grey70;
      font-size: 0.7rem;
    }

    .privacy-links {
      display: flex;
      align-items: center;
      gap: .44rem;

      a {
        color: $grey70;
        font-size: 0.7rem;
      }

      span {
        width: 0.05rem;
        height: 1.1rem;
        background: $grey70;
      }
    }

  }
}


@include mobile {
  .footer-content {
    padding: 2.78rem .89rem 1.67rem;

    &__links {
      flex-wrap: wrap;
    }

    &__separator {
      margin: 1.67rem 0;
    }

    &__description {
      flex-direction: column;
      gap: 1.11rem;
      border-radius: 0.6rem;
      padding: 2.78rem 1.33rem 1.67rem;
      margin-top: 2.78rem;
      position: relative;

      .social-links {
        position: absolute;
        top: -20%;
        left: calc(50% - 4.3rem);
      }

    }
  }


}
</style>