const Koa = require('koa');
const router = require('./routers')
const cors = require('koa2-cors');
const views = require('koa-views')
const app = new Koa()
const path = require('path')
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');

app.use(cors());
app.use(bodyParser());
app.use(static('static'));
app.use(views(path.join(__dirname, './view'), {
    map: { html: 'ejs' }
}))

app.keys = ['some secret hurr'];
app.use(session({
    key: 'koa:sess', //cookie key (default is koa:sess)
    maxAge: 86400000, // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true, //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true, //签名默认true
    rolling: false, //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false, //(boolean) renew session when session is nearly expired,
}, app));

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(8000)
console.log(`listening on port 8000`)