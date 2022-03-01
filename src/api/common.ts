/**
 * 公共接口封装
 */
import request from '@/utils/request'

// 使用泛型 提取公共格式的接口定义
interface ResponseData<T> {
    status: number,
    msg: string,
    data: T
}

// 获取站点列表
export const getLoginInfo = (data) => {
    return request.get<ResponseData<{
        logo_square: string,
        logo_logo: string,
        slide: string[],
    }
    >>('/login/info').then(res => {
        return res.data.data
    })
}
