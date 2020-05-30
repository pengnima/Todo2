<template>
  <div class="completed">
    <todo-item :todoItem="item" v-for="item in doneTodos" :key="item.id" />
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
    ...mapGetters(["doneTodos"])
  },
  methods: {}
};
</script>

<style></style>