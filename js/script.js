"use strict";
let person = {};
(async () => {
  let response = await fetch("https://yurii-cv-api.azurewebsites.net/");
  person = await response.json();
  console.log(person);
  let position = (document.querySelector(".about-position").innerHTML =
    person.position);
  let name = (document.querySelector(".about-name").innerHTML =
    person.firstName + " " + person.lastName);
  let tel = (document.querySelector(".tel").innerHTML =
    person.contacts[1].value);
  let mail = (document.querySelector(".mail").innerHTML =
    person.contacts[0].value);
})();
