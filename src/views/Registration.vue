<template>
  <section class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <form action="POST" class="registration__form">
      <div class="registration__item">
        <RegistrationItem name="Логин">
          <input v-model="login" type="text" class="reg-item__input" />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="Email">
          <input v-model="email" type="email" class="reg-item__input" />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="пароль">
          <input v-model="password" type="password" class="reg-item__input" />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="телефон">
          <input v-model="number" type="text" class="reg-item__input" />
        </RegistrationItem>
      </div>
      <button @click.prevent="saveUser" class="registration__btn">зарегистрироваться</button>
      <router-link class="registration__link" to="/">Войти</router-link>
    </form>
  </section>
</template>

<script>
import RegistrationItem from "../components/RegistrationItem.vue";

export default {
  name: "Registration",
  components: {
    RegistrationItem,
  },
  data() {
    return {
      login:'',
      loginError: false,
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      phone: "",
      phoneError: false,
    };
  },
  watch: {
    number() {
      const rule = /[0-9\\.,:]/;
      const result = rule.test(this.phone);
      console.log(result);
      // if (
      //   (this.number.length === 1 && this.number[0] === "8") ||
      //   this.number[0] === "7"
      // ) {
      //   return (this.number = "+7");
      // }
      // if (this.number.length === 2) {
      //   return (this.number = this.number + "(");
      // }
      // if (this.number.length === 6) {
      //   return (this.number = this.number + ") ");
      // }
      // if (this.number.length === 11 || this.number.length === 14) {
      //   return (this.number = this.number + "-");
      // }
    },
  },
  methods:{
    saveUser(){
      const user = {
        login: this.login,
        email: this.email,
        password: this.password,
        phone: this.phone,
      }
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
};
</script>

<style lang="scss" scoped>
.registration {
  height: 100vh;
  background: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    margin: 0px 0px 50px 0px;
  }
  &__form {
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    width: 500px;
    padding: 30px;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
  &__item {
    margin: 0px 0px 20px 0px;
  }
  &__btn {
    margin: 0px auto 10px;
    display: block;
    text-transform: uppercase;
    padding: 5px 20px;
    cursor: pointer;
  }
  &__link{
    color: blue;
   
  }
}
</style>
