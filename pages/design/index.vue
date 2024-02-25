<script setup>

const buttonDesignDisabled = ref(false);

let responseResult = ref(null);

const change = async () => {
  buttonDesignDisabled.value = !buttonDesignDisabled.value;

  responseResult = await getData('https://jsonplaceholder.typicode.com/posts/1');

  setTimeout(() => {
    buttonDesignDisabled.value = !buttonDesignDisabled.value;
  }, 2000)
}

const getData = async (url) => {
  let data = ref(null);
  let res = await fetch(url);

  if (res.status !== 200) return;

  return res.json();
}

definePageMeta({
  layout: "none",
  middleware: 'auth',
})
</script>

<template>
  <div class="wrapper container">
    <pre> {{ responseResult ? responseResult : 'No data now, do request' }} </pre>
    <button id="buttonDesign" :disabled="buttonDesignDisabled" @click="change" class="button-design">
      Login
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  padding: 15rem 5rem;

  background-color: #FFFFFF;
}

.button-design {
  padding: 20px 45px;
  border-radius: 50px;
  font-weight: 400;
  font-size: 35px;
  color: #fff;

  background-color: #171516;

  transition: all .1s ease-in-out;

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .75);
    background: #393638;
  }

  &:active {
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, .75);
  }

  &:disabled {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #464646;
    cursor: not-allowed;
    color: #6d6d6d;
  }
}

pre {
  font-size: 14px;
  color: #000000;
}
</style>