import { createStore } from 'vuex'

export interface State {
    count: number
}
// 创建一个新的 store 实例
const store = createStore<State>({
    state () {
        return {
            count: 100,
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
    },
})

export default store
