let query = require('../db/mysql')
const School = {
    // 查询所有
    baseData(params) {
        let _sql = `select * from ZZXX10STA_KZ`
        return query(_sql, params)
    },
    // 根据年查询
    schoolBaseByYear(params) {
        let _sql = `select * from ZZXX10STA_KZ where ZZND="${params}";`
        return query(_sql, params)
    },
    schoolBaseDate1(params) {
        let _sql = `select * from ZZXX01STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate2(params) {
        let _sql = `select * from ZZXX02STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate3(params) {
        let _sql = `select * from ZZXX03STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate4(params) {
        let _sql = `select * from ZZXX04STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate5(params) {
        let _sql = `select * from ZZXX05STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate6(params) {
        let _sql = `select * from ZZXX06STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate7(params) {
        let _sql = `select * from ZZXX07STA_KZ`
        return query(_sql, params)
    },
    schoolBaseDate8(params) {
        let _sql = `select * from ZZXX08STA_KZ`
        return query(_sql, params)
    },
    schoolBaseDate9(params) {
        let _sql = `select * from ZZXX09STA_KZ`
        return query(_sql, params)
    },
}

module.exports = School