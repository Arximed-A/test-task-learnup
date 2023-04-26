<template>
  <section class="home">
    <h1 class="home__title">Вы авторизовались!</h1>
    <h2 class="home__subtitle">Поздравляю.</h2>
    <router-link to="/" class="home__link">Выход</router-link>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  background: rgba(0, 204, 255, 0.705);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
  }
  &__subtitle {
    margin: 0px 0px 50px 0px;
  }
  &__link {
    font-size: 20px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease 0s;
    &:hover {
      color: blue;
    }
  }
}
</style>
