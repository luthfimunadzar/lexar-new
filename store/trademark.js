export const state = () => ({
    userTrademark: null,
    status: null,
})

export const mutations = {   
    saveUserTrademark(state, data) {
        state.userTrademark = data
    },
    sendStatus(state, data) {
        state.status = data
    }
}