require('@babel/register');
const FileMaker = require('file-maker');
const fetch = require('node-fetch').default;

async function fileCreator(response, locFileName) {
  try {
    let content = response;
    content = `\`${content}\``;
    content.replace(/\,/g, "");
    content.replace(/["']/g, "");
    content.trim().replace(/^"+|"+$/g, '');
    // content = content.replace(/\s*</g, '<');
    content = unescape(content).slice(1, -1);
    const myFile = new FileMaker();
    myFile.writeLine(content);
    // myFile.saveTo('./sitemap-index.xml');
    myFile.saveTo(`${locFileName}.xml`);
  } catch (err) {
    console.log("ERR File Creator", err);
  }
}

module.exports = fileCreator;
