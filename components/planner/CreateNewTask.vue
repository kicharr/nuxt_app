<script setup>
const emit = defineEmits(['closeModal', 'createNewTask', 'openSettings']);

const name = ref('');
const text = ref('');
const closeModal = (e) => {
  if (document.getElementById('closeModal')?.contains(e?.target) && e?.target?.id !== 'btnClose') return;
  emit('closeModal')
}
const createNewTask = () => {
  if (!name.value && !text.value) {
    console.log('Error: No data to save');
    closeModal();
  }

  emit('createNewTask', {taskName: name.value, taskText: text.value});
  name.value = text.value = '';
  closeModal();
}


</script>

<template>
  <div @click="closeModal" class="modal-wrapper">
    <div id="closeModal" class="modal">
      <h3>New task</h3>
      <label class="modal__label">
        <span>Title task</span>
        <input v-model="name" class="input input__auth input__modal" type="text">
      </label>

      <label class="modal__label">
        <span>Task comment</span>
        <textarea v-model="text" class="input input__auth input__modal" type="text"></textarea>
      </label>


      <div class="modal__actions">
        <button id="btnClose" @click="closeModal" class="btn btn__main">Отменить</button>
        <button @click="createNewTask" class="btn btn__main">Создать</button>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
body {
  position: relative;
}

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal {
  position: fixed;
  top: calc(50% - 10rem);
  left: calc(50% - 300px);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background-color: $grey30;
  padding: 2rem;
  border-radius: .525rem;
  max-width: 600px;
  width: 100%;

  animation: showElement .5s ease-in-out alternate;

  &__label {
    span {
      display: inline-block;
      margin-bottom: 1rem;
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>