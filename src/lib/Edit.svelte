<script>
  import Navbar from "./Navbar.svelte";
  let data = {
    story: [
      {
        date: "12th November",
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
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <Navbar />
  <div class="text-xl mt-10 font-bold">
    Journeys are periodic blogs you can maintain on Aurora
  </div>

  <div class="mt-3 text-xl">Add a story</div>
  <div class="flex flex-col gap-2">
    <textarea
      type="text"
      class=" textarea-bordered textarea w-full mt-3"
      placeholder="What happened today?"
      name=""
      id=""
    />
    <div class="mt-3 opacity-60">Thought Starters:</div>
    <div class="flex flex-col gap-2">
      <div>> What made you feel nice or sad today?</div>
      <div>> An experience you would like to share</div>
      <div>> Something you could do differently today</div>
    </div>
    <div class="btn bg-indigo-500 mt-2 text-white">Add to journey</div>
  </div>
  <div class="divider" />
  <div class="text-xl">Your journey so far</div>
  <div class="flex flex-col gap-3">
    {#each data.story as s}
      <div class="mt-4">
        <div class="underline font-bold">{s.date}</div>
        <div>
          {s.content}
        </div>
      </div>
    {/each}
  </div>
  <div class="divider" />
  <div class="flex flex-col">
    <div class="text-xl">Other options</div>
    <div class="flex justify-between mt-3">
      <div>Mark as End</div>
      <input type="checkbox" class="toggle" />
    </div>
  </div>
</section>
