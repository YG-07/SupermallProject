import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods() {
  // 获取商品信息，没有服务器和数据库！
}