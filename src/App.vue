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
</script>

<style>
#app>div {
   border: dashed black var(--s1);
   display: inline-block;
   margin: var(--s10);
   padding: var(--s10);
   background-color: lightgreen;
}
</style>
