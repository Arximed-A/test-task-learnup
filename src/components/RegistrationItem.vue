<template>
  <div class="reg-item">
    <label for="" class="reg-item__label">{{name}}</label>
    <slot/>
    <span v-show="error" class="reg-item__error">Ошибка</span>
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
  // justify-content: space-between;
		&__label {
      flex: 0 0 120px;
      text-transform: capitalize;
    }
		&__input {
      margin: 0px 20px 0px 0px;
      height: 25px;
      outline: none;
      width: 200px;
    }
		&__error {
      color: red;
    }
}

</style>