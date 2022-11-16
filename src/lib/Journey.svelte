<script>
  let data = {
    title: "My Journey towards getting placed",
    author: "Andrew Tate",
    story: [
      {
        date: "13th November",
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
  <div class="flex justify-between ">
    <img src="logo.png" class="h-10 " alt="" />
    <img
      src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53508c8becbf15dd4f829c_peep-5.svg"
      class=" bg-indigo-100 rounded-full w-10 h-10"
      alt=""
    />
  </div>
  <div class="font-bold mt-7 text-2xl">{data.title}</div>
  <div class="mt-2">by <b>{data.author}</b></div>
  <div class="mt-4 ">
    <div class="divider mb-7">Journey begins</div>
    {#each data.story as d}
      <div class="mt-4">
        <div class="underline font-bold">{d.date}</div>
        <div>{d.content}</div>
      </div>
    {/each}
  </div>
</section>
