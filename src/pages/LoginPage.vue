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
import { watch, reactive } from "vue";

const data = reactive({
  email: "",
  password: "",
});

watch(data, (val) => {
  console.log("Changement dans la variable data");
});

const isUserInputValid = (input: string): boolean => {
  const pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return pattern.test(input);
};

//Mail de test à modifier
const testMail = "test.exemple@mail.fr";

if (isUserInputValid(testMail)) {
  console.log("Mail OK");
} else {
  console.log("Mail invalide");
}

const submitHandler = () => {};

const inputHandler = function () {};
</script>
<style></style>
