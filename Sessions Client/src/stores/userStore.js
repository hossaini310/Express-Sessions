import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {
        id: '',
        name: '',
      },
    };
  },
  getters: {
    isAuthenticated: (state) => state.user.id != ''
  },
  actions: {
    saveUserData(id, name) {
      this.user.id = id;
      this.user.name = name;
    },
    async logout() {
      await axios.get('/api/logout');
      this.user.id = '';
      this.user.name = '';
    },
  },
});
