<template>
  <div class="all">
    <todo-item :todoItem="item" v-for="item in allTodos" :key="item.id" />
  </div>
</template>

<script>
/**
  'allTodos',
  'doneTodos',
  'needDoTodos',
 */
import TodoItem from "../components/TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {}
};
</script>

<style></style>