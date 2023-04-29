<template>
  <div class="flex w-screen h-full">
    <WelcomeBanner />
    <div class="flex align-middle items-center basis-[60vw] bg-[#FFFFFF]">
      <div class="m-auto w-[35%] flex-col">
        <div class="font-bold text-2xl">
        Sign In to WisdomCircle
        </div>
        <div>
          <span class="font-normal text-base">Don't have an account? </span>
          <NuxtLink to="signIn" class="text-[#2558E5] font-semibold">Sign Up</NuxtLink>
        </div>
        <form action="" method="get" class="flex flex-col items-start mt-5">
          <input type="text" placeholder="Email or Mobile Number" name="email_or_number" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <input type="password" name="password" id="" placeholder="Password" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <button type="submit" class="bg-[#F1C12B] font-semibold text-[18px] h-[48px] w-[100%] rounded-[5px] mt-6">Sign In</button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
    data() {
        return {
            users: []
        };
    },
    created() {
        this.fetchData();
    },
    methods: ({
        async fetchData() {
            await fetch("http://localhost:3001/users")
                .then(res => res.json())
                .then(data => this.users = data);
        },
    }),
}

</script>

<style>

</style>