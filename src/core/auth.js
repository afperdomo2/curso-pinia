import useProfileStore from "@/stores/profile";

const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "Felipe Perdomo",
        status: "active",
      });
    }, 2000);
  });
};

export const main = async () => {
  const profileStore = useProfileStore();

  const user = await login();
  console.log(user);

  profileStore.username = user.username;
  profileStore.status = user.status;
};
