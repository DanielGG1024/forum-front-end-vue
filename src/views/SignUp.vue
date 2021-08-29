<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
      </div>
      <div class="form-label-group mb-2">
        <label for="name">name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          required
          autofocus
        />
      </div>
      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
          autofocus
        />
      </div>
      <div class="form-label-group mb-2">
        <label for="password">password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="password"
          required
          autofocus
        />
      </div>
      <div class="form-label-group mb-2">
        <label for="passwordCheck">passwordCheck</label>
        <input
          id="passwordCheck"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="passwordCheck"
          required
          autofocus
        />
      </div>
      <button class="btn btn-lg btn-primary btn-block mb-3 w-100 mt-2" type="submit">
        Submit
      </button>
      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign in</router-link>
        </p>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });
      console.log("data", data);
    },
  },
};
</script>