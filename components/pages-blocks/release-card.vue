<script setup>
const props = defineProps(['realiseData']);
</script>

<template>
  <div class="releases-card">
    <div class="releases-card__preview">
      <img :src="getPreview(realiseData?.preview)" alt="Releases preview">
    </div>

    <div class="releases-card__title">
      {{ realiseData?.releaseTitle }}
    </div>

    <div class="releases-card__tags">
      <div v-for="(tag, index) in realiseData?.tags" :key="index" class="tag-item">
        {{ tag?.location }} {{ tag?.date }}
      </div>
    </div>

    <div class="releases-card__description">
      <p>{{ realiseData?.releaseDescription }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.releases-card {
  border-radius: 2.22rem 2.22rem 0.88rem 0.88rem;
  border: 1px solid $grey15;
  background: $grey11;
  padding: 1.67rem;

  &__preview {
    margin-bottom: 2.62rem;
  }

  &__title {
    font-size: 1.33333rem;
    font-weight: 400;
    margin-bottom: 1.33rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: .56rem;
    margin-bottom: 1.67rem;

    .tag-item {
      border-radius: 3.78rem;
      border: 1px solid $grey15;
      background: $grey10;
      padding: .44rem .89rem;
    }
  }

  &__description {
    p {
      color: $grey70;
    }
  }
}

@include laptop {
  .releases-card {
    padding: 1.33rem;

    &__preview {
      margin-bottom: 2.22rem;
    }

    &__title {
      font-size: 1.11rem;
      margin-bottom: .78rem;
    }

    &__tags {
      gap: .33rem;
      margin-bottom: 1.33rem;

      .tag-item {
        font-size: 0.88rem;
        padding: .33rem .78rem;
      }
    }

    &__description {
      p {
        font-size: 0.88889rem;
      }
    }
  }
}

@include mobile {
  .releases-card {
    padding: 1.11rem;

    &__preview {
      margin-bottom: 1.67rem;
    }

    &__title {
      font-size: 1rem;
      margin-bottom: .56rem;
    }

    &__tags {
      .tag-item {
        font-size: 0.77rem;
        padding: .33rem .67rem;
      }
    }

    &__description {
      p {
        font-size: 0.77rem;
      }
    }
  }
}

</style>