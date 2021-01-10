import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. 拦截器
   // 拦截请求的 配置和数据
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // }, err => {
  //   // console.log(err);
  //   reject(err)
  // })
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    reject(err)
  })

  // 3.发送网络请求
  return instance(config)
}
