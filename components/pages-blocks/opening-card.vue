<script setup>
const props = defineProps(['jobData']);

</script>

<template>
  <div class="job-card">

    <div class="job-card__heading">
      <p class="job-card__title">{{ jobData?.jobTitle }}</p>
      <div class="job-card__tags">
        <div v-for="(tag, index) in jobData?.tags" :key="index" class="tag-item">
          {{ tag?.location }} {{ tag?.department }}
        </div>
      </div>
    </div>

    <div class="job-card__info">
      <p>About This Job</p>
      <p>{{ jobData?.jobDescription }}</p>
    </div>

    <div class="job-card__info">
      <p>Requirements & Qualifications</p>
      <ul>
        <li v-for="(qualification, index) in jobData?.qualifications" :key="index">
          {{ qualification }}
        </li>
      </ul>
    </div>

    <button class="btn btn__main job-card__btn">Apply Now</button>

  </div>
</template>

<style scoped lang="scss">
.job-card {
  display: flex;
  flex-direction: column;
  gap: 2.78rem;
  border-radius: 0.88rem;
  border: 1px solid $grey15;
  background: $grey11;
  padding: 2.78rem;

  &__title {
    color: $white;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: .78rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: .56rem;
    color: $grey70;

    .tag-item {
      padding: .44rem .89rem;
      border-radius: 3.77rem;
      border: 1px solid $grey15;
      background: $grey10;

      transition: color .5s ease-in-out;

      &:hover {
        color: $white;
        cursor: default;
      }
    }
  }

  &__info {
    margin-bottom: 2.22rem;

    ul {
      list-style-image: url("@/assets/images/careers-page/briefcase-icon.svg");
      padding-left: 1.7rem;
      color: $grey70;
      font-weight: 300;

      li {
        margin-bottom: 1.11rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    p:first-child {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.11rem;
    }

    p:last-child {
      color: $grey70;
    }
  }

  &__btn {
    max-width: 8.7rem;
    width: 100%;
  }
}

@include laptop {
  .job-card {
    gap: 2.22rem;
    padding: 2.22rem;

    &__title {
      font-size: 1.3rem;
      margin-bottom: .56rem;
    }

    &__tags {
      gap: .44rem;

      .tag-item {
        font-size: 0.88rem;
        padding: .33rem .78rem;
      }
    }

    &__info {

      ul {
        li {
          margin-bottom: .78rem;
        }
      }

      p:first-child {
        font-size: 1.1rem;
        margin-bottom: .89rem;
      }

      p:last-child {
        font-size: 0.8rem;
      }
    }

    &__btn {
      max-width: 6.38rem;
      width: 100%;
      padding: .67rem 1.11rem;
    }
  }
}

@include mobile {
  .job-card {
    gap: 1.67rem;
    padding: 1.33rem;

    &__title {
      font-size: 1.1rem;
    }

    &__tags {
      gap: .33rem;

      .tag-item {
        font-size: 0.7rem;
        padding: .33rem .56rem;
      }
    }

    &__info {
      margin-bottom: 0;

      ul {
        li {
          font-size: 0.77rem;
        }
      }

      p:first-child {
        font-size: 1rem;
        margin-bottom: .56rem;
      }

      p:last-child {
        font-size: 0.77rem;
      }
    }

    &__btn {
      max-width: 6.38rem;
      width: 100%;
      padding: .67rem 1.11rem;
    }
  }
}
</style>