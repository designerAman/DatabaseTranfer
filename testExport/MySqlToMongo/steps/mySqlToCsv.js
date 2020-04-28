const { exec } = require('child_process');
const move = require('./copyCsvFielToWorkingFolder');
const redis = require('redis');

const client = redis.createClient();
let storedId = 0;

exports.exportToCSV = async () => {
    await client.get('maxIdExported', async (err, reply) => {
        storedId = await +reply;
        console.log(11, storedId);
        exec(`mysql --user=root --password=Aman@123 student -e "select * from studentTable where id>${storedId} INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/user.csv'  FIELDS TERMINATED BY ',' LINES TERMINATED BY '\\n';"`, (err, stdout, stderr) => {
            // console.log(6, 'mysql', err);
            // console.log(7, 'mysql', stdout);
            // console.log(8, 'mysql', stderr);

            exec(`mysql --user=root --password=Aman@123 student -e "select max(id) from studentTable where id>${storedId}`, (err, stdout, stderr) => {
                // console.log(15, err);
                // console.log(16, stdout);
                // console.log(17, stderr);

                if (!isNaN(+stdout.split('\n')[1]))
                    storedId = +stdout.split('\n')[1].split('\r')[0];
                console.log(storedId);
            })

            move.moveToWorkingFolder();
        });
    });
}
