<script>
  import { push } from "svelte-spa-router";
  import baseurl from "./url.store";
  import axios from "axios";
  import toast from "svelte-french-toast";
  let username, password;
  async function signin() {
    if (username && password) {
      const { data } = await axios.post($baseurl + "login", {
        username,
        password,
      });
      console.log(data);
      if (data.code === "success") {
        localStorage.setItem("userid", data.data.userid);
        localStorage.setItem("username", username);
        localStorage.setItem("personality", data.data.personality);
        toast.success("Sign in successful");
        push("/home");
      } else {
        toast.error("Sign in failed : " + data.message);
      }
    }
  }
</script>

<section class="bg-slate-100 w-screen h-screen dark:bg-slate-900 p-10">
  <form
    on:submit|preventDefault={signin}
    class="flex flex-col items-center justify-center h-full gap-3"
  >
    <div class="flex flex-col">
      <img src="logo.png" alt="" />
    </div>
    <div class="text-xl font-bold self-start opacity-50">
      Aurora Mental Health
    </div>
    <label for="username" class="label-text self-start">Username</label>
    <input
      type="text"
      bind:value={username}
      placeholder="Username"
      class="input input-bordered w-full"
    />
    <label for="username" class="label-text self-start">Password</label>
    <input
      type="password"
      bind:value={password}
      placeholder="Type here"
      class="input input-bordered w-full"
    />
    <button type="submit" class="btn w-full mt-2 bg-indigo-500 text-white"
      >Log in</button
    >
    <div class="label-text-alt text-gray-500 mt-4">
      Make an account? <b on:click={() => push("/signup")}> Signup here </b>
    </div>
  </form>
</section>
