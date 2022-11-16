<script>
  import Navbar from "./Navbar.svelte";
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <Navbar />
  <div class="text-xl mt-10 font-bold">
    Journeys are periodic blogs you can maintain on Aurora
  </div>
  <div class="text-xl mt-10">Add your Journey</div>
  <div class="flex flex-col gap-2">
    <input
      type="text"
      class="input input-bordered w-full mt-3"
      placeholder="Title of your journey"
      name=""
      id=""
    />
    <div class="mt-3 opacity-60">Examples:</div>
    <div class="flex flex-col gap-2">
      <div>> Handling mental health with physical</div>
      <div>> Moving into a new city</div>
    </div>
    <div class="btn bg-indigo-500 mt-2 text-white">Start journey</div>
  </div>
</section>
