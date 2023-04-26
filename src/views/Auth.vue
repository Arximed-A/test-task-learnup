<template>
  <form action="GET">
    <div class="login">
      <section class="login__container">
        <h1 class="login__title">Войдите в аккаунт</h1>

        <div class="login__item">
          <label for="email" class="login__item-name">Email</label>
          <div class="login__wrapper">
            <input
              v-model="email"
              id="email"
              type="email"
              class="login__item-field"
            />
          </div>
        </div>

        <div class="login__item">
          <label for="password" class="login__item-name">Password</label>
          <div class="login__wrapper">
            <input
              v-model="password"
              id="password"
              type="password"
              class="login__item-field"
            />
          </div>
        </div>

        <p v-show="error" class="login__error">Пользователь не найден</p>

        <button @click.prevent="checkUser" class="login__btn">Войти</button>

        <span class="login__text">
          Нет аккаунта?
          <router-link to="reg" class="login__link"
            >Зарегистрироваться</router-link
          >
        </span>

      </section>
    </div>
  </form>
</template>

<script>
import router from "@/router";
export default {
  name: "Auth",
  data() {
    return {
      error: false,
      email: "",
      password: "",
    };
  },
  methods: {
    checkUser() {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const { password, email } = savedUser;
      if (password === this.password && email === this.email) {
        router.push("home");
      } else {
        this.error = true;
      }
    },
  },
  mounted() {
    console.log("подсказонька");
    console.log(JSON.parse(localStorage.getItem("user")));
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: teal;
  &__container {
    background: white;
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
  }
  &__title {
    margin: 0px 0px 30px 0px;
    text-align: center;
  }
  &__item {
    margin: 0px 0px 10px 0px;
    display: flex;
    align-items: center;
  }
  &__item-name {
    flex: 1 1 150px;
  }
  &__wrapper {
    flex: 0 1 300px;
  }
  &__item-field {
    height: 25px;
    width: 100%;
    outline: none;
    padding: 0px 10px;
  }
  &__error {
    margin: 0px 0px 10px 0px;
    color: red;
    text-align: center;
  }
  &__btn {
    margin: 0px auto 30px;
    display: block;
    text-transform: uppercase;
    padding: 5px 20px;
    cursor: pointer;
  }
  &__text {
    display: block;
    text-align: center;
    margin: 0px 0px 15px 0px;
  }
  &__link {
    color: blue;
  }
}
</style>
