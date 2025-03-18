<template>
    <transition name = "fade" appear>
        <div class="shadow-lg p-12  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border border-gray-200 rounded-[20px] lg:w-[40%] w-[80%] text-red-600">
            <div class="flex flex-col items-center space-y-6 ">
            <div>
        <img src="../assets/svgs/failed.svg" alt="Payment Failed"  width="100" />
        </div>
        <h1>❌ Payment Failed!</h1>
        <p>Something went wrong with your payment. Please try again.</p>
        <RouterLink to="/#" class="bg-gray-300 p-3 w-[80px] text-center rounded-md hover:opacity-50 text-black">Try Again</RouterLink>
          </div>
        </div>
    </transition>
</template>

<script setup>

</script>

<style  scoped>
.fade-enter-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}

</style>