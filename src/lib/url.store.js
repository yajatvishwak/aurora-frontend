import { writable } from "svelte/store";

const baseurl = writable(import.meta.env.VITE_BASEURL);

export default baseurl;
