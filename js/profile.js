"use strict";

const dropzoneEl = document.querySelector(".choice-cover__upload");

document
  .getElementById("cover-input")
  .addEventListener("change", readURL, true);
function readURL() {
  let file = document.getElementById("cover-input").files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    document.querySelector(".changeable-bg--2").style.backgroundImage =
      "url(" + reader.result + ")";
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }

  document.getElementById("cover-file-inp").style.backdropFilter = "blur(10px)";

  document
    .querySelector(".changeable-bg--2")
    .classList.add("changeable-bg--active");
}

document
  .getElementById("profile-input")
  .addEventListener("change", readURL2, true);
function readURL2() {
  let file = document.getElementById("profile-input").files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    document
      .querySelector(".changeable-bg--1")
      .classList.remove("changeable-bg--1--placeholder");
    document.querySelector(".changeable-bg--1").style.backgroundImage =
      "url(" + reader.result + ")";
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }

  document
    .querySelector(".changeable-bg--1")
    .classList.add("changeable-bg--active");
}

document
  .getElementById("delete-profile-btn")
  .addEventListener("click", function () {
    document
      .querySelector(".changeable-bg--1")
      .classList.add("changeable-bg--1--placeholder");
  });

const dropContainer = document.querySelector(".choice-cover__upload");

const fileInput = document.getElementById("cover-input");

dropContainer.ondragover = dropContainer.ondragenter = function (evt) {
  evt.preventDefault();
};

dropContainer.ondrop = function (evt) {
  fileInput.files = evt.dataTransfer.files;

  const dT = new DataTransfer();
  dT.items.add(evt.dataTransfer.files[0]);
  fileInput.files = dT.files;

  readURL();
  function readURL() {
    let file = document.getElementById("cover-input").files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      document.querySelector(".changeable-bg--2").style.backgroundImage =
        "url(" + reader.result + ")";
    };
    if (file) {
      reader.readAsDataURL(file);
    }

    document.getElementById("cover-file-inp").style.backdropFilter =
      "blur(10px)";

    document
      .querySelector(".changeable-bg--2")
      .classList.add("changeable-bg--active");
  }

  evt.preventDefault();
};
