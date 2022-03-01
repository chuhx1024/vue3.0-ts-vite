/**
 * 公共接口封装
 */
import request from '@/utils/request0'
import { ILoginInfo } from './type/common'

// 获取站点列表
export const getLoginInfo = () => {
    return request<ILoginInfo>({
        method: 'get',
        url: '/login/info',
    })
}
