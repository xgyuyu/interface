const Teacher = require('../model/teacher.modal')
const { handleSuccess, handleError } = require("../middlewears/handle")

const TeacherController = {
    // 综合成长能力
    zonghechengznl: async(ctx) => {
        await Teacher.zonghechengz().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    // 教学基本信息
    jiaoxuejibenxx: async(ctx) => {
        await Teacher.jiaoxuejibenxx().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    jiaoxuepingjia: async(ctx) => {
        await Teacher.jiaoxuepingjia().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    jiaoxuechuangxin: async(ctx) => {
        await Teacher.jiaoxuechuangxin().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    fuwuxuesheng: async(ctx) => {
        await Teacher.fuwuxuesheng().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    ketangjiaoxue: async(ctx) => {
        await Teacher.ketangjiaoxue().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    jiaoshizhengti: async(ctx) => {
        await Teacher.jiaoshizhengti().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    teacherInfo: async(ctx) => {
        await Teacher.teacherInfo().then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
    searchTeacher: async(ctx) => {
        let ctx_query = ctx.query;
        await Teacher.searchTeacher(ctx_query.name).then(res => {
            handleSuccess({
                ctx,
                result: res,
                message: '成功'
            })
        }).catch(err => {
            handleError({
                ctx,
                message: '失败',
                err
            })
        })
    },
}

module.exports = TeacherController