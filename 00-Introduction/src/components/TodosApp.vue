<script setup>
import {ref} from 'vue'
import { useTodosStore } from '@/stores/todos'

const store = useTodosStore()
const newTodo = ref('')
const addTodo = () => { 
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div>  
    <div
      v-for="todo in store.todos"
      :key="todo.id"      
      :class="[todo.isFinished ? 'finished' : '']"
    >
      {{ `${ todo.id } - ${ todo.text }` }}
      <input type="checkbox" v-model="todo.isFinished"/>
    </div>

    <form data-test="form" @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style>
.finished {
  color: red;
  text-decoration: line-through;
}
</style>

