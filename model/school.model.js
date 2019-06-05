let query = require('../db/mysql')
const School = {
    // 查询所有
    baseData(params) {
        let _sql = `select * from ZZXX01STA_KZ`
        return query(_sql, params)
    },
    // 根据年查询
    schoolBaseByYear(params) {
        let _sql = `select * from ZZXX01STA_KZ where ZZND="${params}";`
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
        let _sql = `select * from ZZXX07STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate8(params) {
        let _sql = `select * from ZZXX08STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate9(params) {
        let _sql = `select * from ZZXX09STA_KZ where ZZND="${params}"`
        return query(_sql, params)
    },
    schoolBaseDate10(params) {
        let _sql = `select * from zzxx10_kz where ZZND="${params}"`
        return query(_sql, params)
    },
    // all
    dnzs1(params) {
        let _sql = `select * from zzxx_dnzhaosheng`
        return query(_sql, params)
    },
    dnzxs1(params) {
        let _sql = `select * from zzxx_dnzaixiaosheng`
        return query(_sql, params)
    },
    glbkxlzxsxinxi1(params) {
        let _sql = `select * from zzxx_glbkxlzxsxinxi`
        return query(_sql, params)
    },
    DNZSFangShi1(params) {
        let _sql = `select * from zzxx_dnzsfangshi`
        return query(_sql, params)
    },
    JGSheZhi1(params) {
        let _sql = `select * from zzxx_jgshezhi`
        return query(_sql, params)
    },
    GLXXXITong1(params) {
        let _sql = `select * from zzxx_glxxxitong`
        return query(_sql, params)
    },
    JBQK1(params) {
        let _sql = `select * from zzxx_jbqk`
        return query(_sql, params)
    },
    ZDJZMianJi1(params) {
        let _sql = `select * from zzxx_zdjzmianji`
        return query(_sql, params)
    },
    GCTSZL1(params) {
        let _sql = `select * from zzxx_gctszl`
        return query(_sql, params)
    },
    YLSDMTYYJF1(params) {
        let _sql = `select * from zzxx_ylsdmtyyjf`
        return query(_sql, params)
    },
    XiaoYuanWang1(params) {
        let _sql = `select * from zzxx_xiaoyuanwang`
        return query(_sql, params)
    },
    GDZiChan1(params) {
        let _sql = `select * from zzxx_gdzichan`
        return query(_sql, params)
    },
    XNSJJD1(params) {
        let _sql = `select * from zzxx_xnsjjd`
        return query(_sql, params)
    },
    XWSXSXJD1(params) {
        let _sql = `select * from zzxx_xwsxsxjd`
        return query(_sql, params)
    },
    ZYJNJDJG1(params) {
        let _sql = `select * from zzxx_zyjnjdjg`
        return query(_sql, params)
    },
    JingFeiShouRu1(params) {
        let _sql = `select * from zzxx_jingfeishouru`
        return query(_sql, params)
    },
    JingFeiZhiChu1(params) {
        let _sql = `select * from zzxx_jingfeizhichu`
        return query(_sql, params)
    },
    XNZRJSJBQK1(params) {
        let _sql = `select * from zzxx_xnzrjsjbqk`
        return query(_sql, params)
    },
    XNZRJSSKQK1(params) {
        let _sql = `select * from zzxx_xnzrjsskqk`
        return query(_sql, params)
    },
    XNZRJSQTQK1(params) {
        let _sql = `select * from zzxx_xnzrjsqtqk`
        return query(_sql, params)
    },
    XNJKRYJBQK1(params) {
        let _sql = `select * from zzxx_xnjkryjbqk`
        return query(_sql, params)
    },
    XNJKRYSKQK1(params) {
        let _sql = `select * from zzxx_xnjkryskqk`
        return query(_sql, params)
    },
    XWJZJSJBQK1(params) {
        let _sql = `select * from zzxx_xwjzjsjbqk`
        return query(_sql, params)
    },
    XWJZJSSKQK1(params) {
        let _sql = `select * from zzxx_xwjzjsskqk`
        return query(_sql, params)
    },
    XWJKJSJBQK1(params) {
        let _sql = `select * from zzxx_xwjkjsjbqk`
        return query(_sql, params)
    },
    XWJKJSSKQK1(params) {
        let _sql = `select * from zzxx_xwjkjsskqk`
        return query(_sql, params)
    },
    ZhuanYe1(params) {
        let _sql = `select * from zzxx_zhuanye`
        return query(_sql, params)
    },
    KSKeCheng1(params) {
        let _sql = `select * from zzxx_kskecheng`
        return query(_sql, params)
    },
    ZYZGZSJSPeiXun1(params) {
        let _sql = `select * from zzxx_zyzgzsjspeixun`
        return query(_sql, params)
    },
    DGSXLuYong1(params) {
        let _sql = `select * from zzxx_dgsxluyong`
        return query(_sql, params)
    },
    CXHeZuo1(params) {
        let _sql = `select * from zzxx_cxhezuo`
        return query(_sql, params)
    },
    ZSJiuYe1(params) {
        let _sql = `select * from zzxx_zsjiuye`
        return query(_sql, params)
    },
    JXZDYXGL1(params) {
        let _sql = `select * from zzxx_jxzdyxgl`
        return query(_sql, params)
    },
    ZZJXGLRenYuanQK1(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk`
        return query(_sql, params)
    },
    ZZXSGLRenYuanQK1(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk`
        return query(_sql, params)
    },
    ZZDDRenYuanQK1(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk`
        return query(_sql, params)
    },
    ZZJXYJRenYuanQK1(params) {
        let _sql = `select * from zzxx_zzjxyjrenyuanqk`
        return query(_sql, params)
    },
    JZXueQK1(params) {
        let _sql = `select * from zzxx_jzxueqk`
        return query(_sql, params)
    },
    ZhaoSheng1(params) {
        let _sql = `select * from zzxx_zhaosheng`
        return query(_sql, params)
    },
    JiuYeQK1(params) {
        let _sql = `select * from zzxx_jiuyeqk`
        return query(_sql, params)
    },
    JuanZengQK1(params) {
        let _sql = `select * from zzxx_juanzengqk_id`
        return query(_sql, params)
    },
    JYDWLianXiRen1(params) {
        let _sql = `select * from zzxx_jydwlianxiren`
        return query(_sql, params)
    },
    YJBYSXinXi1(params) {
        let _sql = `select * from zzxx_yjbysxinxi`
        return query(_sql, params)
    },
    ZLGongCheng1(params) {
        let _sql = `select * from zzxx_zlgongcheng`
        return query(_sql, params)
    },
    HuoJiang1(params) {
        let _sql = `select * from zzxx_huojiang`
        return query(_sql, params)
    },
    ChuoXueMX1(params) {
        let _sql = `select * from zzxx_chuoxuemx`
        return query(_sql, params)
    },
    XSSheTuan1(params) {
        let _sql = `select * from zzxx_xsshetuan`
        return query(_sql, params)
    },
    ZYZHuoDong1(params) {
        let _sql = `select * from zzxx_zyzhuodong`
        return query(_sql, params)
    },
    ZXSXinXi1(params) {
        let _sql = `select * from zzxx_zxsxinxi`
        return query(_sql, params)
    },
    // jxzbUp
    dnzs2(params) {
        let _sql = `select * from zzxx_dnzhaosheng where riseFall = 1`
        return query(_sql, params)
    },
    dnzxs2(params) {
        let _sql = `select * from zzxx_dnzaixiaosheng where riseFall = 1`
        return query(_sql, params)
    },
    glbkxlzxsxinxi2(params) {
        let _sql = `select * from zzxx_glbkxlzxsxinxi where riseFall = 1`
        return query(_sql, params)
    },
    DNZSFangShi2(params) {
        let _sql = `select * from zzxx_dnzsfangshi where riseFall = 1`
        return query(_sql, params)
    },
    JGSheZhi2(params) {
        let _sql = `select * from zzxx_jgshezhi where riseFall = 1`
        return query(_sql, params)
    },
    GLXXXITong2(params) {
        let _sql = `select * from zzxx_glxxxitong where riseFall = 1`
        return query(_sql, params)
    },
    JBQK2(params) {
        let _sql = `select * from zzxx_jbqk where riseFall = 1`
        return query(_sql, params)
    },
    ZDJZMianJi2(params) {
        let _sql = `select * from zzxx_zdjzmianji where riseFall = 1`
        return query(_sql, params)
    },
    GCTSZL2(params) {
        let _sql = `select * from zzxx_gctszl where riseFall = 1`
        return query(_sql, params)
    },
    YLSDMTYYJF2(params) {
        let _sql = `select * from zzxx_ylsdmtyyjf where riseFall = 1`
        return query(_sql, params)
    },
    XiaoYuanWang2(params) {
        let _sql = `select * from zzxx_xiaoyuanwang where riseFall = 1`
        return query(_sql, params)
    },
    GDZiChan2(params) {
        let _sql = `select * from zzxx_gdzichan where riseFall = 1`
        return query(_sql, params)
    },
    XNSJJD2(params) {
        let _sql = `select * from zzxx_xnsjjd where riseFall = 1`
        return query(_sql, params)
    },
    XWSXSXJD2(params) {
        let _sql = `select * from zzxx_xwsxsxjd where riseFall = 1`
        return query(_sql, params)
    },
    ZYJNJDJG2(params) {
        let _sql = `select * from zzxx_zyjnjdjg where riseFall = 1`
        return query(_sql, params)
    },
    JingFeiShouRu2(params) {
        let _sql = `select * from zzxx_jingfeishouru where riseFall = 1`
        return query(_sql, params)
    },
    JingFeiZhiChu2(params) {
        let _sql = `select * from zzxx_jingfeizhichu where riseFall = 1`
        return query(_sql, params)
    },
    XNZRJSJBQK2(params) {
        let _sql = `select * from zzxx_xnzrjsjbqk where riseFall = 1`
        return query(_sql, params)
    },
    XNZRJSSKQK2(params) {
        let _sql = `select * from zzxx_xnzrjsskqk where riseFall = 1`
        return query(_sql, params)
    },
    XNZRJSQTQK2(params) {
        let _sql = `select * from zzxx_xnzrjsqtqk where riseFall = 1`
        return query(_sql, params)
    },
    XNJKRYJBQK2(params) {
        let _sql = `select * from zzxx_xnjkryjbqk where riseFall = 1`
        return query(_sql, params)
    },
    XNJKRYSKQK2(params) {
        let _sql = `select * from zzxx_xnjkryskqk where riseFall = 1`
        return query(_sql, params)
    },
    XWJZJSJBQK2(params) {
        let _sql = `select * from zzxx_xwjzjsjbqk where riseFall = 1`
        return query(_sql, params)
    },
    XWJZJSSKQK2(params) {
        let _sql = `select * from zzxx_xwjzjsskqk where riseFall = 1`
        return query(_sql, params)
    },
    XWJKJSJBQK2(params) {
        let _sql = `select * from zzxx_xwjkjsjbqk where riseFall = 1`
        return query(_sql, params)
    },
    XWJKJSSKQK2(params) {
        let _sql = `select * from zzxx_xwjkjsskqk where riseFall = 1`
        return query(_sql, params)
    },
    ZhuanYe2(params) {
        let _sql = `select * from zzxx_zhuanye where riseFall = 1`
        return query(_sql, params)
    },
    KSKeCheng2(params) {
        let _sql = `select * from zzxx_kskecheng where riseFall = 1`
        return query(_sql, params)
    },
    ZYZGZSJSPeiXun2(params) {
        let _sql = `select * from zzxx_zyzgzsjspeixun where riseFall = 1`
        return query(_sql, params)
    },
    DGSXLuYong2(params) {
        let _sql = `select * from zzxx_dgsxluyong where riseFall = 1`
        return query(_sql, params)
    },
    CXHeZuo2(params) {
        let _sql = `select * from zzxx_cxhezuo where riseFall = 1`
        return query(_sql, params)
    },
    ZSJiuYe2(params) {
        let _sql = `select * from zzxx_zsjiuye where riseFall = 1`
        return query(_sql, params)
    },
    JXZDYXGL2(params) {
        let _sql = `select * from zzxx_jxzdyxgl where riseFall = 1`
        return query(_sql, params)
    },
    ZZJXGLRenYuanQK2(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = 1`
        return query(_sql, params)
    },
    ZZXSGLRenYuanQK2(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = 1`
        return query(_sql, params)
    },
    ZZDDRenYuanQK2(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = 1`
        return query(_sql, params)
    },
    ZZJXYJRenYuanQK2(params) {
        let _sql = `select * from zzxx_zzjxyjrenyuanqk where riseFall = 1`
        return query(_sql, params)
    },
    JZXueQK2(params) {
        let _sql = `select * from zzxx_jzxueqk where riseFall = 1`
        return query(_sql, params)
    },
    ZhaoSheng2(params) {
        let _sql = `select * from zzxx_zhaosheng where riseFall = 1`
        return query(_sql, params)
    },
    JiuYeQK2(params) {
        let _sql = `select * from zzxx_jiuyeqk where riseFall = 1`
        return query(_sql, params)
    },
    JuanZengQK2(params) {
        let _sql = `select * from zzxx_juanzengqk_id where riseFall = 1`
        return query(_sql, params)
    },
    JYDWLianXiRen2(params) {
        let _sql = `select * from zzxx_jydwlianxiren where riseFall = 1`
        return query(_sql, params)
    },
    YJBYSXinXi2(params) {
        let _sql = `select * from zzxx_yjbysxinxi where riseFall = 1`
        return query(_sql, params)
    },
    ZLGongCheng2(params) {
        let _sql = `select * from zzxx_zlgongcheng where riseFall = 1`
        return query(_sql, params)
    },
    HuoJiang2(params) {
        let _sql = `select * from zzxx_huojiang where riseFall = 1`
        return query(_sql, params)
    },
    ChuoXueMX2(params) {
        let _sql = `select * from zzxx_chuoxuemx where riseFall = 1`
        return query(_sql, params)
    },
    XSSheTuan2(params) {
        let _sql = `select * from zzxx_xsshetuan where riseFall = 1`
        return query(_sql, params)
    },
    ZYZHuoDong2(params) {
        let _sql = `select * from zzxx_zyzhuodong where riseFall = 1`
        return query(_sql, params)
    },
    ZXSXinXi2(params) {
        let _sql = `select * from zzxx_zxsxinxi where riseFall = 1`
        return query(_sql, params)
    },
    // jxzbDown
    dnzs3(params) {
        let _sql = `select * from zzxx_dnzhaosheng where riseFall = -1`
        return query(_sql, params)
    },
    dnzxs3(params) {
        let _sql = `select * from zzxx_dnzaixiaosheng where riseFall = -1`
        return query(_sql, params)
    },
    glbkxlzxsxinxi3(params) {
        let _sql = `select * from zzxx_glbkxlzxsxinxi where riseFall = -1`
        return query(_sql, params)
    },
    DNZSFangShi3(params) {
        let _sql = `select * from zzxx_dnzsfangshi where riseFall = -1`
        return query(_sql, params)
    },
    JGSheZhi3(params) {
        let _sql = `select * from zzxx_jgshezhi where riseFall = -1`
        return query(_sql, params)
    },
    GLXXXITong3(params) {
        let _sql = `select * from zzxx_glxxxitong where riseFall = -1`
        return query(_sql, params)
    },
    JBQK3(params) {
        let _sql = `select * from zzxx_jbqk where riseFall = -1`
        return query(_sql, params)
    },
    ZDJZMianJi3(params) {
        let _sql = `select * from zzxx_zdjzmianji where riseFall = -1`
        return query(_sql, params)
    },
    GCTSZL3(params) {
        let _sql = `select * from zzxx_gctszl where riseFall = -1`
        return query(_sql, params)
    },
    YLSDMTYYJF3(params) {
        let _sql = `select * from zzxx_ylsdmtyyjf where riseFall = -1`
        return query(_sql, params)
    },
    XiaoYuanWang3(params) {
        let _sql = `select * from zzxx_xiaoyuanwang where riseFall = -1`
        return query(_sql, params)
    },
    GDZiChan3(params) {
        let _sql = `select * from zzxx_gdzichan where riseFall = -1`
        return query(_sql, params)
    },
    XNSJJD3(params) {
        let _sql = `select * from zzxx_xnsjjd where riseFall = -1`
        return query(_sql, params)
    },
    XWSXSXJD3(params) {
        let _sql = `select * from zzxx_xwsxsxjd where riseFall = -1`
        return query(_sql, params)
    },
    ZYJNJDJG3(params) {
        let _sql = `select * from zzxx_zyjnjdjg where riseFall = -1`
        return query(_sql, params)
    },
    JingFeiShouRu3(params) {
        let _sql = `select * from zzxx_jingfeishouru where riseFall = -1`
        return query(_sql, params)
    },
    JingFeiZhiChu3(params) {
        let _sql = `select * from zzxx_jingfeizhichu where riseFall = -1`
        return query(_sql, params)
    },
    XNZRJSJBQK3(params) {
        let _sql = `select * from zzxx_xnzrjsjbqk where riseFall = -1`
        return query(_sql, params)
    },
    XNZRJSSKQK3(params) {
        let _sql = `select * from zzxx_xnzrjsskqk where riseFall = -1`
        return query(_sql, params)
    },
    XNZRJSQTQK3(params) {
        let _sql = `select * from zzxx_xnzrjsqtqk where riseFall = -1`
        return query(_sql, params)
    },
    XNJKRYJBQK3(params) {
        let _sql = `select * from zzxx_xnjkryjbqk where riseFall = -1`
        return query(_sql, params)
    },
    XNJKRYSKQK3(params) {
        let _sql = `select * from zzxx_xnjkryskqk where riseFall = -1`
        return query(_sql, params)
    },
    XWJZJSJBQK3(params) {
        let _sql = `select * from zzxx_xwjzjsjbqk where riseFall = -1`
        return query(_sql, params)
    },
    XWJZJSSKQK3(params) {
        let _sql = `select * from zzxx_xwjzjsskqk where riseFall = -1`
        return query(_sql, params)
    },
    XWJKJSJBQK3(params) {
        let _sql = `select * from zzxx_xwjkjsjbqk where riseFall = -1`
        return query(_sql, params)
    },
    XWJKJSSKQK3(params) {
        let _sql = `select * from zzxx_xwjkjsskqk where riseFall = -1`
        return query(_sql, params)
    },
    ZhuanYe3(params) {
        let _sql = `select * from zzxx_zhuanye where riseFall = -1`
        return query(_sql, params)
    },
    KSKeCheng3(params) {
        let _sql = `select * from zzxx_kskecheng where riseFall = -1`
        return query(_sql, params)
    },
    ZYZGZSJSPeiXun3(params) {
        let _sql = `select * from zzxx_zyzgzsjspeixun where riseFall = -1`
        return query(_sql, params)
    },
    DGSXLuYong3(params) {
        let _sql = `select * from zzxx_dgsxluyong where riseFall = -1`
        return query(_sql, params)
    },
    CXHeZuo3(params) {
        let _sql = `select * from zzxx_cxhezuo where riseFall = -1`
        return query(_sql, params)
    },
    ZSJiuYe3(params) {
        let _sql = `select * from zzxx_zsjiuye where riseFall = -1`
        return query(_sql, params)
    },
    JXZDYXGL3(params) {
        let _sql = `select * from zzxx_jxzdyxgl where riseFall = -1`
        return query(_sql, params)
    },
    ZZJXGLRenYuanQK3(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = -1`
        return query(_sql, params)
    },
    ZZXSGLRenYuanQK3(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = -1`
        return query(_sql, params)
    },
    ZZDDRenYuanQK3(params) {
        let _sql = `select * from zzxx_zzjxglrenyuanqk where riseFall = -1`
        return query(_sql, params)
    },
    ZZJXYJRenYuanQK3(params) {
        let _sql = `select * from zzxx_zzjxyjrenyuanqk where riseFall = -1`
        return query(_sql, params)
    },
    JZXueQK3(params) {
        let _sql = `select * from zzxx_jzxueqk where riseFall = -1`
        return query(_sql, params)
    },
    ZhaoSheng3(params) {
        let _sql = `select * from zzxx_zhaosheng where riseFall = -1`
        return query(_sql, params)
    },
    JiuYeQK3(params) {
        let _sql = `select * from zzxx_jiuyeqk where riseFall = -1`
        return query(_sql, params)
    },
    JuanZengQK3(params) {
        let _sql = `select * from zzxx_juanzengqk_id where riseFall = -1`
        return query(_sql, params)
    },
    JYDWLianXiRen3(params) {
        let _sql = `select * from zzxx_jydwlianxiren where riseFall = -1`
        return query(_sql, params)
    },
    YJBYSXinXi3(params) {
        let _sql = `select * from zzxx_yjbysxinxi where riseFall = -1`
        return query(_sql, params)
    },
    ZLGongCheng3(params) {
        let _sql = `select * from zzxx_zlgongcheng where riseFall = -1`
        return query(_sql, params)
    },
    HuoJiang3(params) {
        let _sql = `select * from zzxx_huojiang where riseFall = -1`
        return query(_sql, params)
    },
    ChuoXueMX3(params) {
        let _sql = `select * from zzxx_chuoxuemx where riseFall = -1`
        return query(_sql, params)
    },
    XSSheTuan3(params) {
        let _sql = `select * from zzxx_xsshetuan where riseFall = -1`
        return query(_sql, params)
    },
    ZYZHuoDong3(params) {
        let _sql = `select * from zzxx_zyzhuodong where riseFall = -1`
        return query(_sql, params)
    },
    ZXSXinXi3(params) {
        let _sql = `select * from zzxx_zxsxinxi where riseFall = -1`
        return query(_sql, params)
    }
}

module.exports = School