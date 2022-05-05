import axios from 'axios'; // Import Axios to make the Call to the API
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Set our State
    tasks: [],
    // Snackbar State access from State
    snackbar: {
      show: false,
      text: ''
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
      commit('showSnackbar', 'Task Added!')
    },

    deleteTask({ commit }, id ) { // Delete Action
      commit('deleteTask', id)
      commit('showSnackbar', 'Task Deleted')
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
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false // Hide the Snackbar if there is another one being displayed
        timeout = 500
      }
      setTimeout(() => { // No Delay if there is no SnackBar being displayed.
        state.snackbar.text = text
        state.snackbar.show = true
      }, timeout); // Time will be 0. Shows Snackbar right away
    },
    hideSnackbar(state) { // Hide Snackbar with Close button
      state.snackbar.show = false
    }

  },
  getters: {
  },
  modules: {
  }
});
