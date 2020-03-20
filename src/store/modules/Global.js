import Vue from 'vue'
export default {
    actions: {
    },
    mutations: {
        setOpenTask: (state, item) => {
            // 
            Vue.set(state, 'openTask',item);
        },
    },
    state: {
        openTask : null

    },
    getters: {
        openTask(state) {
            return state.openTask;
        },
    }
}