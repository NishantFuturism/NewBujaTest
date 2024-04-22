var CronJob = require('cron').CronJob;
const start = Date.now();
const sitemap = require('./downloadSitemap');
// '01 56 * * * *',     //Every Hour for everyday
var job = new CronJob(
  '0 0 10 26 10 *',
  function () {
    const end = Date.now();

    console.log('You will see this message every second,displayed value will be in milliseconds', end - start);
    sitemap();

  },
  null,
  false,
  'America/Los_Angeles'
);

job.start();