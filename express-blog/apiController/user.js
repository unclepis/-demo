const { exec } = require('../db/mysql')
const login = (username, password) => {
    const sql = `select * from users where username='${username}' and password='${password}'`
    return exec(sql)
}
module.exports = login