module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: [
    "<rootDir>/src/_tests_/**/*.{js,jsx,ts,tsx}", 
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}", 
  ],
};
