
<script setup>
import { useDark, useToggle } from '@vueuse'/core
const isDark = useDark({
   selector: 'body',
   attribute: 'colo-scheme',
   valueDark: 'custom-dark',
   valueLight: 'custom-light',
})
const toggleDark = useToggle(isDark)
</script>

<template>
   <p>isDark: {{ isDark }}</p>
   <button>
      @click="toggleDark" ()"
      class="px-4 py-2 text-white bg-green-500 rounded dark:bg-purple-600"
      Toggle Dark Mode
   </button>
</template>

<style lang="css" scoped></style>