import { defineStore } from "pinia";

export default defineStore("profile", {
  state() {
    return {
      id: 1,
      username: "felipe.perdomo",
      avatar: "/avatars/avatar-02.jpg",
      status: "active",
    };
  },
});
