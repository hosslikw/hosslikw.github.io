// Add font to stylesheet
const addFontToStylesheet = (font) => {
  const fontName = font.fullName || font.postscriptName;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(`
    @font-face {
      font-family: '${fontName}';
      src: local('${font.fullName}'), local('${font.postscriptName}');
    }
  `));
  document.head.appendChild(style);
}

// Check if an element is using a specific font
const elementUsesFont = (element, font) => {
  const computedStyle = window.getComputedStyle(element)
  return (
    computedStyle.getPropertyValue('font-family') === `'${font.fullName}'` ||
    computedStyle.getPropertyValue('font-family') === `'${font.postscriptName}'`
  )
}

// Set 'system-font-active' class on all elements using a specific font
const setSystemFontActiveClass = (fonts) => {
  const fontFamilies = fonts.map((font) => font.fullName)
  const liElements = document.querySelectorAll('.parent li')

  liElements.forEach((li) => {
    if (fontFamilies.some((fontFamily) => elementUsesFont(li, fontFamily))) {
      li.classList.add('system-font-active')
    }
  })
}

// Example usage:
const fonts = [
  { id: 'font_001', fullName: 'Arial', postscriptName: 'Arial' },
  { id: 'font-002', fullName: 'Roboto', postscriptName: 'Roboto' }
]

fonts.forEach(addFontToStylesheet)
setSystemFontActiveClass(fonts)
