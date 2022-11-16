<script>
  import { push } from "svelte-spa-router";
  import axios from "axios";
  import baseurl from "./url.store";
  import toast from "svelte-french-toast";

  let username, name, password;
  async function signup() {
    if (name && username && password) {
      const { data } = await axios.post($baseurl + "signup", {
        username,
        password,
        name,
      });
      if (data.code === "success") {
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("username", username);
        toast.success("Sign up successful");
        push("/personality");
      } else {
        toast.error("Sign up failed : " + data.message);
      }
    }
  }
</script>

<section class="bg-slate-100 w-screen h-screen dark:bg-slate-900 p-10">
  <form
    on:submit|preventDefault={signup}
    class="flex flex-col items-center justify-center h-full gap-3"
  >
    <div class="flex flex-col">
      <img src="logo.png" alt="" />
    </div>
    <div class="text-xl font-bold self-start opacity-50">
      Aurora Mental Health
    </div>
    <label for="username" class="label-text opacity-50 self-start"
      >Username</label
    >
    <input
      type="text"
      placeholder="Username"
      bind:value={username}
      class="input input-bordered w-full"
    />
    <label for="name" class="label-text self-start opacity-50">Name</label>
    <input
      type="text"
      bind:value={name}
      placeholder="Name"
      class="input input-bordered w-full"
    />
    <label for="username" class="label-text self-start opacity-50"
      >Password</label
    >
    <input
      type="password"
      placeholder="Type here"
      bind:value={password}
      class="input input-bordered w-full "
    />
    <button type="submit" class="btn w-full mt-2 bg-indigo-500 text-white"
      >Sign up</button
    >
    <div class="label-text-alt text-gray-500 mt-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      Already have an account?
      <b on:click={() => push("/signin")}> Signin here </b>
    </div>
  </form>
</section>
