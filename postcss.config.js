const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss(),
    require("autoprefixer"),
    ...process.env.NODE_ENV === 'production' ? [
      purgecss({
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './src/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    ] : []
  ]
};
