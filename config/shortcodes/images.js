const Image = require('@11ty/eleventy-img');
const path = require('path');

/** With this function, you can pass in a file name relative to the template
 * directory and get the full path to the file. OR you can pass in a full URL
 * and get that back. OR you can pass in a path relative to the content root of
 * the project and it is transformed to a path relative root directory.
 *
 * @param {string} partialPath - path to the image
 * @param {string} templatePath - path to the template
 */
function findInputPath(partialPath, templatePath = "") {
  if (partialPath.startsWith('/')) {
    return path.join('./src', partialPath);
  }

  if (partialPath.startsWith('http')) {
    return partialPath;
  }

  return path.join(templatePath, partialPath);
}

/**
 * Takes a path to an image and a config object, generates the image in webp
 * format, and returns an HTML image tag
 *
 * @param {string} imgPath
 * @param {object} config
 * @returns { string }
 */
async function generateImageTag(imgPath, config, alt="", sizes ="100vw", className="") {
  // provide a default output directory but override the format array if
  // that's provided in the config
  const configWithFormat = {
    outputDir: "./dist/img/",
    ...config,
    format: ['webp']
  }

  const result = await Image(imgPath, configWithFormat);
  const srcset = result.webp.map(({srcset}) => srcset).join(', ');
  const defaultImage = result.webp[0];
  const img = `<img class="${className}" \
    loading="lazy" \
    alt="${alt}" \
    src="${defaultImage.url}" \
    width="${defaultImage.width}" \
    height="${defaultImage.height}" \
    srcset="${srcset}" \
    sizes="${sizes}" />`;

  return img;
}

/**
 * Requires a path to an image, alt text, and an optional
 * array of widths. Returns a single image tag with srcset.
 * Images are converted to webp along the way.
 *
 * @param {string} imgSrc - path to the image
 * @param {string} alt - alt text for the image
 * @returns {string} - HTML image tag
 */
async function image(imgSrc, alt) {
  const config = {
    widths: [400, 900, 1200, 1800],
    outputDir: "./dist/img/",
  }

  const templatePath = path.dirname(this.page.inputPath);
  imgPath = findInputPath(imgSrc, templatePath);

  return generateImageTag(imgPath, config, alt, '(max-width: 600px) 100vw, 600px', 'basic-image');
}

async function coverImage (cover) {
  const { src, alt, attribution, description } = cover;
  const widths = [400, 900, 1200, 1800];
  const sizes = '(max-width: 600px) 100vw, 600px';

  const templatePath = path.dirname(this.page.inputPath);
  imgPath = findInputPath(src, templatePath);

  const image = await generateImageTag(imgPath, {widths}, alt, sizes);

  let attrStr = '';
  if (attribution) {
    const { name, link, license } = attribution;
    attrStr = (link) ? `<a href="${link}">${name}</a>` : name;
    if (license) {
      const { name: lname, link: llink } = license;
      attrStr += ` (${llink ? `<a href="${llink}">${lname}</a>` : lname})`;
    }
    attrStr = `<cite>Image by ${attrStr}<cite>`;
  };

  return  `<figure class="cover-image">\
    ${image}\
    <figcaption> \
      <p>${description || ''}</p> \
      ${attrStr || ''} \
    </figcaption>\
  </figure>`;
}

module.exports = {
  image, coverImage
}