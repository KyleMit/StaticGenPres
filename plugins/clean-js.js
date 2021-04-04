const { minify } = require("terser")

/**
 * Minify JS source code
 *
 * @param {String} jsSource
 */
module.exports = async function (jsSource, callback) {
  try {
    const minified = await minify(jsSource)
    callback(null, minified.code)
  } catch (err) {
    console.error("Terser error: ", err)
    // Fail gracefully.
    callback(null, jsSource)
  }
}
