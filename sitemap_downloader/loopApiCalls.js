require('@babel/register');
const fetchNetwork = require('./fetchNetwork');
const fileCreator = require('./fileCreator');

async function loopApiCall(dataArray, deeperCb, isLastCall = false) {
  try {

    Promise.all(dataArray.map((item, ind) =>
      fetchNetwork(item.url, 'POST').then(async res => {
        if (res && res.status === 200) {
          res = await res.json();
          fileCreator(res, item.locFileName);
        } else {
          console.log("failed item", ind);
          deeperCb(false);
        }
      })
    ))
      .then(() => {
        deeperCb(isLastCall ? false : true)
      })
      .catch((er) => {
        console.log(er);
        deeperCb(false);
      })
  } catch (err) {
    console.log(err);
    deeperCb(false)
  }
}

module.exports = loopApiCall;
