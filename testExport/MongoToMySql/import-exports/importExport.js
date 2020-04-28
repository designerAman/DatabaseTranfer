const Cron = require('cron').CronJob;
const redis = require('redis');
const client = redis.createClient();
const { MongodbToMysql } = require('./MongodbToMysql');


const importExport = async () => {

    const task = new Cron('*/5 * * * * *', () => {
        client.get('maxIdExportedToMySql', (err, id) => {
            console.log("last id : -", id)
            MongodbToMysql(id)
        });
    }, null, true, 'Asia/Kolkata');
}

module.exports = importExport;