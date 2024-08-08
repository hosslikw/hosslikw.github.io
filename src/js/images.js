// images.js
export const imgUrl = new URL('../public/img.png', import.meta.url).href

/**
 * This function constructs and returns the URL for an image file located in the 'public/dir' directory.
 *
 * @param {string} name - The name of the image file without the file extension.
 * @returns {string} - The fully qualified URL for the image file.
 *
 * @example
 * // Example usage:
 * const imageName = 'example';
 * const imageUrl = getImageUrl(imageName);
 * console.log(imageUrl); // Output: "file:///path/to/project/public/dir/example.png"
 */
export function getImageUrl (name) {
  return new URL(`../public/dir/${name}.png`, import.meta.url).href
}
