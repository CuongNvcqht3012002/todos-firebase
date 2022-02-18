<script setup>
import Item from './components/Item.vue'
import { ref } from 'vue'
import { useTodosStore } from './stores/todosStore'

const title = ref('')
const content = ref('')

const { todos, addTodo } = useTodosStore()

function onSubmit(e) {
	e.preventDefault()
	addTodo({ title: title.value, content: content.value })
}
</script>

<template>
	<form class="row g-3 w-50 mx-auto" @submit="onSubmit">
		<div class="">
			<label for="inputEmail4" class="form-label">Title</label>
			<input class="form-control" v-model="title" />
		</div>
		<div class="">
			<label class="form-label">Content</label>
			<textarea class="form-control" v-model="content"></textarea>
		</div>
		<div class="col-12">
			<button type="submit" class="btn btn-primary">Add</button>
		</div>
	</form>
	<div class="container">
		<div class="d-flex mx-auto my-5 flex-nowrap justify-content-around">
			<div v-for="todo in todos" :key="todo.id">
				<item :todo="todo" />
			</div>
		</div>
	</div>
</template>
