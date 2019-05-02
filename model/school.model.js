let query = require('../db/mysql')
const School = {
    // 查询所有
    baseData(params) {
        let _sql = `select * from ZZXX10STA_KZ`
        return query(_sql, params)
    },
    // 查询2019
    schoolBaseByYear(params) {
        let _sql = `select * from ZZXX10STA_KZ where ZZND="${params}";`
        return query(_sql, params)
    },
}

module.exports = School