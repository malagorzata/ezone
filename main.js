import "./style.scss";
import { endpoint, headers } from "./settings.js";

const cbs = document.querySelectorAll('input[name="types"]');
cbs.forEach((cb) => cb.addEventListener("change", countChecked));

function countChecked() {
  const valid = [...cbs].some((el) => el.checked);
  if (valid) {
    document.getElementById("next1").disabled = false;
    document.getElementById("next1").style.backgroundColor = "#3e14d6";
  } else {
    document.getElementById("next1").disabled = true;
    document.getElementById("next1").style.backgroundColor = "#3f3f50";
  }
}

document.querySelector("#but-create").addEventListener("click", function (event) {
  if (form.checkValidity()) {
    event.preventDefault();
    document.querySelector("#level0").classList.add("hidden");
    document.querySelector("#level1").classList.remove("hidden");
    document.querySelector("#step-row").style.display = "flex";
  } else {
    form.reportValidity();
  }
});

document.querySelector("#back1").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level0").classList.remove("hidden");
  document.querySelector("#level1").classList.add("hidden");
  document.querySelector("#step-row").style.display = "none";
});

document.querySelector("#next1").addEventListener("click", function (event) {
  console.log("przycisk 1");

  event.preventDefault();

  document.querySelector("#level1").classList.add("hidden");
  document.querySelector("#level2").classList.remove("hidden");
  // document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "#cacefc";
  document.querySelector(".step-col:nth-child(2)").classList.add("progress-settings");
  document.querySelector(".step-col:nth-child(2)").classList.add("fill");
});

document.querySelector("#back2").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level1").classList.remove("hidden");
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector(".step-col:nth-child(2)").classList.remove("fill");
  document.querySelector(".step-col:nth-child(2)").classList.remove("progress-settings");
  document.querySelector(".step-col:nth-child(2)").classList.add("progress-settings2");
  document.querySelector(".step-col:nth-child(2)").classList.add("unfill");
  setTimeout(function () {
    document.querySelector(".step-col:nth-child(2)").classList.remove("progress-settings2");
    document.querySelector(".step-col:nth-child(2)").classList.remove("unfill");
  }, 1000);

  // document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "white";
});

document.querySelector("#next2").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector("#level3").classList.remove("hidden");
  document.querySelector(".step-col:nth-child(3)").classList.add("progress-settings");
  document.querySelector(".step-col:nth-child(3)").classList.add("fill");
  // document.querySelector(".step-col:nth-child(3)").style.backgroundColor = "#cacefc";
});

document.querySelector("#back3").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level2").classList.remove("hidden");
  document.querySelector("#level3").classList.add("hidden");
  document.querySelector(".step-col:nth-child(3)").classList.remove("progress-settings");
  document.querySelector(".step-col:nth-child(3)").classList.remove("fill");

  document.querySelector(".step-col:nth-child(3)").classList.add("progress-settings2");
  document.querySelector(".step-col:nth-child(3)").classList.add("unfill");
  setTimeout(function () {
    document.querySelector(".step-col:nth-child(3)").classList.remove("progress-settings2");
    document.querySelector(".step-col:nth-child(3)").classList.remove("unfill");
  }, 1000);

  // document.querySelector(".step-col:nth-child(3)").style.backgroundColor = "white";
});

document.querySelector("#submit").addEventListener("click", function () {
  document.querySelector("#submit-page").classList.remove("hidden");
  document.querySelector("#container").classList.add("hidden");
});

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  console.log("przycisk dziala");
  e.preventDefault();
  if (form.checkValidity()) {
    const types = document.querySelectorAll(`input[name="types"]:checked`);
    const games = document.querySelectorAll(`input[name="games"]:checked`);
    const areas = document.querySelectorAll(`input[name="areas"]:checked`);

    const newTypes = [...types].map((el) => {
      return el.value;
    });

    const newGames = [...games].map((el) => {
      return el.value;
    });

    const newAreas = [...areas].map((el) => {
      return el.value;
    });

    const data = {
      name: form.elements.name.value,
      surname: form.elements.surname.value,
      username: form.elements.username.value,
      email: form.elements.email.value,
      type: newTypes,
      games: newGames,
      areas: newAreas,
    };

    console.log(newGames);
    console.log(data);
    post(data);
  } else {
    form.reportValidity();
  }
});

function post(data) {
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    body: postData,
    headers: headers,
  }).then((res) => res.json());
}
