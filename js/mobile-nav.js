(function () {
  function initMobileNav() {
    var navCollapse = document.getElementById("navbarSupportedContent");
    var toggler = document.querySelector(".navbar-toggler");

    if (!navCollapse || !toggler || typeof bootstrap === "undefined" || !bootstrap.Collapse) {
      return;
    }

    var collapseApi = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });

    function syncBodyLock() {
      document.body.classList.toggle("menu-open", navCollapse.classList.contains("show"));
    }

    navCollapse.addEventListener("show.bs.collapse", function () {
      document.body.classList.add("menu-open");
    });

    navCollapse.addEventListener("hidden.bs.collapse", function () {
      document.body.classList.remove("menu-open");
    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 1200 && navCollapse.classList.contains("show")) {
          collapseApi.hide();
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (window.innerWidth > 1200 || !navCollapse.classList.contains("show")) {
        return;
      }
      if (!navCollapse.contains(event.target) && !toggler.contains(event.target)) {
        collapseApi.hide();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navCollapse.classList.contains("show")) {
        collapseApi.hide();
        toggler.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1200) {
        document.body.classList.remove("menu-open");
      } else {
        syncBodyLock();
      }
    });

    syncBodyLock();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
