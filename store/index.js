const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser (state, data) {
        state.user = data
    }
}

export const actions = {

    nuxtServerInit ({ commit }, { req }) {
        let auth = null
        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.user)
            } catch (err) {
            }
        }
        commit('setUser', auth)
    }
}
