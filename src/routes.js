import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import SearchResult from "./lib/SearchResult.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/personality": Personality,
  "/home": Home,
  "/search": SearchResult,
};
export default routes;
