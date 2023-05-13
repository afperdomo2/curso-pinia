import { defineStore } from "pinia";

export default defineStore("profile", {
  state() {
    return {
      id: 1,
      username: null,
      avatar: "/avatars/avatar-02.jpg",
      status: null,
    };
  },
});
