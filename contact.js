// change navbar style on scroll
window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  
  
  // Show/hide nav menu
  const menu = document.querySelector(".nav__menu");
  const menuBtn = document.querySelector("#open-menu-btn");
  const closeBtn = document.querySelector("#close-menu-btn");
  
  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });
  
  // Close nav-menu
  const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  };
  
  // Attach the closeNav function to the close button click event
  closeBtn.addEventListener("click", closeNav);
  