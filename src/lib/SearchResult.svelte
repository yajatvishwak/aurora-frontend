<script>
  let data = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus
        earum nostrum officiis dolor consequatur amet corrupti id cupiditate?
        Magnam similique enim, fugit possimus assumenda error repellendus.
        Rerum, veniam perspiciatis.`,
      author: "Andrew Tate",
      journeyid: "1",
    },
  ];
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-7 min-h-screen"
>
  <div class="text-lg">
    You's an INTP, and we found Journeys that you could find relevant
  </div>
  <div class="flex flex-col gap-2 mt-5">
    {#each data as d}
      <div class=" border-y py-5  border-t-0">
        <div class="text-xl font-bold">{d.title}</div>
        <div class="line-clamp-2 label-text mt-2">
          {d.content}
        </div>
        <div class="mt-2">by <b>{d.author}</b></div>
      </div>
    {/each}
  </div>
</section>
