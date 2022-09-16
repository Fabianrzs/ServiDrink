import { UserLogin } from '../../models/userLogin'
import { UserRegister } from '../../models/userRegister'
import { apiRestGet, apiRestPost } from '../api'

const baseUrl: string = 'localhost:8080'

export default {
  login: async(userLogin: UserLogin) => {
    try {
      const path = `${baseUrl}/login`
      const { data } = await apiRestPost(path, userLogin)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  register: async(userRegister: UserRegister) => {
    try {
      const path = `${baseUrl}/register`
      const { data } = await apiRestPost(path, userRegister)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getUserInfo: async() => {
    try {
      const path = `${baseUrl}/userInfo`
      const { data } = await apiRestGet(path)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
