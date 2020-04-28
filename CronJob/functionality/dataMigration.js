const { exec } = require('child_process');
const mail = require('./nodemailer');

module.exports.migration = () => {
    exec('mysql -uroot -pAman@123 testCron2 < backUpFile/backupfile.sql', (err, stdout, stderr) => {
        console.log('database migrated successfully');
        mail.tranporter.sendMail(mail.mailOprions, (err, info) => {
            console.log(2);
            if (err) console.log(err);
            else console.log('Your data is successfully backedUp and copied into another database');
        })
    });
}
