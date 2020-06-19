"use strict";

const searchBtnHeader = document.querySelector(".header__search-btn");
const inputHeader = document.querySelector(".header__input");
const hamburgerBtn = document.querySelector(".header__hamburger-btn");
const navList = document.querySelector(".header__nav-list");

searchBtnHeader.addEventListener("click", () => {
  inputHeader.classList.toggle("header__input--show");
});

hamburgerBtn.addEventListener("click", () => {
  navList.classList.toggle("header__nav-list--show");
});
