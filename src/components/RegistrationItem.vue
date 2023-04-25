<template>
  <div class="reg-item">
    <label for="" class="reg-item__label">{{name}}</label>
    <slot/>
    <span v-if="error" class="reg-item__error">Ошибка</span>
  </div>
</template>

<script>
export default {
  name: 'RegistrationItem',
  props:{
    name: String,
    error: Boolean,
  },
}
</script>

<style lang='scss'>
.reg-item {
  display: flex;
  align-items: center;
		&__label {
      flex: 0 0 120px;
      &::first-letter{
        text-transform: uppercase;
      }
    }
		&__input {
      margin: 0px 20px 0px 0px;
      height: 25px;
      outline: none;
      width: 200px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 0px 10px;
      &:focus{
        border: 1px solid green;
      }
      &.error{
      border: 1px solid red;
    }
    }
    
		&__error {
      color: red;
    }
}

</style>