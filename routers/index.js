const Router = require('koa-router')
const controller = require('../controller')
const session = require('koa-session');
const router = new Router({
    // prefix: '/api'
})

//API
router
// 路由
    .get('/', async(ctx, next) => {
        if (ctx.session.user === '') {
            ctx.response.redirect('/login');
            return
        }
        let title = 'hello koa2'
        await ctx.render('index', {
            title,
        })
    })
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

module.exports = router