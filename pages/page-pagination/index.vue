<script setup>
import {useGeneralStore} from "~/stores/general/index.js";

const generalStore = useGeneralStore();

const newsList = computed(() => generalStore.questionsAskedList);

const paginationParams = ref({
  page: 1,
  limit: 10,
});

onMounted(() => {
  generalStore.getQuestionsAsked(paginationParams.value?.limit);

  document.addEventListener('scroll', calcUserScroll);
})

function calcUserScroll(e) {
  let html = document.documentElement;
  let body = document.body;

  let scrollTop = html.scrollTop || body && body.scrollTop || 0;
}

</script>

<template>


  <div class="page-content container">
    <FrequentQuestions :newsList="newsList"/>
  </div>
</template>

<style scoped lang="scss">

</style>