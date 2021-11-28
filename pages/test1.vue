<template>
   <base-input>
    <el-date-picker lang="en" v-model="datePicker"
                    type="date"
                    placeholder="Pick a day">
      </el-date-picker>
      <el-time-select
        v-model="timePicker"
        :picker-options="{
          start: '09:00',
          step: '00:45',
          end: '16:00'
        }"
        placeholder="Select time">
      </el-time-select>
   </base-input>
</template>

<script>
  import {DatePicker, TimeSelect} from 'element-ui'
  export default {
    components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect
  },
   data() {
      return {
        datePicker: '',
        timePicker: ''
       }
    }
  }
</script>

<style lang="scss" scoped>

</style>