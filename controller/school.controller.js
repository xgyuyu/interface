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
        const res10 =  await School.schoolBaseDate10(ctx_query.year)
        const res = [res1[0] || [],res2[0] || [],res3[0] || [],res4[0] || [],res5[0] || [],res6[0] || [],res7[0] || [],res8[0] || [],res9[0] || [],res10[0] || []]
        handleSuccess({
            ctx,
            result: res,
            message: '成功'
        })
    },
    all: async(ctx) => {
        const res1 = await School.dnzs1()
        const res2 = await School.dnzxs1()
        const res3 = await School.glbkxlzxsxinxi1()
        const res4 = await School.DNZSFangShi1()
        const res5 = await School.JGSheZhi1()
        const res6 = await School.GLXXXITong1()
        const res7 = await School.JBQK1()
        const res8 = await School.ZDJZMianJi1()
        const res9 = await School.GCTSZL1()
        const res10 = await School.YLSDMTYYJF1()
        const res11 = await School.GDZiChan1()
        const res12 = await School.XNSJJD1()
        const res13 = await School.XWSXSXJD1()
        const res14 = await School.ZYJNJDJG1()
        const res15 = await School.JingFeiShouRu1()
        const res16 = await School.XiaoYuanWang1()
        const res17 = await School.JingFeiZhiChu1()
        const res18 = await School.XNZRJSJBQK1()
        const res19 = await School.XNZRJSSKQK1()
        const res20 = await School.XNZRJSQTQK1()
        const res21 = await School.XNJKRYJBQK1()
        const res22 = await School.XNJKRYSKQK1()
        const res23 = await School.XWJZJSJBQK1()
        const res24 = await School.XWJZJSSKQK1()
        const res25 = await School.XWJKJSJBQK1()
        const res26 = await School.XWJKJSSKQK1()
        const res27 = await School.ZhuanYe1()
        const res28 = await School.KSKeCheng1()
        const res29 = await School.ZYZGZSJSPeiXun1()
        const res30 = await School.DGSXLuYong1()
        const res31 = await School.CXHeZuo1()
        const res32 = await School.ZSJiuYe1()
        const res33 = await School.JXZDYXGL1()
        const res34 = await School.ZZJXGLRenYuanQK1()
        const res35 = await School.ZZXSGLRenYuanQK1()
        const res36 = await School.ZZDDRenYuanQK1()
        const res37 = await School.ZZJXYJRenYuanQK1()
        const res38 = await School.JZXueQK1()
        const res39 = await School.ZhaoSheng1()
        const res40 = await School.JiuYeQK1()
        const res41 = await School.JuanZengQK1()
        const res42 = await School.JYDWLianXiRen1()
        const res43 = await School.YJBYSXinXi1()
        const res44 = await School.HuoJiang1()
        const res45 = await School.ChuoXueMX1()
        const res46 = await School.XSSheTuan1()
        const res47 = await School.ZYZHuoDong1()
        const res48 = await School.ZXSXinXi1()
        const res = [res1,res2,res3,res4,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19,res20,res21,res22,res23,res24,res25,res26,res27,res28,res29,res30,res31,res32,res32,res33,res34,res35,res36,res37,res38,res39,res40,res41,res42,res43,res44,res45,res46,res47,res48]
        handleSuccess({
            ctx,
            result: res,
            message: '成功'
        })
    },
    jxzbUp: async(ctx) => {
        const res1 = await School.dnzs2()
        const res2 = await School.dnzxs2()
        const res3 = await School.glbkxlzxsxinxi2()
        const res4 = await School.DNZSFangShi2()
        const res5 = await School.JGSheZhi2()
        const res6 = await School.GLXXXITong2()
        const res7 = await School.JBQK2()
        const res8 = await School.ZDJZMianJi2()
        const res9 = await School.GCTSZL2()
        const res10 = await School.YLSDMTYYJF2()
        const res11 = await School.GDZiChan2()
        const res12 = await School.XNSJJD2()
        const res13 = await School.XWSXSXJD2()
        const res14 = await School.ZYJNJDJG2()
        const res15 = await School.JingFeiShouRu2()
        const res16 = await School.XiaoYuanWang2()
        const res17 = await School.JingFeiZhiChu2()
        const res18 = await School.XNZRJSJBQK2()
        const res19 = await School.XNZRJSSKQK2()
        const res20 = await School.XNZRJSQTQK2()
        const res21 = await School.XNJKRYJBQK2()
        const res22 = await School.XNJKRYSKQK2()
        const res23 = await School.XWJZJSJBQK2()
        const res24 = await School.XWJZJSSKQK2()
        const res25 = await School.XWJKJSJBQK2()
        const res26 = await School.XWJKJSSKQK2()
        const res27 = await School.ZhuanYe2()
        const res28 = await School.KSKeCheng2()
        const res29 = await School.ZYZGZSJSPeiXun2()
        const res30 = await School.DGSXLuYong2()
        const res31 = await School.CXHeZuo2()
        const res32 = await School.ZSJiuYe2()
        const res33 = await School.JXZDYXGL2()
        const res34 = await School.ZZJXGLRenYuanQK2()
        const res35 = await School.ZZXSGLRenYuanQK2()
        const res36 = await School.ZZDDRenYuanQK2()
        const res37 = await School.ZZJXYJRenYuanQK2()
        const res38 = await School.JZXueQK2()
        const res39 = await School.ZhaoSheng2()
        const res40 = await School.JiuYeQK2()
        const res41 = await School.JuanZengQK2()
        const res42 = await School.JYDWLianXiRen2()
        const res43 = await School.YJBYSXinXi2()
        const res44 = await School.HuoJiang2()
        const res45 = await School.ChuoXueMX2()
        const res46 = await School.XSSheTuan2()
        const res47 = await School.ZYZHuoDong2()
        const res48 = await School.ZXSXinXi2()
        const res = [res1,res2,res3,res4,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19,res20,res21,res22,res23,res24,res25,res26,res27,res28,res29,res30,res31,res32,res32,res33,res34,res35,res36,res37,res38,res39,res40,res41,res42,res43,res44,res45,res46,res47,res48]
        handleSuccess({
            ctx,
            result: res,
            message: '成功'
        })
    },
    jxzbDown: async(ctx) => {
        const res1 = await School.dnzs2()
        const res2 = await School.dnzxs2()
        const res3 = await School.glbkxlzxsxinxi2()
        const res4 = await School.DNZSFangShi2()
        const res5 = await School.JGSheZhi2()
        const res6 = await School.GLXXXITong2()
        const res7 = await School.JBQK2()
        const res8 = await School.ZDJZMianJi2()
        const res9 = await School.GCTSZL2()
        const res10 = await School.YLSDMTYYJF2()
        const res11 = await School.GDZiChan2()
        const res12 = await School.XNSJJD2()
        const res13 = await School.XWSXSXJD2()
        const res14 = await School.ZYJNJDJG2()
        const res15 = await School.JingFeiShouRu2()
        const res16 = await School.XiaoYuanWang2()
        const res17 = await School.JingFeiZhiChu2()
        const res18 = await School.XNZRJSJBQK2()
        const res19 = await School.XNZRJSSKQK2()
        const res20 = await School.XNZRJSQTQK2()
        const res21 = await School.XNJKRYJBQK2()
        const res22 = await School.XNJKRYSKQK2()
        const res23 = await School.XWJZJSJBQK2()
        const res24 = await School.XWJZJSSKQK2()
        const res25 = await School.XWJKJSJBQK2()
        const res26 = await School.XWJKJSSKQK2()
        const res27 = await School.ZhuanYe2()
        const res28 = await School.KSKeCheng2()
        const res29 = await School.ZYZGZSJSPeiXun2()
        const res30 = await School.DGSXLuYong2()
        const res31 = await School.CXHeZuo2()
        const res32 = await School.ZSJiuYe2()
        const res33 = await School.JXZDYXGL2()
        const res34 = await School.ZZJXGLRenYuanQK2()
        const res35 = await School.ZZXSGLRenYuanQK2()
        const res36 = await School.ZZDDRenYuanQK2()
        const res37 = await School.ZZJXYJRenYuanQK2()
        const res38 = await School.JZXueQK2()
        const res39 = await School.ZhaoSheng2()
        const res40 = await School.JiuYeQK2()
        const res41 = await School.JuanZengQK2()
        const res42 = await School.JYDWLianXiRen2()
        const res43 = await School.YJBYSXinXi2()
        const res44 = await School.HuoJiang2()
        const res45 = await School.ChuoXueMX2()
        const res46 = await School.XSSheTuan2()
        const res47 = await School.ZYZHuoDong2()
        const res48 = await School.ZXSXinXi2()
        const res = [res1,res2,res3,res4,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19,res20,res21,res22,res23,res24,res25,res26,res27,res28,res29,res30,res31,res32,res32,res33,res34,res35,res36,res37,res38,res39,res40,res41,res42,res43,res44,res45,res46,res47,res48]
        handleSuccess({
            ctx,
            result: res,
            message: '成功'
        })
    }
}

module.exports = SchoolController