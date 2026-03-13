/* ABOUTME: Makes the RMAI logo link to realmindsai.com.au instead of site home */
/* ABOUTME: Site name text still links back to the site home page */
document.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector(".md-header__button.md-logo");
  if (logo) {
    logo.href = "https://realmindsai.com.au";
    logo.target = "_blank";
    logo.rel = "noopener";
    logo.title = "Real Minds AI";
  }
});
