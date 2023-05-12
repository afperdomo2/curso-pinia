import { defineStore } from "pinia";
import useProfileStore from "./profile";

const profileStore = useProfileStore();

export default defineStore("contacts", {
  state() {
    return {
      contacts: [
        {
          id: profileStore.id,
          name: profileStore.username,
          avatar: profileStore.avatar,
        },
        { id: 2, name: "Jason", avatar: "/avatars/avatar-04.jpg" },
        { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
        { id: 4, name: "Margaret", avatar: "/avatars/avatar-01.jpg" },
      ],
    };
  },
  getters: {
    getContacts: (state) => () => {
      return state.contacts;
    },

    getContactById: (state) => (contactId) => {
      return state.contacts.find(({ id }) => id === contactId);
    },
  },
});
