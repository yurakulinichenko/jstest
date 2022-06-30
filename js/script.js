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

(async () => {
  let response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/education"
  );
  let education = await response.json();

  let educ = document.querySelector(".education");
  let university = education.highEducations.map((value, index) => {
    let univer = document.createElement("p");
    univer.classList.add("university");
    univer.innerHTML = education.highEducations[index].university;
    educ.appendChild(univer);

    let faculty = document.createElement("p");
    faculty.classList.add("faculty");
    faculty.innerHTML = education.highEducations[index].specialization;
    educ.appendChild(faculty);

    let period = document.createElement("p");
    period.innerHTML =
      education.highEducations[index].from +
      " - " +
      education.highEducations[index].to;
    period.classList.add("years");
    let line = document.createElement("span");
    line.classList.add("line");
    line.innerText = " | ";
    period.appendChild(line);
    educ.appendChild(period);
    let country = education.highEducations[index].country;
    period.append(country);
  });
})();

(async () => {
  let response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/education"
  );
  let training = await response.json();
  let course = document.querySelector(".training");
  let trainingCourses = training.trainings.map((value, index) => {
    let org = document.createElement("p");
    org.classList.add("course-org");
    org.innerHTML = training.trainings[index].organization;
    course.appendChild(org);

    let courseList = document.createElement("ul");
    courseList.classList.add("course-list");
    let arr = training.trainings[index].subjects;
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.classList.add("course-list-item");
      courseList.appendChild(li);
      li.innerHTML = li.innerHTML + arr[i];
    }
    course.appendChild(courseList);
  });
})();

(async () => {
  let response = await fetch("https://yurii-cv-api.azurewebsites.net/skills");
  let skills = await response.json();
  let hard = skills.filter((index, type) => index.type == "Hard");
  let soft = skills.filter((index, type) => index.type == "Soft");

  let techSkills = document.querySelector(".tech-skills");
  let hardSkills = document.createElement("ul");
  hardSkills.classList.add("tech-skills-list");
  let arr = hard;
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("tech-skills-item");
    hardSkills.appendChild(li);
    let hardList = document.createElement("span");
    hardList.classList.add("tech-skills-text");
    hardList.innerHTML = arr[i].name;
    li.appendChild(hardList);
  }
  techSkills.appendChild(hardSkills);

  let softSkills = document.querySelector(".soft-skills");
  let softSk = document.createElement("ul");
  softSk.classList.add("soft-skills-list");
  let array = soft;
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.classList.add("soft-skills-item");
    softSk.appendChild(li);
    let softList = document.createElement("span");
    softList.classList.add("soft-skills-text");
    softList.innerHTML = array[i].name;
    li.appendChild(softList);
  }
  softSkills.appendChild(softSk);
})();
