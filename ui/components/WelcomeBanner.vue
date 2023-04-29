<template>
  <div class="hidden md:flex bg-[#404555] basis-[40vw] text-[#FFFFFF] lg:pb-[20px] xl:pb-[50px]">
    <!-- Left part of the welcome banner the one with the avatar. -->
    <div class="h-full basis-[30%] flex flex-col-reverse">
      <img class="w-[165px] h-[219px] mb-0" src="./../assets/Avatar.svg" />
    </div>
    <!-- Right part of the welcome banner. The one with logo. -->
    <div class="basis-[70%] flex-col justify-around">
      <img src="./../assets/Logo.svg" class="w-[8rem] h-[8rem] lg:w-[217px] lg:h-[153px] mt-32" alt="">
      <div>
        <p class="leading-8 font-['Poppins'] font-bold mt-36 text-[24px]">Welcome Back!</p>
        <div class="w-[75%]">
          Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.
        </div>
        <!-- Slider dots -->
        <div class="flex mt-12">
          <span class="block h-[5px] w-[25px] rounded-full bg-white ml-1"></span>
          <span class="block h-[5px] w-[5px] rounded-full bg-slate-300 ml-1"></span>
          <span class="block h-[5px] w-[5px] rounded-full bg-slate-300 ml-1"></span>
        </div>
        <div class="mt-16 text-xs w-[75%]">
          Please contact us at +91-9380644532 if you need any assistance.

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

</script>

<style scoped>

</style>