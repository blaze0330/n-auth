<template>
  <div class="flex w-full h-full">
    <WelcomeBanner />
    <div class="flex align-middle items-center basis-[60vw] bg-[#FFFFFF]">
      <div class="m-auto w-[35%] flex-col">
        <div class="font-bold text-2xl">
        Create an account
        </div>
        <div>
          <span class="font-normal text-base">Already have an account? </span>
          <NuxtLink to="signIn" class="text-[#2558E5] font-semibold">Sign In</NuxtLink>
        </div>
        <form action="" method="post" class="flex flex-col items-start mt-5">
          <input type="text" placeholder="First Name" name="first_name" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <input type="text" placeholder="Last Name" name="last_name" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <input type="email" name="email" placeholder="Email Address" class="w-[100%] mt-3 border-red border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <!-- code for Phone number and country code -->
          <PhoneInput/>
          <input type="password" name="password" id="" placeholder="Password" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <div class="text-[12px] text-[#404555] ">Password must be at least 8 characters</div>
          <div class="text-[12px] mt-4">By clicking Sign Up you are indicating that you have read and acknowledged the <NuxtLink href="#" class="c text-[#2558E5]">Terms of Service</NuxtLink> and <NuxtLink href="#" class="c text-[#2558E5]">Privacy Notice</NuxtLink></div>
          <button type="submit" class="bg-[#F1C12B] font-semibold text-[18px] h-[48px] w-[100%] rounded-[5px] mt-6">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default({

  })

</script>

<style>

</style>