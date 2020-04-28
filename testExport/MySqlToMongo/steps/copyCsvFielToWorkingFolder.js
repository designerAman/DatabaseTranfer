const { exec } = require('child_process');
const mongoDb = require('./csvToMongiDb')

exports.moveToWorkingFolder = () => {
    exec(`move "C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\user.csv" A:\\savanSirTasks\\testExport\\csvFile`, (err, stdout, stderr) => {
        // console.log(6, 'copy', err);
        // console.log(7, 'copy', stdout);
        // console.log(8, 'copy', stderr);
        mongoDb.importToMongoDb();
    })
}
