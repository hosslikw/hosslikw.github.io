



const LOCAL_FONTS = 'local-fonts';
const PERMISSIONS = navigator.permissions;
requestPermission.onclick = async function () {
   try {
      const permission = await PERMISSIONS.request({ name: LOCAL_FONTS });
      if (state === "granted") {
         console.log("permission granted 👍");
         useLocalFonts();
      }
      else {
         console.log("permission denied 👎");
      }
   } catch (err) {
      if (err.name === TYPE_ERROR) {
         console.log("permission unspecified 🤷🏻‍♂️");
      }
      throw err;
   }
};

styleSheet.insertRule(`
@font-face {
font-family: '${font.fullName}';
src: local('${font.fullName}'),
local('${font.postscriptName}');
}`);


const array = [
   { id: 'font_001', fullName: 'Arial', postscriptName: 'Arial' },
   { id: 'font_002', fullName: 'Roboto', postscriptName: 'Roboto' },
];
useLocalFonts = function () {
   const fontFamilies = array.map(font => font.fullName);
   const liElements = document.querySelectorAll('.parent li');
   liElements.forEach(li => {
      if (fontFamilies.includes(window.getComputedStyle(li).getPropertyValue('font-family'))) {
         li.classList.add("system-font-active");
      }
   });
};
