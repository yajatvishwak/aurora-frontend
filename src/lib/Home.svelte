<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { push } from "svelte-spa-router";
  import Navbar from "./Navbar.svelte";
  import SearchResult from "./SearchResult.svelte";
  import baseurl from "./url.store";

  let isSearchModalOpen = false;
  let userpersonality = "";
  let isReadJourney = true;
  let searchdata = [];
  let feeling = "";
  onMount(async () => {
    const res = await axios.post($baseurl + "home", {
      username: localStorage.getItem("username"),
    });
    if (res && res.data) {
      data = res.data;
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  });
  let data = {
    name: "Yojat",
    journey: [
      {
        _id: 1,
        title: "Andrew Tateism",
        personality: "INTP",
        author: "Andrew Gate",
      },
    ],
  };
  async function sendFeeling() {
    if (feeling) {
      const res = await axios.post($baseurl + "find-journeys", {
        username: localStorage.getItem("username"),
        text: feeling,
      });
      console.log(res.data);
      searchdata = res.data.journeys.map((item) => {
        return {
          title: item.title,
          author: item.author,
          journeyid: item.journeyid,
          personality: item.personality,
        };
      });
      userpersonality = res.data.userpersonality;
      isSearchModalOpen = true;
    }
  }
</script>

<input type="checkbox" checked={isSearchModalOpen} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <SearchResult data={searchdata} {userpersonality} />
    <div class="modal-action">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (isSearchModalOpen = false)}
        for="my-modal-6"
        class="btn"
      >
        Close
      </div>
    </div>
  </div>
</div>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <Navbar />
  <div class="text-2xl mt-8">Welcome, {data.name}</div>
  <div class="opacity-70">How is you feeling today?</div>
  <div class="mt-5 grid grid-cols-2 gap-3">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => push("/add")}
      class={`rounded-xl  flex justify-center items-center p-3 border border-slate-700 hover:bg-indigo-600 hover:text-white h-40 `}
    >
      Start a Journey
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => (isReadJourney = !isReadJourney)}
      class={`border border-slate-700 ${
        isReadJourney ? "bg-indigo-600 text-white" : ""
      } rounded-xl flex justify-center items-center p-3  h-40 `}
    >
      Read a Journey
    </div>
  </div>
  <div class="mt-10">
    {#if isReadJourney}
      <div>
        <div class="">What do you want to read about?</div>
        <div class="label-text opacity-60">
          Tell us about how you feel, what you are going through and what do you
          expect to read?
        </div>

        <textarea
          bind:value={feeling}
          placeholder="Start typing here..."
          class="textarea w-full textarea-bordered mt-3 "
          id=""
          rows="10"
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={sendFeeling}
          class="btn w-full bg-indigo-600 my-3 text-white"
        >
          Get me Journeys to read
        </div>
      </div>
    {:else}
      <div>
        <div class="">Your Journeys</div>
        <div class="label-text opacity-60">
          Joruneys you have added to Aurora
        </div>
        {#each data.journey as j}
          <div class=" border-y py-5  border-t-0">
            <div class="flex justify-between items-center">
              <div class="text-xl font-bold">{j.title}</div>
              <div class="flex gap-3">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                  on:click={() => push("/edit/" + j._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 hover:text-indigo-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <svg
                  on:click={() => push("/journey/" + j._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 hover:text-indigo-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <span
              class="badge border-0 bg-indigo-300 mt-3 text-indigo-800 font-bold"
              >{j.personality}</span
            >
            <div class="mt-2">by <b>{j.author}</b></div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
