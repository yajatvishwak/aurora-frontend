<script>
  import routes from "./routes";
  import Router from "svelte-spa-router";
  import toast, { Toaster } from "svelte-french-toast";
</script>

<div>
  <Toaster />
  <Router {routes} />
</div>
