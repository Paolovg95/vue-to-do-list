import axios from 'axios'; // Import Axios to make the Call to the API
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Set our State
    tasks: [],
  },
  actions: { // Make the Call
    setTasks({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        let tasks = response.data
        commit('SET_TASKS', tasks)
      });
    }
  },
  mutations: { // Mutate our State
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    }
  },
  getters: {
  },
  modules: {
  }
});
