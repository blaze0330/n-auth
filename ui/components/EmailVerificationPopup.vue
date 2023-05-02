<template>
  <div v-if="show" class="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-10 absolute flex items-center justify-center sm:pt-[30px]">
    <div class="w-[85%] h-[350px] md:w-[486px] md:h-[252px] bg-white rounded-[8px] text-[#404555]">
      <div class="flex justify-between p-[24px] pb-[16px]">
        <div class="text-[24px] font-semibold">
          Verify Email
        </div>
        <div>
          <button @click="$emit('close')" class="rounded-[12px] h-[24px] w-[24px] bg-[#F7F7F7] text-[#606880]">
            X
          </button>
        </div>
      </div>
      <hr width="100%" />
      <p class="text-[16px] pl-[24px] pt-[16px] pr-[72px]">Please verify your account. We have sent an email to <span clas="font-semibold">{{ email }}</span>. If you are unable to find the verification email please contact us at: <span class="font-semibold">+91-9380644532</span></p>
      <nuxt-link class="text-[blue] mt-[20px] m-auto block w-fit" to="#" @click.native="handleResend">Resend Verification Email</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    show: Boolean,
    email: String
  },
  methods: {
    async handleResend() {
      try {
        const response = await axios.post(`http://localhost:3001/resend-verification-code`, {email: this.email})
        
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>
<style>
</style>