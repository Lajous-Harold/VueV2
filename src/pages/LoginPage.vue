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
import { useRouter } from "vue-router";

const router = useRouter();

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

const submitHandler = async () => {
  const result = await fetch("users.json");
  const users = await result.json();
  console.log(users);

  const user = users.find((user: { email: string; password: string }) => user.email === data.email);
  if (!user) {
    alert("Utilisateur inconnu");
    return;
  }
  if (!(user.password === data.password)) {
    alert("Mauvais mot de passe");
    return;
  }
  alert("Connexion réussie");
  router.push("/session/" + user.id);
};

const inputHandler = function () {};
</script>
<style></style>
