<script>
  import { push } from "svelte-spa-router";
</script>

<div class="flex justify-between items-center">
  <img on:click={() => push("/home")} src="logo.png" class="h-10 " alt="" />
  <div>{localStorage.getItem("username")}</div>
</div>
