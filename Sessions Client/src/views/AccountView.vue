<template>
  <div id="app" class="container d-flex flex-column align-items-center min-vh-100">
    <h1 class="my-3">{{ userStore.user.name }}'s Account</h1>
    <div class="mx-auto d-block">
      <router-link to="/">Home</router-link> |
      <router-link @click="userStore.logout()" to="/logout">Logout</router-link>
    </div>
    <h5 v-if="secret.length > 0" class="my-3 my-3 text-danger">Your secret: {{ secret }}</h5>
    <p>That's all!</p>
    <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();

const secret = ref('');

onMounted(() => {
  const data = axios.get(`/api/users/${userStore.user.id}/secret`);
  data.then(({ data }) => {
    secret.value = data;
  });
});
</script>
