const request = require('request');
const domain = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(domain, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
    return;
  }
  if (data.length === 0) {
    console.log(`Couldn't find the specified breed`);
    return;
  }
  console.log(data[0].description);
  return;
});