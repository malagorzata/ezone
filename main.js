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
