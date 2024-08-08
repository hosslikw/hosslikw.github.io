/* theme toggle buttons */
;(function () {
  const toggleTheme = (theme) => {
    const lightThemeToggle = document.getElementById("light-theme-toggle")
    const darkThemeToggle = document.getElementById("dark-theme-toggle")
    const enableToggle = (btn) => btn.setAttribute("aria-pressed", "true")
    const disableToggle = (btn) => btn.setAttribute("aria-pressed", "false")

    document.documentElement.setAttribute("data-theme", theme)
    window.localStorage.setItem("theme", theme)
    if (theme === "light") {
      enableToggle(lightThemeToggle)
      disableToggle(darkThemeToggle)
    } else {
      enableToggle(darkThemeToggle)
      disableToggle(lightThemeToggle)
    }
  }

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const switcher = document.getElementById("js-theme-switcher")
      switcher.removeAttribute("hidden")

      const lightThemeToggle = document.getElementById("light-theme-toggle")
      const darkThemeToggle = document.getElementById("dark-theme-toggle")

      // get any previously-chosen themes
      let theme = document.documentElement.getAttribute("data-theme") || "light"

      toggleTheme(theme)

      lightThemeToggle.addEventListener(
        "click",
        () => toggleTheme("light"),
        false,
      )
      darkThemeToggle.addEventListener(
        "click",
        () => toggleTheme("dark"),
        false,
      )
    },
    false,
  )
})()
