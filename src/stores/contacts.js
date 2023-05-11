import { defineStore } from "pinia";

export default defineStore("contacts", {
  state() {
    return {
      contacts: [
        { id: 2, name: "Jason", avatar: "/avatars/avatar-04.jpg" },
        { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
      ],
    };
  },
});
