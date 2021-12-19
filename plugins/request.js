import axios from 'axios'
export const request=axios.create({
    baseURL:'http://realworld.api.fed.lagounews.com'
})
export default (context)=>{
    request.interceptors.request.use((config)=>{
        const {user}=context.store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }

        return config
    },(err)=>{
        return Promise.reject(err)
    })
}
// export default request