module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
	setupFiles: ['<rootDir>/jest.mock.ts'], // Ensure the mocks are loaded
	transform: {
		"^.+\\.(ts|tsx|js|jsx)$": "babel-jest",  // Transform using babel-jest
	},
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
		"!src/**/*.d.ts",
		"!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
		"!**/node_modules/**",
		"!**/vendor/**",
		"!**/dist/**",
		"!**/build/**",
		"!vite.config.ts",
		"!**/coverage/**"
	],
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"setupTest.ts",
		"<rootDir>/src/shared/config",
		"vite-env.d.ts"
	],
	testPathIgnorePatterns: [
		"<rootDir>/src/shared/config",  // Ignore config files during testing
	],
	transformIgnorePatterns: [
		"<rootDir>/node_modules/",  // Don't transform node_modules
	],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',  // Mock CSS imports for tests
	},
};
