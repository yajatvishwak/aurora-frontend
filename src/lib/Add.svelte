<script>
  import axios from "axios";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  let title = "";
  async function create() {
    if (title) {
      const { data } = await axios.post($baseurl + "create-journey", {
        title,
        username: localStorage.getItem("username"),
      });
      if (data.code === "success") {
        toast.success("Journey creation successful");
        push("/home");
      } else {
        toast.error("Sign in failed : " + data.message);
      }
    }
  }
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <Navbar />
  <div class="text-xl mt-10 font-bold">
    Journeys are periodic blogs you can maintain on Aurora
  </div>
  <div class="text-xl mt-10">Add your Journey</div>
  <div class="flex flex-col gap-2">
    <input
      type="text"
      class="input input-bordered w-full mt-3"
      placeholder="Title of your journey"
      name=""
      bind:value={title}
      id=""
    />
    <div class="mt-3 opacity-60">Examples:</div>
    <div class="flex flex-col gap-2">
      <div>> Handling mental health with physical</div>
      <div>> Moving into a new city</div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={create} class="btn bg-indigo-500 mt-2 text-white">
      Start journey
    </div>
  </div>
</section>
