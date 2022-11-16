const btn = document.querySelector("button[data-cy='showMore']");
const jobs = Number(
  document.querySelector(".JobSearchJobs_headline__Wj7Mk span").innerText
);
const h1 = document.querySelector(".JobSearchJobs_headline__Wj7Mk");

const delta = 1000;
let jobCards = 0;
let id;

const on = (delta) => {
  id = setInterval(() => {
    console.info("Intervall Working..." + id);
    btn.click();
    // window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
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
  h1.insertAdjacentHTML(
    "beforeend",
    `<strong id='fastPlugin'>&nbsp; <span>${jobCards}</span> Jobs Gelistet bitte STRG + F nutzen</strong>`
  );
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
  console.info("Intervall " + id + " shut down!");
};

window.addEventListener("keydown", (e) => {
  if (e.isComposing || e.keyCode === 74) {
    on();
    console.warn("To cancel Press K ");
    // alert("To cancel Press K ");
  }
  if (e.isComposing || e.keyCode === 75) {
    off(id);
  }
});
