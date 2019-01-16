<template>
  <div class="todo container row mx-auto content-bg">
    <div class="col-12 pt-3">
    <TodoList />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>
