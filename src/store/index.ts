import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
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
