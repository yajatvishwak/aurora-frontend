import Signup from "./lib/Signup.svelte";
import Personality from "./lib/Personality.svelte";
import Signin from "./lib/Signin.svelte";
import Home from "./lib/Home.svelte";
import SearchResult from "./lib/SearchResult.svelte";
import Journey from "./lib/Journey.svelte";
import Add from "./lib/Add.svelte";
import Edit from "./lib/Edit.svelte";
const routes = {
  "/signin": Signin,
  "/signup": Signup,
  "/personality": Personality,
  "/home": Home,
  "/journey/:journeyid": Journey,
  "/add": Add,
  "/edit/:journeyid": Edit,
};
export default routes;
