<template>
  <section class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <form action="POST" class="registration__form">
      <div class="registration__item">
        <RegistrationItem name="Логин" :error="loginError">
          <input
            v-model="login"
            type="text"
            class="reg-item__input"
            :class="{ error: loginError }"
          />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="Email" :error="emailError">
          <input
            v-model="email"
            type="email"
            class="reg-item__input"
            :class="{ error: emailError }"
          />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="пароль" :error="passwordError">
          <input
            v-model="password"
            type="password"
            class="reg-item__input"
            :class="{ error: passwordError }"
          />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="Повтор пароля" :error="passwordError">
          <input
            v-model="passwordRepeat"
            type="password"
            class="reg-item__input"
            :class="{ error: passwordError }"
          />
        </RegistrationItem>
      </div>
      <div class="registration__item">
        <RegistrationItem name="телефон" :error="phoneError">
          <input
            @keypress.prevent="changePhone"
            v-model="phone"
            type="text"
            class="reg-item__input"
            :class="{ error: phoneError }"
          />
        </RegistrationItem>
      </div>
      <button @click.prevent="checkUser" class="registration__btn">
        зарегистрироваться
      </button>
      <div class="registration__link">
        <router-link class="registration__link" to="/">Войти</router-link>
      </div>
    </form>
  </section>
</template>

<script>
import router from '@/router';
import RegistrationItem from "../components/RegistrationItem.vue";

export default {
  name: "Registration",
  components: {
    RegistrationItem,
  },
  data() {
    return {
      login: "",
      loginError: false,
      email: "",
      emailError: false,
      password: "",
      passwordRepeat: "",
      passwordError: false,
      phone: "",
      phoneError: false,
    };
  },
  watch:{
    phone(){
      // if(this.phone.length === 2){
      //   this.phone = this.phone + '('
      // }
    }
  },
  methods: {
    checkUser() {
      this.checkLogin();
      this.checkEmail();
      this.checkPassword();
      this.checkPhone();
      if (
        !this.loginError &&
        !this.emailError &&
        !this.passwordError &&
        !this.phoneError
      ) {
        this.saveUser();
      }
    },
    saveUser() {
      const user = {
        login: this.login,
        email: this.email,
        password: this.password,
        phone: this.phone,
      };
      localStorage.setItem("user", JSON.stringify(user));
      router.push('/home')
    },

    changePhone(event) {
      const key = event.key;
      const rule = /[\d()+-]/;
      const result = rule.test(String(key));
      if(result){
        if(this.phone.length === 0 && +key === 8 || this.phone.length === 0 && +key === 7){
          return this.phone = '+7('
        }
        if(this.phone.length === 1 && +key === 7){
          return this.phone = '+7('
        }
        if(this.phone.length === 5){
          return this.phone = this.phone + key + ') ';
        }

        if(this.phone.length === 10 || this.phone.length === 13){
          return this.phone = this.phone + key + '-';
        }
        this.phone = this.phone + key;
      }
    },
    
    checkLogin() {
      const rule = /^[a-zA-Z]/;
      const result = rule.test(String(this.login));
      result ? (this.loginError = false) : (this.loginError = true);
    },
    checkEmail() {
      const rule =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      const result = rule.test(String(this.email).toLowerCase());
      result ? (this.emailError = false) : (this.emailError = true);
    },
    checkPassword() {
      this.password === this.passwordRepeat && this.password.length !== 0
        ? (this.passwordError = false)
        : (this.passwordError = true);
    },
    checkPhone() {
      const rule = /^(\+7|8)\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
      const result = rule.test(String(this.phone).toLowerCase());
      result ? (this.phoneError = false) : (this.phoneError = true);
    },
  },
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
    margin: 0px auto 30px;
    display: block;
    text-transform: uppercase;
    padding: 5px 20px;
    cursor: pointer;
  }
  &__link {
    text-align: center;
    & > a {
      color: blue;
    }
  }
}
</style>
