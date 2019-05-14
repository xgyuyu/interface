const School = require('../model/school.model')
const jsonToken = require('jsonwebtoken')
const { handleSuccess, handleError } = require("../middlewears/handle")
const SchoolController = {
    // 学校画像基础数据
    schoolBase: async(ctx) => {
        await School.baseData().then(res => {
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
    schoolBaseByYear: async(ctx) => {
        let ctx_query = ctx.query;
        await School.schoolBaseByYear(ctx_query.year).then(res => {
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
    schoolBaseAllByYear: async(ctx) => {
        let ctx_query = ctx.query;
        const res1 =  await School.schoolBaseDate1(ctx_query.year)
        const res2 =  await School.schoolBaseDate2(ctx_query.year)
        const res3 =  await School.schoolBaseDate3(ctx_query.year)
        const res4 =  await School.schoolBaseDate4(ctx_query.year)
        const res5 =  await School.schoolBaseDate5(ctx_query.year)
        const res6 =  await School.schoolBaseDate6(ctx_query.year)
        const res7 =  await School.schoolBaseDate7(ctx_query.year)
        const res8 =  await School.schoolBaseDate8(ctx_query.year)
        const res9 =  await School.schoolBaseDate9(ctx_query.year)
        const res = [res1,res2,res3,res4,res5,res6,res7,res8,res9]
        handleSuccess({
            ctx,
            result: res,
            message: '成功'
        })
    },
}

module.exports = SchoolController