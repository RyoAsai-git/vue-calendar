import axios from 'axios';

const apiUrl = 'http://localhost:3000';

// 状態管理するデータを定義する
const state = {
    events: []
};

// stateの値を取り出す関数を定義する
const getters = {
    events: state => state.events
}

// eventsデータをstateに保存する関数を定義する
const mutations = {
    setEvents: (state, events) => (state.events = events)
}

// axiosでAPIリクエストを送信してeventsデータを取得し、mutationを呼び出す関数を定義する
const actions = {
    async fetchEvents({
        commit
    }) {
        const response = await axios.get(`${apiUrl}/events`);
        commit('setEvents', response.data); // mutationを呼び出す
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};