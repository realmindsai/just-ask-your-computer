/* ABOUTME: RMAI logo redirect and grid card click-through behavior */
/* ABOUTME: Logo links to realmindsai.com.au; clicking anywhere on a grid card navigates to its link */

(function () {
  function initRMAI() {
    var logo = document.querySelector(".md-header__button.md-logo");
    if (logo && !logo.dataset.rmaiDone) {
      logo.href = "https://realmindsai.com.au";
      logo.target = "_blank";
      logo.rel = "noopener";
      logo.title = "Real Minds AI";
      logo.dataset.rmaiDone = "true";
    }

    document.querySelectorAll(".grid.cards > ul > li").forEach(function (card) {
      if (card.dataset.clickable) return;
      var link = card.querySelector("a[href]");
      if (link) {
        card.dataset.clickable = "true";
        card.style.cursor = "pointer";
        card.addEventListener("click", function (e) {
          if (e.target.closest("a")) return;
          link.click();
        });
      }
    });
  }

  initRMAI();

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () { initRMAI(); });
  }
})();
