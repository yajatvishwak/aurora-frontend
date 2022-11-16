<script>
  import { push } from "svelte-spa-router";
</script>

<div class="flex justify-between items-center">
  <img on:click={() => push("/home")} src="logo.png" class="h-10 " alt="" />
  <div class="flex gap-3 items-center">
    <div class="text-sm">
      {localStorage.getItem("username")}/{localStorage.getItem("personality")}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => {
        localStorage.clear();
        push("/signin");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </div>
  </div>
</div>
