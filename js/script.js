"use strict";
let person = {};
(async () => {
  let response = await fetch("https://yurii-cv-api.azurewebsites.net/");
  person = await response.json();
  let position = (document.querySelector(".about-position").innerText =
    person.position);
  let name = (document.querySelector(".about-name").innerText =
    person.firstName + " " + person.lastName);
  let tel = (document.querySelector(".tel").innerText =
    person.contacts[1].value);
  let mail = (document.querySelector(".mail").innerText =
    person.contacts[0].value);
})();
(async () => {
  let response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/experience"
  );
  let workExp = await response.json();
  console.log(workExp);
  workExp.forEach();
})();
