setTimeout(() => {
  let search = location.search;

  const checkPath = () => {
    if (location.search === search) {
      return true;
    }
    return false;
  };

  const btn = document.querySelector("button[data-cy='showMore']");
  let jobs = Number(
    document.querySelector(".JobSearchJobs_headline__Wj7Mk span").innerText
  );

  const h1 = document.querySelector(".JobSearchJobs_headline__Wj7Mk");

  const delta = 100;
  let jobCards = 0;
  let id;

  const on = (delta) => {
    id = setInterval(() => {
      console.info("Intervall Working..." + id);
      btn.click();
      // window.scrollTo({top: document.body.scrollHeight,left: 0,behavior: "smooth",});
      jobCards = document.querySelectorAll(
        ".CardJob_jobCard__wBvr4[data-job-id]"
      ).length;
      if (jobCards === jobs) {
        off(id);
      }
    }, delta);
  };

  const off = (id) => {
    clearInterval(id);
    removeLoader();
    createInfoText();
    // window.scroll({ top: 0, left: 0, behavior: "smooth" });
    console.info("Intervall " + id + " shut down!");
  };

  const createInfoText = () => {
    if (h1.childElementCount === 1) {
      h1.insertAdjacentHTML(
        "beforeend",
        `
        <div id='fastPlugin'>
          <span>${jobCards}</span> JobCards </br>
          Bitte STRG + F nutzen </br>
          <a id="reloadPage" href="javascript:location.reload(true)">reload page for new use!</a>
        </div>
        `
        // only for dev
        // <h2 id='dev'>Jobs: ${jobs}; JobCards: ${jobCards}</h2>
      );
    }
    return;
  };

  const removeLoader = () => {
    let loader = document.querySelector(".lds-dual-ring");
    loader.remove();
  };
  const showLoader = () => {
    h1.insertAdjacentHTML("beforeend", '<div class="lds-dual-ring"></div>');
  };

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.isComposing || e.keyCode === 74) {
        on(delta);
        showLoader();
        console.warn("To cancel Press K ");
        // alert("To cancel Press K ");
      }
      if (e.isComposing || e.keyCode === 75) {
        off(id);
      }
    },
    { once: true }
  );
}, 1000);
