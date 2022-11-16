<script>
  import Navbar from "./Navbar.svelte";

  let data = [
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

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-7 min-h-screen"
>
  <Navbar />
  <div class="text-lg mt-7">
    You's an INTP, and we found Journeys that you could find relevant
  </div>
  <div class="flex flex-col gap-2 mt-5">
    {#each data as d}
      <div class=" border-y py-5  border-t-0">
        <div class="text-xl font-bold">{d.title}</div>
        <span class="badge bg-indigo-300 mt-3 text-indigo-800 font-bold"
          >{d.personality}</span
        >
        <div class="mt-2">by <b>{d.author}</b></div>
      </div>
    {/each}
  </div>
</section>
