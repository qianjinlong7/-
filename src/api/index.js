/**
 * 定义各个功能的接口
 */
import ajax from './ajax'

// 注册接口
export const reqRegister = user => ajax('/register', user, 'POST')

// 登录接口 
export const reqLogin = user => ajax('/login', user, 'POST')