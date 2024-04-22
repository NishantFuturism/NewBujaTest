require('@babel/register');
const fetch = require('node-fetch').default;

async function fetchNetwork(url, method = 'POST') {
  try {
    return fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response;
        }
      })
      .catch((er) => {
        console.log("errrr", er);
        return false;
      })
  } catch (err) {
    console.log("errrr2", er);
    return false;
  }
}

module.exports = fetchNetwork;
