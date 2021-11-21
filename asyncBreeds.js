const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed,callbackfn) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's callback: it has the data.");
    if (!error) {
      callbackfn(data);
    }
  });
};

const asyncCallback = (data) => {
  if (data !== undefined) {
    console.log('Return Value: ', data)
  }
}

const bombay = breedDetailsFromFile('Bombay',asyncCallback);
//console.log('Return Value: ', bombay);