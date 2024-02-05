<script setup>
import {usePlannerStore} from "~/stores/planner/index.js";
import DraggableItem from "~/components/planner/DraggableItem.vue";
import DroppableColumn from "~/components/planner/DroppableColumn.vue";

const plannerStore = usePlannerStore();

const modalShow = ref(false);
const showSettingsDrop  = ref(false);

onBeforeMount(() => {
  plannerStore.checkCurrentTaskList();
})
const isModalOpen = () => modalShow.value = !modalShow.value;
const createNewTask = ({taskName, taskText}) => {
  if (!taskName || !taskText) return;

  plannerStore.createNewTask({
    categoryId: 0,
    name: taskName,
    text: taskText
  });
}

definePageMeta({
  middleware: 'auth',
  layout: "page-layout"
})
</script>

<template>
  <div class="page-action container">
    <button @click="isModalOpen" class="btn btn__main">Создать задачу</button>
    <CreateNewTask v-if="modalShow" @closeModal="isModalOpen" @createNewTask="createNewTask"/>
  </div>
  <div class="page-content container">
    <droppable-column
        v-for="category in plannerStore.categories"
        :key="category.id"
        :category="category"
    />
  </div>
</template>

<style scoped lang="scss">

.page-content {
  display: grid;
  gap: 2rem;
  margin: 2rem auto;
  grid-template-columns: repeat(4, 1fr);
}

.page-action {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
}


</style>