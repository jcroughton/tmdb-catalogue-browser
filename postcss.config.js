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

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    // purgecss({
    //   keyframes: true,
    //   fontFace: true,
    //   content: [
    //     './src/**/*.js',
    //   ],
    //   css: [
    //     './src/**/*.css'
    //   ],
    //   extractors: [
    //     {
    //       extractor: class TailwindExtractor {
    //         static extract(content) {
    //           const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
    //           return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
    //         }
    //       },
    //       extensions: ['html', 'js'],
    //     },
    //   ],
    //   whitelistPatterns: collectPurgeWhitelistPatterns(),
    //   whitelistPatternsChildren: collectPurgeWhitelistPatterns(),
    // })
  ]
}
