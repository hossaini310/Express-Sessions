<template>
  <div class="container d-flex flex-column min-vh-100">
    <form @submit.prevent="login">
      <h1 class="text-center my-3">Login</h1>
      <div v-if="!valid" class="row justify-content-center">
        <div class="col-4">
          <p class="alert alert-danger text-center">
            Please provide a valid email and password combination!
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-3">
          <input class="form-control" type="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="col-3">
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="col-1 text-end">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
    <p class="mt-4 text-center">No account? <a href="/register">Register</a> first!</p>
    <p class="mt-auto text-center">&copy; 2022 Robert Baumgartner</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let valid = ref(true);

let email = ref('john@gmail.com');
let password = ref('1234');

const login = async () => {};
</script>

<style lang="scss" scoped></style>
