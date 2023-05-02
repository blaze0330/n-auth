<template>
  <EmailVerificationPopup :show="showPopUp" :email="$route.query.email" @close="showPopUp=false" />
  <div class="flex-col items-center h-[100vh] pt-10 md:flex md:flex-row md:w-full md:h-full">
    <img src="./../assets/Logo-mobile.svg" class="block md:hidden w-[150px] h-[42px] m-auto" />
    <WelcomeBanner />
    <div class="mt-9 md:flex md:align-middle md:items-center md:basis-[60vw] bg-[#FFFFFF]">
      <div class="m-auto w-[384px] flex-col">
        <div class="font-bold text-2xl">
        Sign In to WisdomCircle
        </div>
        <div>
          <span class="font-normal text-base">Don't have an account? </span>
          <NuxtLink to="signUp" class="text-[#2558E5] font-semibold">Sign Up</NuxtLink>
        </div>
        <form class="flex flex-col items-start mt-5" @submit.prevent="onSubmit">
          <input type="text" placeholder="Email or Mobile Number" name="email_or_number" v-model="inputValue" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" @blur="validateEmailOrPhone" />
          <p v-if="emailOrPhoneError" class="text-[red]">{{ emailOrPhoneError }}</p>
          <div class="flex relative w-full">
            <input v-if="isHidden" type="password" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" placeholder="Password" name="password" v-model="password" />
            <input v-else type="text" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" placeholder="Password" name="password" v-model="password" />
            <img v-if="isHidden" src="./../assets/ShowPassword.svg" v-on:click="setIsHidden(isHidden)" class="absolute right-[10px] top-[30px]" />
            <img v-else src="./../assets/HidePassword.svg" v-on:click="setIsHidden(isHidden)" class="absolute right-[11px] top-[25px]"/>
          </div>
          <div class="relative w-full h-8 text-center items-center flex">
            <NuxtLink to="#" class="text-[#2558E5] font-semibold absolute right-0">Forgot password</NuxtLink>
          </div>
          <button :disabled="isFormInvalid" type="submit" class="mt-[200px] bg-[#F1C12B] font-semibold text-[18px] h-[48px] w-[100%] rounded-[5px] md:mt-6">Sign In</button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            // users: [],
            isHidden: true,
            inputValue: '',
            password: '',
            showPopUp: false,
            emailOrPhoneError: '',
            isFormInvalid: true,
        };
    },
    mounted() {
      if (this.$route.query.registered === 'true') {
        console.log("hi")
        this.showPopUp = true;
      }
    },
    methods: ({
        async onSubmit() {
          // console.log("inputValue => ", this.inputValue);
          // console.log("password = > ", this.password)
            try {
              const response = await axios.post("http://localhost:3001/signIn", {
              phoneOrEmail: this.inputValue, password: this.password
            })
            if (!response.success) {
              this.emailOrPhoneError = "User with these credentials doesn't exist."
            } else {
              console.log(response);
            }
            } catch (error) {
              console.log(error);
            }
        },

        validateEmailOrPhone() {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.inputValue) || (this.inputValue.length==10 && !isNaN(+this.inputValue))) {
            this.isFormInvalid = false;
            this.emailOrPhoneError = "";
          } else {
            this.isFormInvalid = true;
            this.emailOrPhoneError = 'Please enter a valid input.';
          }
        },

        setIsHidden(isHidden) {
          console.log(isHidden);
          this.isHidden = !isHidden;
        },
    }),
}

</script>

<style>

</style>