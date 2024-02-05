<script setup>
import DraggableItem from "~/components/planner/DraggableItem.vue";
import {usePlannerStore} from "~/stores/planner/index.js";

const props = defineProps(['category']);

const plannerStore = usePlannerStore();
const onDrop = (e, categoryId) => {
  const itemId = parseInt(e.dataTransfer.getData('itemId'));
  const changedTaskList = plannerStore.taskList.map(x => {
    if (x.id === itemId) x.categoryId = categoryId;
    return x
  })
  plannerStore.updateLocalStorage('taskList', changedTaskList);
}

const onDragStart = (e, item) => {
  e.target.classList.add('drag');
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllowed = "move";

  e.dataTransfer.setData('itemId', item.id.toString());
}
</script>

<template>
  <div
      @drop="onDrop($event, category.id)"
      class="droppable"
      @dragover.prevent
      @dragenter.prevent
  >

    <h3 class="droppable__title">{{ category?.title }}</h3>

    <draggable-item
        v-for="item in plannerStore.taskList?.filter(x => x.categoryId === category.id)"
        :key="item.id"
        @onDragStart="onDragStart"
        :category="category"
        :item="item"
    />

  </div>
</template>

<style scoped lang="scss">
.droppable {
  background-color: $grey20;
  padding: 1rem;
  border-radius: .525rem;

  cursor: pointer;
  min-height: 200px;
  height: fit-content;
  height: -moz-fit-content;
  transition: all .5s ease-in-out;


  &__title {
    text-align: center;
    margin-bottom: 1rem;
  }

  &__text {
    font-size: 16px;
    font-weight: unset;
  }

}
</style>