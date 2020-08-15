<template>
  <div class="container">
    <div class="todo-card">
      <p class="paragraph-heading">
        TODO
      </p>
      <div style="margin-top: 16px;" />
      <input
        v-model="userInput"
        type="text"
        class="todo-input"
        placeholder="Wpisz rzecz.."
      >
      <div style="margin-top: 16px;" />
      <button
        class="todo-button"
        @click="addTodo(userInput)"
      >
        Dodaj
      </button>
      <div style="margin-top: 16px;" />
      <div>
        <ul>
          <li
            v-for="(item, index) in todos"
            :key="`${item}-${index}`"
          >
            <button
              class="todo-remove-button "
              @click="removeTodo(index)"
            >
              X
            </button>&nbsp;{{ item }}
            <div style="margin-top: 4px;" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: null,
      todos: ['Zjeść kanapkę', 'Wstawić post na c-grupę']
    }
  },
  methods: {
    addTodo(item) {
      if (this.todos.length < 8 && this.userInput !== null) {
        this.todos.push(item)
        this.userInput = null
      }
    },
    removeTodo(index) {
      this.todos = this.todos.filter(x => x !== this.todos[index])
    }
  }
}
</script>
