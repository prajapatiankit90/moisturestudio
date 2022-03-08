const config = {
  API_URL: process.env.REACT_APP_API_URL,
  APP_TYPE: process.env.REACT_APP_TYPE,
};

const currentEnvironment = process.env.REACT_APP_TYPE;
console.log("Current environment is: ", currentEnvironment);
export default config;
