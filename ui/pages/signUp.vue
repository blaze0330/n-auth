<template>
  <div class="flex-col items-center md:flex md:flex-row md:w-full md:h-full ">
    <img src="./../assets/Logo-mobile.svg" class="block mt-10 md:hidden w-[150px] h-[42px] m-auto" />
    <WelcomeBanner />
    <div class="mt-9 md:flex md:align-middle md:items-center md:basis-[60vw] bg-[#FFFFFF]">
      <div class="m-auto w-[384px] flex-col">
        <div class="font-bold text-2xl">
        Create an account
        </div>
        <div>
          <span class="font-normal text-base">Already have an account? </span>
          <NuxtLink to="signIn" class="text-[#2558E5] font-semibold">Sign In</NuxtLink>
        </div>
        <form class="flex flex-col items-start mt-5" @submit.prevent="submitForm">
          <input type="text" placeholder="First Name" name="first_name" v-model="form.first_name" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <input type="text" placeholder="Last Name" name="last_name" v-model="form.last_name" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <input type="email" name="email" v-model="form.email" placeholder="Email Address" class="w-[100%] mt-3 border-red border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500">
          <!-- code for Phone number and country code -->
          <PhoneInput 
            @phone="handlePhone"
            @dialing-code="handleDialingCode"
          />
          <!-- code for password and showPassword eye -->
          <div class="flex relative w-full">
            <input v-if="isHidden" type="password" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" placeholder="Password" name="password" v-model="form.password" />
            <input v-else type="text" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" placeholder="Password" name="password" v-model="form.password" />
            <img v-if="isHidden" src="./../assets/ShowPassword.svg" v-on:click="setIsHidden(isHidden)" class="absolute right-[10px] top-[30px]" />
            <img v-else src="./../assets/HidePassword.svg" v-on:click="setIsHidden(isHidden)" class="absolute right-[11px] top-[25px]"/>
          </div>
          <div class="text-[12px] text-[#404555] mt-2">Password must be at least 8 characters</div>
          <div class="text-[12px] mt-4">By clicking Sign Up you are indicating that you have read and acknowledged the <NuxtLink href="#" class="c text-[#2558E5]">Terms of Service</NuxtLink> and <NuxtLink href="#" class="c text-[#2558E5]">Privacy Notice</NuxtLink></div>
          <button type="submit" class="bg-[#F1C12B] font-semibold text-[18px] h-[48px] w-[100%] rounded-[5px] mt-6">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default({
    data() {
      return {
            users: [],
            isHidden: true,
            form: {
              first_name: '',
              last_name: '',
              email: '',
              dialing_code: '+93', // default is AF
              phone_number: '',
              password: '',
            },
        };
    },
    methods: ({
      setIsHidden(isHidden) {
          console.log(isHidden);
          this.isHidden = !isHidden;
        },
        async submitForm() {
          console.log("Onsubmit was called")
          try {
            const response = await axios.post('http://localhost:3001/register', {
              formData: this.form
            }) 
            console.log(response);
            if (response.data.success) {
              this.$router.push('/signIn');
            } else {
              console.log("Some error occurred");
            }
            // console.log("response => ", response.data);
          } catch (error) {
            console.log(error);
          }
        },
        handlePhone(value) {
          this.form.phone_number = value;
          // console.log(this.phone);
        },
        handleDialingCode(value) {
          this.form.dialing_code = value;
          // console.log(this.dialingCode)
        }
      }
    )
  })

</script>

<style>

</style>