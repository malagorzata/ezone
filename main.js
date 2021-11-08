import "./style.scss";
import { endpoint, headers } from "./settings.js";

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  console.log("przycisk dziala");
  e.preventDefault();
  if (form.checkValidity()) {
    const data = {
      name: form.elements.name.value,
      surname: form.elements.surname.value,
    };
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

let Next1 = document.getElementById("next1");
let Back1 = document.getElementById("back1");
let Next2 = document.getElementById("next2");
let Back2 = document.getElementById("back2");
let Back3 = document.getElementById("back3");

Next1.onclick = function () {
  document.querySelector("#level1").classList.add("hidden");
  document.querySelector("#level2").classList.remove("hidden");
  document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "#cacefc";
};

Back2.onclick = function () {
  document.querySelector("#level1").classList.remove("hidden");
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "white";
};

Next2.onclick = function () {
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector("#level3").classList.remove("hidden");
  document.querySelector(".step-col:nth-child(3)").style.backgroundColor = "#cacefc";
};

Back3.onclick = function () {
  document.querySelector("#level2").classList.remove("hidden");
  document.querySelector("#level3").classList.add("hidden");
  document.querySelector(".step-col:nth-child(3)").style.backgroundColor = "white";
};
