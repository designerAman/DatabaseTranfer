const nodemailer = require('nodemailer')

module.exports.tranporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: "aman.gupta@rapidops.com",
        pass: "vcgdxngdwfovyszp"
    }
});

module.exports.mailOprions = {
    from: "aman.gupta@rapidops.com",
    to: "nawalkishor.yadav@rapidops.com",
    subject: "Database Detail",
    text: `Your data is successfully backedUp and copied into another database`
}