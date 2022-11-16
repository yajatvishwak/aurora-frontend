<script>
  let isReadJourney = false;
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-8 min-h-screen"
>
  <div class="flex justify-between ">
    <img src="logo.png" class="h-10 " alt="" />
    <img
      src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53508c8becbf15dd4f829c_peep-5.svg"
      class=" bg-indigo-100 rounded-full w-10 h-10"
      alt=""
    />
  </div>
  <div class="text-2xl mt-8">Welcome Mr. Danny boi,</div>
  <div class="opacity-70">How is you feeling today?</div>
  <div class="mt-5 grid grid-cols-2 gap-3">
    <div
      class="border btn btn-outline rounded-xl flex justify-center items-center p-3 h-40 "
    >
      Start a Journey
    </div>
    <div
      class="border rounded-xl flex justify-center items-center p-3 btn btn-outline h-40"
    >
      Read a Journey
    </div>
  </div>
  <div class="mt-10">
    <div class="">What do you want to ready about?</div>
    <div class="label-text opacity-60">
      Tell us about how you feel, what you are going through and what do you
      expect to read?
    </div>

    <textarea
      placeholder="Start typing here..."
      class="textarea w-full textarea-bordered mt-3 "
      id=""
      rows="10"
    />
    <div class="btn w-full bg-indigo-600 my-3 text-white">
      Get me Journeys to read
    </div>
  </div>
</section>
