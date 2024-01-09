<script setup>
const props = defineProps(['currentPlan']);
const emit = defineEmits(['changePlan']);

const changePlan = (val) => emit('changePlan', val);


</script>

<template>
  <div class="tab__buttons">
    <button @click="changePlan('Individuals')" class="btn tab__btn"
            :class="{'tab__btn__active': currentPlan === 'Individuals'}">For Individuals
    </button>
    <button @click="changePlan('Businesses')" class="btn btn__tab"
            :class="{'tab__btn__active': currentPlan === 'Businesses'}">For Businesses
    </button>
  </div>
</template>

<style scoped lang="scss">
.tab__buttons {
  display: flex;
  gap: .5rem;
  background-color: $grey15;
  border-radius: 4.55556rem;
  border: 1px solid $grey15;
  padding: .78rem;
  text-wrap: nowrap;
  height: fit-content;

  &__btn {
    color: $white;
    padding: 0.7rem 1.3rem;
    border-radius: 7.7rem;
    transition: all .5s ease-in-out;
  }

  .tab__btn__active {
    background-color: $green60;
    color: $grey11;
    border-radius: 7.7rem;
    padding: 0.7rem 1.3rem;
  }
}


@include laptop {

  .tab__buttons {
    border-radius: 4.55556rem;
    padding: .67rem;

    &__btn {
      padding: 1rem .56rem;

      &-active {
        padding: 1rem .56rem;
      }
    }
  }

}

@include mobile {
  .tab__buttons {
    margin: 0 auto;

    &__btn {
      padding: .56rem 1rem;

      &__active {
        padding: .56rem 1rem;
      }
    }
  }
}
</style>