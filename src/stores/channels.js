import { defineStore } from "pinia";
import useMessagesStore from "./messages";

export default defineStore("channels", {
  state() {
    return {
      channels: [
        { id: 1, name: "General", messages: null },
        { id: 2, name: "Emergencias", messages: null },
        { id: 3, name: "Anuncios", messages: null },
        { id: 4, name: "Proyecto 1", messages: null },
        { id: 5, name: "Non-work", messages: null },
        { id: 6, name: "Atención a clientes", messages: null },
      ],
    };
  },
  getters: {
    getChannels: (state) => (search) => {
      const messagesStore = useMessagesStore();

      return state.channels
        .filter(({ name }) =>
          name.toLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((channel) => {
          const unreadMessages = messagesStore.countUnredMessagesByChannelId(
            channel.id
          );
          return {
            ...channel,
            messages: unreadMessages,
          };
        });
    },
  },
});
