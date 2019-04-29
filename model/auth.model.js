let query = require('../db/mysql')
const Auth = {
    // 注册
    register(params) {
        let _sql = "insert into user set username= ?, password= ?;"
        return query(_sql, params)
    },
    // 登录
    login(params) {
        let _sql = `select id, username, password from userinfo where username="${params}";`
        return query(_sql, params)
    },
    //通过username查找
    findByUsername(params) {
        let _sql = `select id, username, password, avatar,signature from user where username="${params}";`
        return query(_sql, params)
    },
    // 获取用户信息
    getUserInfo(params) {
        let _sql = `select  id, username from user where username="${params}";`
        return query(_sql, params)
    },
    // 更新用户信息
    updateUserInfo(params) {
        let _sql = `update user set  username=?, password=? where id=?;`
        return query(_sql, params)
    }
}

module.exports = Auth