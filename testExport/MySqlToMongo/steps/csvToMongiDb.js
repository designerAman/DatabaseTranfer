const { exec } = require('child_process');

exports.importToMongoDb = () => {
    exec(`mongoimport --host localhost --db newDb --collection users --type=csv < A:\\savanSirTasks\\testExport\\csvFile\\user.csv --fields name,address,age`, (err, stdout, stderr) => {
        // console.log(6, 'mongoDb', err);
        // console.log(7, 'mongoDb', stdout);
        // console.log(8, 'mongoDb', stderr);
    })
}
