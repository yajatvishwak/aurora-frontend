<script>
  import { push } from "svelte-spa-router";
</script>

<section class="bg-slate-100 w-screen h-screen dark:bg-slate-900 p-10">
  <form class="flex flex-col items-center justify-center h-full gap-3">
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
      class="input input-bordered w-full"
    />
    <label for="name" class="label-text self-start opacity-50">Name</label>
    <input type="text" placeholder="Name" class="input input-bordered w-full" />
    <label for="username" class="label-text self-start opacity-50"
      >Password</label
    >
    <input
      type="password"
      placeholder="Type here"
      class="input input-bordered w-full "
    />
    <div class="btn w-full">Log in</div>
    <div class="label-text-alt text-gray-500 mt-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      Already have an account?
      <b on:click={() => push("/signin")}> Signin here </b>
    </div>
  </form>
</section>
