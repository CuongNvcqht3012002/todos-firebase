<script setup>
const { todo } = defineProps(['todo']);
</script>

<template>
	<div class="card" style="width: 18rem" :data-id="todo.id">
		<div class="card-body">
			<h5 class="card-title">{{ todo.title }}</h5>
			<p class="card-text">
				{{ todo.content }}
			</p>
			<a href="#" class="btn btn-primary">Go detail</a>
		</div>
	</div>
</template>
