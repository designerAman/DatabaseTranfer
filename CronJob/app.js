const express = require('express');
const CronJob = require('cron').CronJob;
const mail = require('./functionality/nodemailer');
const bacupDb = require('./functionality/backupDb');
const migrationDb = require('./functionality/dataMigration');

const app = express();


new CronJob('*/5 * * * * *', () => {
    console.log('Hello');
    bacupDb.backUp();
    // migrationDb.migration();
    // mail.tranporter.sendMail(mail.mailOprions, (err, info) => {
    //     if (err) console.log(err);
    //     else console.log('Email sent successfully')
    // })
}, null, true, 'Asia/Kolkata');

app.listen(3000, () => {
    console.log('server started at port 3000');
});