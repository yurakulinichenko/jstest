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

  let exp = document.querySelector(".work");

  let work = workExp.reverse().map((value, index) => {
    let title = document.createElement("h4");
    title.classList.add("position");
    title.innerHTML = workExp[index].title;
    let company = document.createElement("span");
    company.innerHTML = " " + workExp[index].company;
    company.classList.add("organisation");
    title.appendChild(company);
    exp.appendChild(title);

    let period = document.createElement("p");
    period.innerHTML =
      moment(workExp[index].from).format("MMMM YYYY") +
      " - " +
      moment(workExp[index].to).format("MMMM YYYY");
    period.classList.add("period");
    let line = document.createElement("span");
    line.classList.add("line");
    line.innerText = " | ";
    period.appendChild(line);
    exp.appendChild(period);
    let country = workExp[index].country;
    period.append(country);

    let responsib = document.createElement("ul");
    responsib.classList.add("work-list");
    let arr = workExp[index].responsibilities;
    for (var i = 0; i < arr.length; i++) {
      var li = document.createElement("li");
      li.classList.add("work-list-item");
      responsib.appendChild(li);
      li.innerHTML = li.innerHTML + arr[i];
    }
    exp.appendChild(responsib);
  });
})();
