require('@babel/register');
const config = require('./config');
// const apiCall = require('./apiCall');
const fetchNetwork = require('./fetchNetwork');
const loopApiCall = require('./loopApiCalls');
// const FileMaker = require('file-maker');
// const fetch = require('node-fetch').default;
async function run() {
  function deeperCb(status) {
    console.log(status ? "success" : "failure");
    if (status) {
      const urlArrays = [{
        // url: 'https://demoliveuiapi.adibuja.com/api/v1/siteMap-categorylinksandstaticlinks?clientId=1&languageId=2',
        url: config.baseUrl + config.endPoints.production.sitemap_main_xml,
        locFileName: './main'
      },
      {
        // url: 'https://demoliveuiapi.adibuja.com/api/v1/sitemap-categorydata?clientId=1&languageId=2',
        url: config.baseUrl + config.endPoints.production.sitemap_index_xml,
        locFileName: './sitemap-index'
      }
      ]
      loopApiCall(urlArrays, deeperCb, true)
    }
  }
  try {
    // let url = "https://demoliveuiapi.adibuja.com/api/v1/mainmenu?clientId=1&languageId=2";
    const url = config.baseUrl + config.endPoints.production.categories;
    fetchNetwork(url, 'POST').then(async response => {
      console.log(response);
      if (response && response.status === 200) {
        response = await response.json();
        let categoryIndex = response.filter((item, index) => item.DisplayName == 'Categories')
        categoryIndex = categoryIndex[0]
        // console.log("responsenish==", response);
        console.log("categoryIndex===>>", categoryIndex);
        if (response.length > 0 && categoryIndex && categoryIndex.SubMenus && categoryIndex.DisplayName === 'Categories' && categoryIndex.SubMenus.length > 0) {
          const urlArrays = [];
          for (let index = 0; index < categoryIndex.SubMenus.length; index++) {
            const menus = categoryIndex.SubMenus;
            let catName = menus[index].PageURL;
            catName = catName.substring(9); // cutting the unwanted word category/
            urlArrays.push({
              // url: `https://demoliveuiapi.adibuja.com/api/v1/siteMap-category-productsdata?clientId=1&languageId=2&catUrl=${catName}&CurrencyCode=INR`,
              url: `${config.baseUrl + config.endPoints.production.sitemap_subcategories_xml}=${catName}&CurrencyCode=INR`,
              locFileName: `./category/${catName}`
            })
          }
          loopApiCall(urlArrays, deeperCb, false)
        }
      }
    }).catch(err => console.log(err))
  } catch (err) {
    console.log(err);
  }
}

module.exports = run;