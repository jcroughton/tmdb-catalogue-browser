const purgecss = require('@fullhuman/postcss-purgecss');

/**
 * Return an array of regex patterns defining CSS classes to be whitelisted
 * during CSS purge
 *
 * @return  {Array}
 */
function collectPurgeWhitelistPatterns() {
  // do something to collect the whitelist
  return [
    /fill-current/g,
    /stroke-current/g,
  ];
}

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 * https://github.com/FullHuman/purgecss-webpack-plugin
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[\w-/:]+(?<!:)/g) || [];
  }
}

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    purgecss({
      keyframes: true,
      fontFace: true,
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
      ],
      css: ['./src/**/*.css'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js']
        },
      ],
      whitelistPatterns: collectPurgeWhitelistPatterns(),
      whitelistPatternsChildren: collectPurgeWhitelistPatterns(),
    })
  ]
}
