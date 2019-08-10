const Router = require('koa-router')
const controller = require('../controller')
const session = require('koa-session');
const router = new Router({
    // prefix: '/api'
})

//API
router
    // 路由
    /* .get('/', async(ctx, next) => {
        if (ctx.session.user === '') {
            ctx.response.redirect('/login');
            return
        }
        let title = 'hello koa2'
        await ctx.render('index', {
            title,
        })
    }) */
    .get('/login', async(ctx, next) => {
        let title = 'hello koa2'
        await ctx.render('login', {
            title,
        })
    })
    // post请求
    .post('/api/login', controller.auth.login) // 登录
    .post('/api/loginout', controller.auth.loginout) // 登出
    // get请求
    .get('/api/schoolBase', controller.school.schoolBase) // 学校画像
    .get('/api/schoolBaseByYear', controller.school.schoolBaseByYear) // 学校画像2019
    .get('/api/schoolBaseAllByYear', controller.school.schoolBaseAllByYear)
    // .get('/api/dnzs', controller.school.dnzs)
    .get('/api/all', controller.school.all)
    .get('/api/jxzbUp', controller.school.jxzbUp)
    .get('/api/jxzbDown', controller.school.jxzbDown)
    .get('/api/lszg', controller.school.jxzbDown)
    .get('/api/lszd', controller.school.jxzbDown)
    .get('/api/ndzkUp', controller.school.jxzbDown)
    .get('/api/ndzkDown', controller.school.jxzbDown)
    .get('/api/ndbhgBb', controller.school.jxzbDown)
    .get('/api/ndbhgXb', controller.school.jxzbDown)
    .get('/api/ndbhGs', controller.school.jxzbDown)
    .get('/api/ndbhEh', controller.school.jxzbDown)
    // 老师
    .get('/api/teacher/zonghechengz', controller.teacher.zonghechengznl)
    .get('/api/teacher/jiaoxuejibenxx', controller.teacher.jiaoxuejibenxx)
    .get('/api/teacher/jiaoxuepingjia', controller.teacher.jiaoxuepingjia)
    .get('/api/teacher/jiaoxuechuangxin', controller.teacher.jiaoxuechuangxin)
    .get('/api/teacher/teacherInfo', controller.teacher.teacherInfo)
    .get('/api/teacher/searchTeacher', controller.teacher.searchTeacher)

    // searchTeacher

module.exports = router