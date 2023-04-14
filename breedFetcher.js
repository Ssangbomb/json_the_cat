const request = require('request');

const catBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
  if (error) {
    console.log('error:', error);
    return;
  }
  if (!data[0]) {
    console.log("the requested breed is not found");
    return;
  }

});

