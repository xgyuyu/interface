let query = require('../db/mysql')
const School = {
    // 登录
    baseData(params) {
        let _sql = `select * from ZZXX10STA_KZ`
        return query(_sql, params)
    }
}

module.exports = School