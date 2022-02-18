import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
    state: () => ({
        todos: [
            { id: 1, title: 'Todo1', content: 'Hello' },
            { id: 2, title: 'Todo2', content: 'Hello' }
        ]
    }),
    getters: {

    },
    actions: {
        addTodo(todo) {
            this.todos.push({ id: Date.now(), title: todo.title, content: todo.content })
        },
    },
})