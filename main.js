import "./style.scss";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  console.log("przycisk dziala");
  e.preventDefault();
  if (form.checkValidity()) {
    const data = {
      name: form.elements.name.value,
      surname: form.elements.surname.value,

      // horns: horns,
      // species: form.elements.species.value,
      //   abilities: form.elements.abilities.value.split("\n"),
    };
    console.log(data);
    post(data);
  } else {
    form.reportValidity();
  }
});
