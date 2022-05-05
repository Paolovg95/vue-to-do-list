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
    },
    deleteTask({ commit }, id ) {
      commit('deleteTask', id)
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      console.log(task)
      commit('doneTask', task)
    },
  },

  mutations: { // Mutate our State
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    doneTask(state, task) {
      task.completed = !task.completed
    },

  },
  getters: {
  },
  modules: {
  }
});
