const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(domain, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (data.length === 0) {
      callback(`Couldn't find the specified breed`, null);
      return;
    }
    callback(null, data[0].description);
    return;
  });
};

module.exports = { fetchBreedDescription };