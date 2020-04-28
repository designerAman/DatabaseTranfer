const { exec } = require('child_process');
const migration = require('./dataMigration');

module.exports.backUp = () => {
    exec('mysqldump -uroot -pAman@123 testCron > backUpFile/backupfile.sql', () => {
        console.log('database backup successfully');
        migration.migration();
    });
}
