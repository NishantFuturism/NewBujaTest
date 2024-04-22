const config = {
  timeout: 5000,
  token: 'Bearer ',
  method: 'POST',
  production: 'https://productionapi.adibuja.com',
  development: 'https://devuiapi.adibuja.com',
  testing: '',
  // live: 'https://api.adibuja.com',
  // baseUrl: 'https://devuiapi.adibuja.com',
  // baseUrl: 'https://demoliveuiapi.adibuja.com',
  baseUrl: 'https://api.adibuja.com',
  altBaseUrl: '',
  responsibleUrl: '',
  productionui: 'https://api.adibuja.com',
  endPoints: {
    production: {
      categories: '/api/v1/show-all-categories?clientId=1&languageId=2',
      sitemap_subcategories_xml: '/api/v1/siteMap-category-productsdata?clientId=1&languageId=2&catUrl',
      sitemap_main_xml: '/api/v1/siteMap-categorylinksandstaticlinks?clientId=1&languageId=2',
      sitemap_index_xml: '/api/v1/sitemap-categorydata?clientId=1&languageId=2',
    },
    dev: {
      categories: '/api/v1/show-all-categories?clientId=1&languageId=2',
      sitemap_subcategories_xml: '/api/v1/siteMap-category-productsdata?clientId=1&languageId=2&catUrl',
      sitemap_main_xml: '/api/v1/siteMap-categorylinksandstaticlinks?clientId=1&languageId=2',
      sitemap_index_xml: '/api/v1/sitemap-categorydata?clientId=1&languageId=2',
    }
  }
}
module.exports = config;