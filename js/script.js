"use strict";

(async () => {
  const response = await fetch("https://yurii-cv-api.azurewebsites.net/");
  const person = await response.json();
  const position = (document.querySelector(".about-position").innerText =
    person.position);
  const name = (document.querySelector(".about-name").innerText =
    person.firstName + " " + person.lastName);
  const tel = (document.querySelector(".tel").innerText =
    person.contacts[1].value);
  const mail = (document.querySelector(".mail").innerText =
    person.contacts[0].value);
})();
(async () => {
  const response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/experience"
  );
  const workExp = await response.json();

  const experience = document.querySelector(".work");

  workExp.reverse().forEach((value, index) => {
    const title = document.createElement("h4");
    title.classList.add("position");
    title.innerHTML = workExp[index].title;
    const company = document.createElement("span");
    company.innerHTML = " " + workExp[index].company;
    company.classList.add("organisation");
    title.appendChild(company);
    experience.appendChild(title);

    const period = document.createElement("p");
    period.innerHTML =
      moment(workExp[index].from).format("MMMM YYYY") +
      " - " +
      moment(workExp[index].to).format("MMMM YYYY");
    period.classList.add("period");
    const line = document.createElement("span");
    line.classList.add("line");
    line.innerText = " | ";
    period.appendChild(line);
    experience.appendChild(period);
    const country = workExp[index].country;
    period.append(country);

    const responsibilities = document.createElement("ul");
    responsibilities.classList.add("work-list");
    let arr = workExp[index].responsibilities;
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      li.classList.add("work-list-item");
      responsibilities.appendChild(li);
      li.innerHTML = li.innerHTML + arr[i];
    }
    experience.appendChild(responsibilities);
  });
})();

(async () => {
  const response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/education"
  );
  const education = await response.json();

  const highEducation = document.querySelector(".education");
  education.highEducations.forEach((value, index) => {
    const univer = document.createElement("p");
    univer.classList.add("university");
    univer.innerHTML = education.highEducations[index].university;
    highEducation.appendChild(univer);

    const faculty = document.createElement("p");
    faculty.classList.add("faculty");
    faculty.innerHTML = education.highEducations[index].specialization;
    highEducation.appendChild(faculty);

    const period = document.createElement("p");
    period.innerHTML =
      education.highEducations[index].from +
      " - " +
      education.highEducations[index].to;
    period.classList.add("years");
    const line = document.createElement("span");
    line.classList.add("line");
    line.innerText = " | ";
    period.appendChild(line);
    highEducation.appendChild(period);
    const country = education.highEducations[index].country;
    period.append(country);
  });
})();

(async () => {
  const response = await fetch(
    "https://yurii-cv-api.azurewebsites.net/education"
  );
  const training = await response.json();
  const course = document.querySelector(".training");
  const trainingCourses = training.trainings.map((value, index) => {
    const organisation = document.createElement("p");
    organisation.classList.add("course-org");
    organisation.innerHTML = training.trainings[index].organization;
    course.appendChild(organisation);

    const courseList = document.createElement("ul");
    courseList.classList.add("course-list");
    const arr = training.trainings[index].subjects;
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      li.classList.add("course-list-item");
      courseList.appendChild(li);
      li.innerHTML = li.innerHTML + arr[i];
    }
    course.appendChild(courseList);
  });
})();

(async () => {
  const response = await fetch("https://yurii-cv-api.azurewebsites.net/skills");
  const skills = await response.json();
  const hard = skills.filter((skills) => skills.type == "Hard");
  const soft = skills.filter((skills) => skills.type == "Soft");

  const techSkills = document.querySelector(".tech-skills");
  const hardSkills = document.createElement("ul");
  hardSkills.classList.add("tech-skills-list");
  for (let i = 0; i < hard.length; i++) {
    const li = document.createElement("li");
    li.classList.add("tech-skills-item");
    hardSkills.appendChild(li);
    const hardList = document.createElement("span");
    hardList.classList.add("tech-skills-text");
    hardList.innerHTML = hard[i].name;
    li.appendChild(hardList);
  }
  techSkills.appendChild(hardSkills);

  const softSkills = document.querySelector(".soft-skills");
  const softSkillsList = document.createElement("ul");
  softSkillsList.classList.add("soft-skills-list");
  for (let i = 0; i < soft.length; i++) {
    const li = document.createElement("li");
    li.classList.add("soft-skills-item");
    softSkillsList.appendChild(li);
    const softList = document.createElement("span");
    softList.classList.add("soft-skills-text");
    softList.innerHTML = soft[i].name;
    li.appendChild(softList);
  }
  softSkills.appendChild(softSkillsList);
})();
