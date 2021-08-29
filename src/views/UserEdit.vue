<template>
  <div class="container py-5">
    <Userform
      :initial-current-user="currentUser"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import Userform from "./../components/UserForm";
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  components: {
    Userform,
  },
  data() {
    return {
      currentUser: {
        name: "",
        image: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchCurrentUser(id);
  },
  methods: {
    fetchCurrentUser(userId) {
      console.log("fetchUser id", userId);
      const { name, image } = dummyUser.currentUser;
      this.currentUser.name = name;
      this.currentUser.image = image;
    },
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
