import "./style.scss";
import { endpoint, headers } from "./settings.js";

document.querySelector("#but-create").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level0").classList.add("hidden");
  document.querySelector("#level1").classList.remove("hidden");
  document.querySelector("#step-row").style.display = "flex";
});

document.querySelector("#back1").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level0").classList.remove("hidden");
  document.querySelector("#level1").classList.add("hidden");
  document.querySelector("#step-row").style.display = "none";
});

document.querySelector("#next1").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level1").classList.add("hidden");
  document.querySelector("#level2").classList.remove("hidden");
  document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "#cacefc";
});

document.querySelector("#back2").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level1").classList.remove("hidden");
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "white";
});

document.querySelector("#next2").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level2").classList.add("hidden");
  document.querySelector("#level3").classList.remove("hidden");
  document.querySelector(".step-col:nth-child(2)").style.backgroundColor = "#cacefc";
});

document.querySelector("#back3").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#level2").classList.remove("hidden");
  document.querySelector("#level3").classList.add("hidden");
  document.querySelector(".step-col:nth-child(3)").style.backgroundColor = "white";
});

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  console.log("przycisk dziala");
  e.preventDefault();
  if (form.checkValidity()) {
    const data = {
      name: form.elements.name.value,
      surname: form.elements.surname.value,
      username: form.elements.username.value,
      email: form.elements.email.value,
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
