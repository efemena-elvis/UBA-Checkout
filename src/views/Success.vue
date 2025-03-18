<template>
    
  <transition name="fade" appear>
    <div   
    class="shadow-lg p-12  mx-auto border border-gray-200 rounded-[20px] lg:w-[30%] w-[80%] text-green-600">
        <div class="flex flex-col items-center space-y-6 ">
            <div class="py-4"><img src="../assets/svgs/success.svg" alt="Payment Successful" width="100"></div>
            <h1>🎉 Payment Successful!</h1>
                <p>Your transaction was completed successfully.</p>
                <RouterLink to="/#" class="bg-gray-300 text-black p-3 w-[80px] text-center rounded-md hover:opacity-50">Go Home</RouterLink>
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