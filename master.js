const feedback = document.querySelector(".feedback");
const allLis = document.querySelectorAll("ul li");
const submitBtn = document.querySelector(".submit");
const submitError = document.querySelector(".submit-error");
const afterSubmit = document.querySelector(".after-submit");
const afterSubmitRating = document.querySelector(".after-submit .rating span");
let rateNumber = 0;

allLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    allLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    rateNumber = e.target.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (rateNumber === 0) {
    submitError.classList.remove("hidden");
  } else {
    feedback.classList.add("hidden");
    afterSubmit.classList.remove("hidden");
    afterSubmitRating.textContent = rateNumber;
  }
});
