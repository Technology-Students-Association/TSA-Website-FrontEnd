// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrolly > 0);
});

//show/hide faq answear
const faqs = document.querySelectorAll(".faq");
faqs.addEventListener("click", () => {
  faqs.classList.toggle("open");

  //change icon
  const icon = faq.querySelector(".faq__icon i");
  if (icon.className === "uil uil-plus") {
    icon.className = "uil uil-minus";
  } else {
    icon.className = "uil uil-plus";
  }
});
