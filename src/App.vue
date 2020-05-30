<template>
  <div id="app">
    <todo />
  </div>
</template>

<script>
import Todo from "./views/Todo.vue";
export default {
  components: {
    Todo
  }
};
</script>

<style>
@import url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
body,
html {
  width: 100%;
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
input,
input:focus {
  background: none;
  outline: none;
  border: none;
}
</style>
