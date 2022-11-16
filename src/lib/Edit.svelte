<script>
  import axios from "axios";
  import moment from "moment";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import Navbar from "./Navbar.svelte";
  import baseurl from "./url.store";
  export let params = {};
  let storyContent = "";
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
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  }
  onMount(async () => {
    await fetchData();
  });

  async function updateJourneyEnd() {
    console.log(data.hasEnded);
    const res = await axios.post($baseurl + "update-ended", {
      journeyid: params.journeyid,
      isEnded: data.hasEnded,
    });
    if (res && res.data) {
      if (res.data.code === "success") {
        toast.success("Updated Journey");
      }
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  }
  async function addStory() {
    const res = await axios.post($baseurl + "edit-journey", {
      journeyid: params.journeyid,
      text: storyContent,
      username: localStorage.getItem("username"),
    });
    if (res && res.data) {
      if (res.data.code === "success") {
        toast.success("Added Story to Journey");
        await fetchData();
      } else {
        toast.error("Something went terribly wrong. Ahaaaaa!");
      }
    } else {
      toast.error("Something went terribly wrong. Ahaaaaa!");
    }
  }

  let data = {
    story: [
      // {
      //   date: "12th November",
      //   content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
      //   facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
      //   nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
      // },
      // {
      //   date: "13th November",
      //   content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et
      //   facilis incidunt dicta saepe voluptates est autem, repellendus aut sit
      //   nisi eligendi quos, earum ad culpa consequatur! Voluptatem, rerum quo.`,
      // },
    ],
    hasEnded: false,
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
      bind:value={storyContent}
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
    <button on:click={addStory} class="btn bg-indigo-500 mt-2 text-white"
      >Add to journey</button
    >
  </div>
  <div class="divider" />
  <div class="text-xl">Your journey so far</div>
  {#if data.story.length === 0}
    <div class="opacity-50">Nothing to show, Add a story to start</div>
  {:else}
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
  {/if}

  <div class="divider" />
  <div class="flex flex-col">
    <div class="text-xl">Other options</div>
    <div class="flex justify-between mt-3">
      <div>Mark as End</div>
      <input bind:checked={data.hasEnded} type="checkbox" class="toggle" />
    </div>
    <button
      on:click={updateJourneyEnd}
      class="btn w-full bg-indigo-500 mt-5 text-white">Update Options</button
    >
  </div>
</section>
