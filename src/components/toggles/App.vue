<template>
   <h1>{{ message }}</h1>
   <togl-bloc>
   <togl-bloc1>
   <togl-classic>
</template>

<script>
export default {
	data() {
		return {
			message: "This is some text"
		}
	}
}
</script>

<style>
#app>div {
   border: dashed black var(--s1);
   display: inline-block;
   margin: 10px;
   padding: 10px;
   background-color: lightgreen;
}
</style>
