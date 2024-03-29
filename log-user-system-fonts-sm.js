// function notifyMe() {
//    Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//          new Notification("Reviewing Local Fonts");
//          logUserSystemFonts();
//       }
//    });
// }

// async function logUserSystemFonts() {
//    try {
//       const availableFonts = await window.queryLocalFonts()
//       const fontFamily = getCss("#font-hundred")[0].style
//       const specifiedFont = fontFamily.split(",")[0].trim()
//       const isFontAvailable = availableFonts.some((font) => font.postscriptName === specifiedFont)
//       if (isFontAvailable) {
//          document.body.classList.add("system-font-active")
//          console.log(`The specified font ${specifiedFont} is available locally.`)
//          style: window.getComputedStyle(element, null).getPropertyValue('font-family')
//       } else {

//       } catch (err) {
//          console.error(err.name, err.message)
//       }
//    }
