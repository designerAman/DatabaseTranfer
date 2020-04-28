const CronJob = require('cron').CronJob;
const MySql = require('./steps/mySqlToCsv');

const job = new CronJob('*/10 * * * * *', () => {
    MySql.exportToCSV();
}, null, true, 'Asia/Kolkata')

// const db = require('./Db/db');
