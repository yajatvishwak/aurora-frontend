<script>
  // @ts-nocheck
  import moment from "moment";
  import SvelteHeatmap from "svelte-heatmap";
  import Navbar from "./Navbar.svelte";
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae earum
      aperiam natus totam itaque odit, corrupti quidem cum, mollitia voluptates
      ipsam, alias similique consequuntur distinctio eveniet facilis amet sint.
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
    <div class="" id="heatmap" />
  </div>
</section>
