// images.js
export const imgUrl = new URL('../public/img.png', import.meta.url).href

export function getImageUrl (name) {
  return new URL(`../public/dir/${name}.png`, import.meta.url).href
}
