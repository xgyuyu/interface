const School = require('../model/school.model')
const jsonToken = require('jsonwebtoken')
const { handleSuccess, handleError } = require("../middlewears/handle")
const SchoolController = {
    // 学校画像基础数据
    schoolBase: async (ctx) => {
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
}

module.exports = SchoolController