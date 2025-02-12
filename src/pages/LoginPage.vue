<template>
  <main>
    <h1>LoginPage</h1>
    <form @submit.prevent="submitHandler">
      <section>
        <article>
          <label for="email"></label>
          <input
            v-model="data.email"
            type="email"
            id="email"
            placeholder="Entrez votre email"
            class="input" />
        </article>
        <article>
          <label for="password"></label>
          <input
            v-model="data.password"
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            class="input" />
        </article>
      </section>
      <section>
        <button type="submit" class="button is-primary">Valider</button>
        <button type="reset" class="button is-danger">Reset</button>
      </section>
    </form>
  </main>
</template>

<script setup lang="ts">
import { watchEffect, reactive } from "vue";
import InputValidator from "../utils/InputValidator.ts";

const data = reactive({
  email: "",
  password: "",
});

watchEffect(() => {
  console.log(data.email, InputValidator(data.email, "email"));
});

watchEffect(() => {
  console.log(data.password, InputValidator(data.password, "password"));
});

const submitHandler = () => {};

const inputHandler = function () {};
</script>
<style></style>
