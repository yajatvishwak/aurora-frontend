<script>
  import { onMount } from "svelte";
  import CalendarDates from "calendar-dates";
  export const mood = {
    10: "sad",
    11: "happy",
    12: "sad",
    13: "sad",
    14: "sad",
  };

  const calendarDates = new CalendarDates();
  let mat = [];
  onMount(async () => {
    const nov2022 = new Date(2022, 11);
    mat = await calendarDates.getMatrix(nov2022);
    console.log(mat);
  });
</script>

<div class="text-xl mb-4">November, 2022</div>
<div class="grid grid-cols-7 grid-flow-row w-full  gap-2   ">
  {#each mat as row}
    {#each row as col}
      {#if col.type === "previous"}
        <div
          class="p-2 rounded-full bg-slate-800 text-center text-xs opacity-25"
        >
          {col.date}
        </div>
      {/if}
      {#if col.type === "current"}
        {#if Object.keys(mood).includes(col.date + "")}
          {#if mood[col.date] === "happy"}
            <div class="p-2 rounded-full bg-green-900 text-center text-xs ">
              😁
            </div>
          {/if}
          {#if mood[col.date] === "sad"}
            <div class="p-2 rounded-full bg-red-900 text-center text-xs ">
              😞
            </div>
          {/if}
          {#if mood[col.date] === "neutral"}
            <div
              class="p-2 rounded-full border border-slate-400 text-center text-xs "
            >
              n
            </div>
          {/if}
        {:else}
          <div
            class="p-2 rounded-full border border-slate-400 text-center text-xs "
          >
            {col.date}
          </div>
        {/if}
      {/if}
      {#if col.type === "next"}
        <div
          class="p-2 rounded-full bg-slate-800 text-center text-xs opacity-25"
        >
          {col.date}
        </div>
      {/if}
    {/each}
  {/each}
</div>
