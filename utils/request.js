import axios from 'axios'
import {state} from '../store/index'
const request=axios.create({
    baseURL:'https://api.realworld.io'
})
request.interceptors.request.use((config)=>{
config.headers.Authorization=state.user.token
    return config
},(err)=>{
    return Promise.reject(err)
})
export default request