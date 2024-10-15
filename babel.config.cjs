const { default: plugin } = require("@tailwindcss/forms");

module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: "current" } }],
		['@babel/preset-react', { runtime: 'automatic' }],
		'@babel/preset-typescript',
	],
	plugins: [
		'babel-plugin-transform-vite-meta-env'
	],
}