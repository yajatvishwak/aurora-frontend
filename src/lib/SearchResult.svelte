<script>
  import { push } from "svelte-spa-router";

  export let userpersonality = "INTP";
  export let data = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Andrew Tate",
      journeyid: "1",
      personality: "INTP",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Andrew Tate",
      journeyid: "1",
      personality: "INTP",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Andrew Tate",
      journeyid: "1",
      personality: "INTP",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Andrew Tate",
      journeyid: "1",
      personality: "INTP",
    },
  ];
</script>

<div class="text-lg ">
  You's an {userpersonality}, and we found Journeys that you could find relevant
</div>
<div class="flex flex-col gap-2 mt-5">
  {#each data as d}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class=" border-y py-5  border-t-0"
      on:click={() => push("/journey/" + d.journeyid)}
    >
      <div class="text-xl font-bold">{d.title}</div>
      <span class="badge bg-indigo-300 mt-3 text-indigo-800 font-bold"
        >{d.personality}</span
      >
      <div class="mt-2">by <b>{d.author}</b></div>
    </div>
  {/each}
</div>
