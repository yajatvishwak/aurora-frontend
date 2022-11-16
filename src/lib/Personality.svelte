<script>
  let test = [
    {
      a: "expend energy, enjoy groups",
      b: "conserve energy, enjoy one-on-one",
      choice: "",
    },
    {
      a: "interpret literally ",
      b: "look for meaning and possibilities",
      choice: "",
    },
    {
      a: "logical, thinking, questioning ",
      b: "empathetic, feeling, accommodating",
      choice: "",
    },
    {
      a: "organized, orderly ",
      b: "flexible, adaptable",
      choice: "",
    },
    {
      a: " more outgoing, think out loud ",
      b: "more reserved, think to yourself",
      choice: "",
    },
    {
      a: "practical, realistic, experiential ",
      b: "imaginative, innovative, theoretical",
      choice: "",
    },
    {
      a: "candid, straight forward, frank",
      b: "tactful, kind, encouraging",
      choice: "",
    },
    {
      a: "plan, schedule",
      b: "unplanned, spontaneous",
      choice: "",
    },

    {
      a: " seek many tasks, public activities, interaction with others",
      b: " seek private, solitary activities with quiet to concentrate",
      choice: "",
    },
    {
      a: "standard, usual, conventional ",
      b: "different, novel, unique",
      choice: "",
    },
    {
      a: "firm, tend to criticize, hold the line",
      b: "gentle, tend to appreciate, conciliate",
      choice: "",
    },
    {
      a: "regulated, structured",
      b: "easygoing, “live” and “let live” ",
      choice: "",
    },
    {
      a: "external, communicative, express yourself",
      b: "internal, reticent, keep to yourself",
      choice: "",
    },
    {
      a: "focus on here-and-now",
      b: "look to the future, global perspective, “big picture",
      choice: "",
    },
    {
      a: "tough-minded, just",
      b: "tender-hearted, merciful",
      choice: "",
    },
    {
      a: "preparation, plan ahead",
      b: "go with the flow, adapt as you go",
      choice: "",
    },
    {
      a: "active, initiate",
      b: "reflective, deliberate",
      choice: "",
    },
    {
      a: "facts, things, “what is”",
      b: "ideas, dreams, “what could be,” philosophical",
      choice: "",
    },
    {
      a: "matter of fact, issue-oriented",
      b: "sensitive, people-oriented, compassionate",
      choice: "",
    },
    {
      a: "control, govern",
      b: "latitude, freedom",
      choice: "",
    },
  ];
  let selectedTestNumber = 19;
  function calculatePersonality() {
    let finalPersonality = "";
    let a = 0;
    let b = 0;
    let eori = [0, 4, 8, 12, 16];
    for (const index of eori) {
      if (test[index].choice === "a") {
        a++;
      } else {
        b++;
      }
    }
    if (a > b) {
      finalPersonality += "E";
    } else {
      finalPersonality += "I";
    }
    a = 0;
    b = 0;
    let sorn = [1, 5, 9, 13, 17];
    for (const index of sorn) {
      if (test[index].choice === "a") {
        a++;
      } else {
        b++;
      }
    }
    if (a > b) {
      finalPersonality += "S";
    } else {
      finalPersonality += "N";
    }
    a = 0;
    b = 0;
    let torf = [2, 6, 10, 14, 18];
    for (const index of torf) {
      if (test[index].choice === "a") {
        a++;
      } else {
        b++;
      }
    }
    if (a > b) {
      finalPersonality += "T";
    } else {
      finalPersonality += "F";
    }
    a = 0;
    b = 0;
    let jorp = [2, 6, 10, 14, 18];
    for (const index of jorp) {
      if (test[index].choice === "a") {
        a++;
      } else {
        b++;
      }
    }
    if (a > b) {
      finalPersonality += "J";
    } else {
      finalPersonality += "P";
    }
    alert("final personality: " + finalPersonality);
  }
</script>

<section
  class="bg-slate-100 w-screen h-full flex flex-col dark:bg-slate-900 p-10 min-h-screen"
>
  <div class="flex flex-col">
    <img src="logo.png" alt="" />
  </div>
  <div>Choose one that you relate to the most</div>

  <div class="mt-3">
    <div class="grid grid-cols-2  gap-3">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => {
          test[selectedTestNumber].choice = "a";
          if (selectedTestNumber !== test.length - 1) selectedTestNumber += 1;
        }}
        class={`border rounded-xl p-3 flex flex-col items-center justify-center ${
          test[selectedTestNumber].choice &&
          test[selectedTestNumber].choice === "a"
            ? "border border-blue-600"
            : ""
        }`}
      >
        {test[selectedTestNumber].a}
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => {
          test[selectedTestNumber].choice = "b";
          if (selectedTestNumber !== test.length - 1) selectedTestNumber += 1;
        }}
        class={`border rounded-xl p-3 flex flex-col items-center justify-center ${
          test[selectedTestNumber].choice &&
          test[selectedTestNumber].choice === "b"
            ? "border border-blue-600"
            : ""
        }`}
      >
        {test[selectedTestNumber].b}
      </div>
    </div>
  </div>
  <div class="opacity-40 mt-3 flex gap-1">
    {selectedTestNumber + 1} / {test.length}
  </div>

  <div class=" mt-auto justify-between flex w-full">
    {#if selectedTestNumber !== 0}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (selectedTestNumber -= 1)}
        class="flex items-center gap-2 hover:scale-95 transition-all hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <div>Previous Question</div>
      </div>
    {/if}
    {#if selectedTestNumber === test.length - 1}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => calculatePersonality()}
        class="flex items-center gap-2 hover:scale-95 transition-all hover:underline"
      >
        <div>Finish</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- <div
        on:click={() => (selectedTestNumber += 1)}
        class="flex items-center gap-2 hover:scale-95 transition-all hover:underline"
      >
        <div>Next Question</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div> -->
    {/if}
  </div>
</section>
