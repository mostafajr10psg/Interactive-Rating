let allLis = document.querySelectorAll("ul li");
let ul = document.querySelector("ul");
let submit = document.querySelector(".submit");
let afterSubmit = document.querySelector(".after-submit");
let beforeSubmit = document.querySelector(".before-submit");
let afterSubmitFirstP = document.querySelector(".after-submit p:first-of-type");
let rateNumber = 0;

ul.style.height = getComputedStyle(allLis[0]).getPropertyValue("width");
window.onresize = function () {
  ul.style.height = getComputedStyle(allLis[0]).getPropertyValue("width");
};

function beforeAndAfterSubmit(event) {
  allLis.forEach((li) => {
    li.addEventListener(event, function (e) {
      allLis.forEach((li) => {
        li.classList.remove("active");
      });
      e.target.classList.add("active");
      rateNumber = e.target.textContent;
      submit.onclick = function () {
        beforeSubmit.remove();
        afterSubmit.style.display = "flex";
        afterSubmitFirstP.textContent = `You selected ${rateNumber} out of 5`;
      };
    });
  });
}

if (matchMedia("(max-width: 767px)").matches) {
  beforeAndAfterSubmit("touchstart");
} else {
  beforeAndAfterSubmit("click");
}
