(function () {
  var STORAGE_KEY = "theme";

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored === "light" || stored === "dark" ? stored : null;
    } catch (e) {
      return null;
    }
  }

  function getEffectiveTheme() {
    return getStoredTheme() || getSystemTheme();
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    syncToggle(getEffectiveTheme());
  }

  function syncToggle(effective) {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    var next = effective === "dark" ? "light" : "dark";
    button.setAttribute(
      "aria-label",
      next === "dark" ? "Switch to dark mode" : "Switch to light mode"
    );
    button.setAttribute(
      "title",
      next === "dark" ? "Switch to dark mode" : "Switch to light mode"
    );
  }

  function init() {
    applyTheme(getStoredTheme());

    var button = document.getElementById("theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var next = getEffectiveTheme() === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        applyTheme(next);
      });
    }

    var media = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () {
      if (!getStoredTheme()) {
        applyTheme(null);
      }
    };
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
    } else if (typeof media.addListener === "function") {
      media.addListener(onChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
