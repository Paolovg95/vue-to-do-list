import axios from 'axios'; // Import Axios to make the Call to the API
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Set our State
    tasks: [],
    // Snackbar State access from State
    snackbar: {
      show: false
    }
  },
  actions: { // Make the Call
    setTasks({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        let tasks = response.data.slice(1,10) // Get the first 10 items
        commit('SET_TASKS', tasks)
      });
    },

    addTask({ commit }, newTaskTitle) { // Create Action
      let newTask = {
        id: Date.now(),
        title: newTaskTitle, // Pass new Task title from 'Text field'
        completed: false
      }
      commit('addTask', newTask)
    },

    deleteTask({ commit }, id ) { // Delete Action
      commit('deleteTask', id)
    },
    doneTask({ state, commit }, id) { // Check Action
      let task = state.tasks.filter(task => task.id === id)[0]
      console.log(task)
      commit('doneTask', task)
    },
  },

  mutations: { // Mutate our State
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    addTask(state, newTask) { // Create Mutation
      state.tasks.push(newTask) // Push to Task array on State
    },
    deleteTask(state, id) { // Delete Mutation
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    doneTask(state, task) { // Check Mutation
      task.completed = !task.completed
    },
    showSnackbar(state) {
      state.snackbar.show = true
    }

  },
  getters: {
  },
  modules: {
  }
});
