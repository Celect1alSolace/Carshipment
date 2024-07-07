var elModeBtn = document.querySelector(".night-img");
let elDropDownHead = document.querySelector(".questions__svg");
let elDropDownHideContent = document.querySelector(".questions__hide-content");

elModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

elDropDownHead.addEventListener("click", function () {
  elDropDownHideContent.classList.toggle("show");
});
