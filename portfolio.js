"use strict";

//All DOM element selection
const header = document.getElementById("header");
const nav = document.querySelector(".navigation");
const ul = document.getElementById("ul");
const navItems = document.querySelectorAll(".navitem");
const knowbtn = document.querySelector(".knowmore");
const projectsection = document.querySelector(".projects");
const social = document.querySelector(".social");
const connectwithme = document.querySelector(".connect");
const allSection = document.querySelectorAll(".section");

//Whenever there is hover on any nav item then targetted on scale and other opacity decreases

navItems.forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    const target = e.target;

    navItems.forEach(function (it) {
      it.style.opacity = "0.5";
    });

    target.closest(".navitem").style.opacity = "1";
    target.closest(".navitem").style.transform = "scale(1.09)";
  });

  //Whenever mouse leaves any nav item then back to normal

  item.addEventListener("mouseleave", function (e) {
    const target = e.target;

    navItems.forEach(function (it) {
      it.style.opacity = "1";
      target.closest(".navitem").style.transform = "scale(1)";
    });
  });
});

//When know more button is clicked then it scroll to the Project section

knowbtn.addEventListener("click", function () {
  // const scoords = toscroll.getBoundingClientRect();
  // window.scrollTo({
  //   left: scoords.left + window.pageYOffset,
  //   top: scoords.top + window.pageXOffset,
  //   behavior: "smooth",
  // });

  projectsection.scrollIntoView({ behavior: "smooth" });
});

//When Nav item is clicked then it scroll to the respective section

navItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest(".navitem").classList.contains("navitem1")) {
      header.scrollIntoView({ behavior: "smooth" });
    }

    if (target.closest(".navitem").classList.contains("navitem2")) {
      projectsection.scrollIntoView({ behavior: "smooth" });
    }

    if (target.closest(".navitem").classList.contains("navitem3")) {
      connectwithme.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//When scroll down and project come in the viewport then sticked navigation should be displayed

const call = function (entries, observer) {
  entries.forEach((entry) => {
    //If the header is not intersecting then it should appear

    if (!entry.isIntersecting) {
      ul.classList.add("sticky");
      social.classList.add("socialstick");
    } else {
      ul.classList.remove("sticky");
      social.classList.remove("socialstick");
    }
  });
};

const opt = {
  root: null,
  threshold: 0,
  rootMargin: `-5px`,
};

const observer = new IntersectionObserver(call, opt);

observer.observe(header);

//Revealing page when loads

const pagecall = function () {
  nav.classList.remove("page-hidden");
  header.classList.remove("page-hidden");
};

pagecall();

//Revealing all sections

const sectioncall = function (entries, observe) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.remove("section-hidden");
  });
};

const sectionopt = {
  root: null,
  threshold: 0.15,
  // rootMargin: `-5px`,
};

const sectionobserver = new IntersectionObserver(sectioncall, sectionopt);

allSection.forEach(function (sec) {
  sec.classList.add("section-hidden");
  sectionobserver.observe(sec);
});
