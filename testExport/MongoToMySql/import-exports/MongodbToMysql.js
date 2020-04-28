const sql = require('../databases/mysql');
const User = require('../databases/mongodb');
const redis = require('redis');
const client = redis.createClient();
const idArr = []

module.exports.MongodbToMysql = async (id) => {
    const data = await User.find(
        { id: { $gt: id } }
    );


    let newData = JSON.parse(JSON.stringify(data));
    // console.log("New Data Inserted : -", newData)
    newData.forEach(item => {
        idArr.push(+item.id);
        console.log(17, idArr);
    });

    newData.forEach((item) => {
        const query = `insert into user values("${item.id}", "${item.name}", "${item.age}")`;
        sql.query(query, (err, result) => {
            if (err) throw err;
            console.log("Data saved ..!!");
            console.log(20, item.id);
        })
    })
    console.log(25, idArr);
    client.set("maxIdExportedToMySql", Math.max(...idArr));

}