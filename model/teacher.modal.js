let query = require('../db/mysql')
const Teacher = {
    searchTeacher(params) {
        let _sql = `select * from teacherInfo where Name = "${params}"`
        return query(_sql, params)
    },
    zonghechengz(params) {
        let _sql = `select * from ZZJS_ZHCZNL`
        return query(_sql, params)
    },
    jiaoxuejibenxx(params) {
        let _sql = `select * from ZZJS_JXJBXX`
        return query(_sql, params)
    },
    // 评价
    jiaoxuepingjia(params) {
        let _sql = `select * from ZZJS_JXPJ`
        return query(_sql, params)
    },
    // 创新
    jiaoxuechuangxin(params) {
        let _sql = `select * from ZZJS_KYJCX`
        return query(_sql, params)
    },
    // 服务学生
    fuwuxuesheng(params) {
        let _sql = `select * from ZZJS_FWXS`
        return query(_sql, params)
    },
    // 课堂教学
    ketangjiaoxue(params) {
        let _sql = `select * from ZZJS_KTJX`
        return query(_sql, params)
    },
    // 教师整体
    jiaoshizhengti(params) {
        let _sql = `select * from ZZJS_teacherSta`
        return query(_sql, params)
    },
    teacherInfo(params) {
        let _sql = `select * from teacherInfo`
        return query(_sql, params)
    }
}
module.exports = Teacher