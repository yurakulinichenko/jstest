"use strict";
const baseUrl = "https://yurii-cv-api.azurewebsites.net/1";

function formatDate(date) {
  return moment(date).format("MMMM YYYY");
}

const displayUserInfo = async () => {
  const response = await fetch(baseUrl);
  const person = await response.json();
  const position = (document.querySelector(".about-position").innerText =
    person.position);
  const name = (document.querySelector(".about-name").innerText =
    person.firstName + " " + person.lastName);
  const tel = (document.querySelector(".tel").innerText =
    person.contacts[1].value);
  const mail = (document.querySelector(".mail").innerText =
    person.contacts[0].value);
};

const displayUserExperience = async () => {
  const response = await fetch(`${baseUrl}/experience`);
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
      formatDate(workExp[index].from) + " - " + formatDate(workExp[index].to);
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
    workExp[index].responsibilities.forEach((current) => {
      const li = document.createElement("li");
      li.classList.add("work-list-item");
      responsibilities.appendChild(li);
      li.innerHTML = li.innerHTML + current;
    });
    experience.appendChild(responsibilities);
  });
};

const displayUserEducation = async () => {
  const response = await fetch(`${baseUrl}/education`);
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
};

const displayUserCourses = async () => {
  const response = await fetch(`${baseUrl}/education`);
  const training = await response.json();
  const course = document.querySelector(".training");
  training.trainings.map((value, index) => {
    const organisation = document.createElement("p");
    organisation.classList.add("course-org");
    organisation.innerHTML = training.trainings[index].organization;
    course.appendChild(organisation);

    const courseList = document.createElement("ul");
    courseList.classList.add("course-list");
    const arr = training.trainings[index].subjects;
    arr.forEach((current) => {
      const li = document.createElement("li");
      li.classList.add("course-list-item");
      courseList.appendChild(li);
      li.innerHTML = li.innerHTML + current;
    });
    course.appendChild(courseList);
  });
};

const displayUserSkills = async () => {
  const response = await fetch(`${baseUrl}/skills`);
  const skills = await response.json();
  const hard = skills.filter((skills) => skills.type == "Hard");
  const soft = skills.filter((skills) => skills.type == "Soft");

  const techSkills = document.querySelector(".tech-skills");
  const hardSkills = document.createElement("ul");
  hardSkills.classList.add("tech-skills-list");
  hard.forEach((current) => {
    const li = document.createElement("li");
    li.classList.add("tech-skills-item");
    hardSkills.appendChild(li);
    const hardList = document.createElement("span");
    hardList.classList.add("tech-skills-text");
    hardList.innerHTML = current.name;
    li.appendChild(hardList);
    techSkills.appendChild(hardSkills);
  });

  const softSkills = document.querySelector(".soft-skills");
  const softSkillsList = document.createElement("ul");
  softSkillsList.classList.add("soft-skills-list");
  soft.forEach((current) => {
    const li = document.createElement("li");
    li.classList.add("soft-skills-item");
    softSkillsList.appendChild(li);
    const softList = document.createElement("span");
    softList.classList.add("soft-skills-text");
    softList.innerHTML = current.name;
    li.appendChild(softList);
    softSkills.appendChild(softSkillsList);
  });
};

displayUserInfo();
displayUserExperience();
displayUserEducation();
displayUserCourses();
displayUserSkills();
