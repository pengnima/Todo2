<template>
  <div class="fail">
    <todo-item :todoItem="item" v-for="item in needDoTodos" :key="item.id" />
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
    ...mapGetters(["needDoTodos"])
  },
  methods: {}
};
</script>

<style></style>