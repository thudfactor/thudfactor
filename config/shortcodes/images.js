const Image = require('@11ty/eleventy-img');
const path = require('path');

/**
 * Requires a path to an image, alt text, and an optional
 * array of widths. Returns a single image tag with srcset.
 * Images are converted to webp along the way.
 *
 * @param {string} imgSrc - path to the image
 * @param {string} alt - alt text for the image
 * @param {string} widths - JSON array of numbers
 * @param {string} sizes - sizes attribute for the image
 * @returns {string} - HTML image tag
 */
async function image(
  imgSrc,
  alt,
  widths="[300, 600, 900, 1200, 1800]",
  sizes="(max-width: 600px) 100vw, 600px") {

  const parsedWidths = JSON.parse(widths);
  if (!Array.isArray(parsedWidths)) {
    widthsArray = [parsedWidths];
  } else {
    widthsArray = parsedWidths
      .filter(width => typeof width === 'number');
  }

  const config = {
    widths: widthsArray,
    outputDir: "./dist/img/",
    formats: ['webp'],
  }
  const templatePath = path.dirname(this.page.inputPath);

  let imgPath = "";
  if (imgSrc.startsWith('/')) {
    imgPath = path.join('./src', imgSrc);
  } else if (imgSrc.startsWith('http')) {
    imgPath = imgSrc;
  } else {
    imgPath = path.join(templatePath, imgSrc);
  }

  let result = await Image(imgPath, config);

  const srcset = result.webp.map(({srcset}) => srcset).join(', ');
  const defaultImage = result.webp[0];

  const img = `<img class="basic-image" loading="lazy" alt="${alt}" src="${defaultImage.url}" width="${defaultImage.width}" height="${defaultImage.height}" srcset="${srcset}" sizes="${sizes}" />`;

  return img;
}

module.exports = {
  image,
}