

<script setup>


</script>

<template>

   
<nav class="flex gap-5 py-8  px-4 bg-[#84d79b] items-center  text-white">
    <router-link to="/success" class="text-sm">Success</router-link>
    <router-link to="/cancelled" class=" text-sm ">Cancelled</router-link>
    <router-link to="/failed" class=" text-sm  ">Failed</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>


</style>
