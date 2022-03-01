import axios from 'axios'
const service = axios.create({
    baseURL: 'https://shop.fed.lagou.com/api/admin',
})

// request interceptor
service.interceptors.request.use(
    config => {
        // config.headers['SDN-TOKEN'] = getToken() || ''

        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)
// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data || { code: 500, data: {}, message: '数据获取失败' }
        return res
    },
    error => {
        // return Promise.reject(error)
        return error
    },
)

export default service
