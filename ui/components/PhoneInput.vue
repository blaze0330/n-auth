<template>
  <div class="flex flex-row w-full">
    <select name ="country-list" class="focus:outline-slate-500 border-[#DCDEE5] border-[1px] rounded-[4px] h-[48px] w-[88px] relative top-3 mr-2 pl-4" @change="handleSelect" >
      <option v-for="country in allCountries" :key="country" :value="country.dial_code">{{ country.emoji }}</option>
    </select>
    <input type="tel" name="phone" id="phone" class="w-[100%] mt-3 border-[#DCDEE5] border-[1px] bg-[#FFFFFF] h-[48px] rounded-[4px] px-[12px] py-[16px] focus:outline-slate-500" @input="handleInput" placeholder="Mobile Number">
  </div>
</template>

<script>
  import countries from './../assets/countries.json'; 
  export default {
    data() {
      return {
        allCountries: countries,
      }
    },
    methods: {
      handleInput(event) {
        this.$emit('phone', event.target.value);
      },
      handleSelect(event) {
        this.$emit('dialing-code', event.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>