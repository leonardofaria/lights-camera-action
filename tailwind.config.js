module.exports = {
  purge: [],
  theme: {
    neomorphism: {
			sources: {
				"l": 0,
				"lt": Math.PI * (1 / 4),
				"t": Math.PI * (1 / 2),
				"rt": Math.PI * (3 / 4),
				"r": Math.PI,
				"rb": Math.PI * (5 / 4),
				"b": Math.PI * (3 / 2),
				"lb": Math.PI * (7 / 4),
			},
			distances: {
				"xs": "3px",
				"sm": "7px",
				"base": "11px",
				"md": "15px",
				"lg": "20px",
				"xl": "25px",
				"2xl": "30px",
				"3xl": "35px",
				"4xl": "40px",
				"5xl": "45px",
				"6xl": "50px"
			},
			blurs: {
				"sm": (value) => `calc(1 * var(${value}))`,
				"base": (value) => `calc(2 * var(${value}))`,
				"md": (value) => `calc(3 * var(${value}))`
			}
		},
  },
  variants: {
    neomorphism: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('tailwindcss-font-inter')(),
    require('neomorphism-in-tailwind')
  ],
}
