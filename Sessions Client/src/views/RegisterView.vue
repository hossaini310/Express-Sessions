<template>
  <div class="container d-flex flex-column min-vh-100">
    <form @submit.prevent="register">
      <h1 class="text-center my-3">Register</h1>
      <div v-if="message.length > 0" class="row justify-content-center">
        <div class="col-4">
          <p class="alert alert-danger text-center">
            {{ message }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-3">
          <input class="form-control" type="text" v-model="name" placeholder="Name" required />
        </div>
        <div class="col-3">
          <input class="form-control" type="text" v-model="email" placeholder="Email" required />
        </div>
        <div class="col-2">
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="col-1">
          <button class="btn btn-primary" type="submit">Register</button>
        </div>
      </div>
    </form>

    <p class="mt-4 text-center">Have an account? <a href="/login">Login</a> first!</p>
    <p class="mt-auto text-center">&copy; 2022 Robert Baumgartner</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

let name = ref('');
let email = ref('john@gmail.com');
let password = ref('1234');
let message = ref('');

const register = async () => {
  try {
    const { data } = await axios.post('/api/register', {
      email: email.value,
      password: password.value,
      name: name.value,
    });
    message.value = data;
  } catch (error) {
    if (error.response.status === 404) message.value = 'Server antwortet nicht';
    else message.value = error.response.data;
  }
};
</script>