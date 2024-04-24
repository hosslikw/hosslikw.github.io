/* theme toggle buttons */
(function () {
  const enableToggle = function (btn) {
    btn.setAttribute('aria-pressed', 'true')
  }

  const disableToggle = function (btn) {
    btn.setAttribute('aria-pressed', 'false')
  }

  document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('js-theme-switcher')
    switcher.removeAttribute('hidden')

    const light-theme-toggle = document.getElementById('light-theme-toggle')
    const dark_theme_toggle = document.getElementById('dark-theme-toggle')

    // get any previously-chosen themes
    let theme = document.documentElement.getAttribute('data-theme')

    if (theme === 'light') {
      enableToggle(light-theme-toggle)
      disableToggle(dark_theme_toggle)
    } else if (theme === 'dark') {
      enableToggle(dark_theme_toggle)
      disableToggle(light-theme-toggle)
    }

    light-theme-toggle.addEventListener('click', function () {
      enableToggle(light-theme-toggle)
      theme = this.getAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', theme)
      window.localStorage.setItem('theme', theme)

      disableToggle(dark_theme_toggle)
    }, false)

    dark_theme_toggle.addEventListener('click', function () {
      enableToggle(dark_theme_toggle)
      theme = this.getAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', theme)
      window.localStorage.setItem('theme', theme)

      disableToggle(light-theme-toggle)
    }, false)
  }, false)
})()
