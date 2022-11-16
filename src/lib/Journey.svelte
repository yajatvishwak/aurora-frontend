<script>
  import axios from "axios";

  // @ts-nocheck
  import moment from "moment";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import HeatMap from "./HeatMap.svelte";

  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  export let params = {};
  let showSummary = false;
  let data = {
    title: "My Journey towards getting placed",
    author: "Andrew Tate",
    hasEnded: false,
    textSummary: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
        facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
        nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
    story: [
      {
        date: "14th November",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
        facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
        nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
      },
      {
        date: "13th November",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
        facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
        nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
      },
    ],
  };
  onMount(async () => {
    await fetchData();
  });
  async function fetchData() {
    const res = await axios.post($baseurl + "get-journey", {
      journeyid: params.journeyid,
    });
    if (res && res.data) {
      // data = res.data;
      console.log(res.data);
      const stories = res.data.journey.journeys;
      const formattedStories = stories.map((story) => {
        return {
          date: moment(story.date).format("DD MMMM, YYYY"),
          content: story.text,
        };
      });
      console.log(formattedStories);
      data.story = formattedStories;
      data.hasEnded = res.data.journey.journeyend;
      data.author = res.data.journey.author;
      data.title = res.data.journey.title;
      data.textSummary = res.data.journey.summary;
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  }
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen"
>
  <Navbar />
  <div class="font-bold mt-7 text-2xl">{data.title}</div>
  <div class="flex items-center justify-between mt-2">
    <div class="">by <b>{data.author}</b></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => (showSummary = !showSummary)} class="text-sm">
      {showSummary ? "Hide Summary" : "Show Summary"}
    </div>
  </div>
  {#if showSummary}
    <div class="p-3 border rounded-md mt-3">
      {data.textSummary}
    </div>
  {/if}
  {#if data.hasEnded}
    <div class="divider ">Journey Ends</div>
  {/if}
  <div class="">
    {#each data.story as d}
      <div class="mt-4">
        <div class="underline font-bold">{d.date}</div>
        <div>{d.content}</div>
      </div>
    {/each}
    <div class="divider ">Journey Begins</div>
  </div>
  <div class="mt-4">
    <div class="opacity-50">Analysis of mood (Monthly)</div>
    <HeatMap />
  </div>
</section>
