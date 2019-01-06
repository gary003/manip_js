// const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   console.log(resp.explanation);
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

const axios = require("axios");

(async () => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").catch(e => e)
  console.log(response.data.url);
  console.log(response.data.explanation);
})();
