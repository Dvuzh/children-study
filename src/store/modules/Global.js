import Vue from 'vue'
export default {
    actions: {
    },
    mutations: {
        setOpenTask: (state, item) => {
            Vue.set(state, 'openTask',item);
        },
        setFinishedTask: (state, item) => {
            Vue.set(state, 'finishedTask',item);
        },
        setFinishedTaski: (state, item) => {
            Vue.set(state, 'finishedTaski',item);
        },
        setSubTask: (state, item) => {
            Vue.set(state, 'subTask',item);
        },
    },
    state: {
        openTask : null,
        finishedTask: null,
        subTask: 1,
        finishedTaski:null

    },
    getters: {
        openTask(state) {
            return state.openTask;
        },
        finishedTask(state) {
            return state.finishedTask;
        },
        finishedTaski(state) {
            return state.finishedTaski;
        },
        subTask(state) {
            return state.subTask;
        },
    }
}