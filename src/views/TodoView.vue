<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-7"
      label="Add Task"
      append-icon="mdi-plus"
      clearable
    >
    </v-text-field>
    <v-list
      v-if="tasks.length"
      flat
    >
    <div
      v-for="task in tasks"
      :key="task.id"
    >
      <v-list-item
        @click="doneTask(task.id)"
        :class="{'green lighten-5' : task.completed }"

      >
        <template v-slot:default >
          <v-list-item-action>
            <v-checkbox
            :input-value="task.completed"
            ></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{'text-decoration-line-through' : task.completed }"
            >
              {{ task.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              @click.stop="deleteTask(task.id)"
              icon>
              <v-icon color="red lighten-2">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn
              @click="editTask(task.id)"
              icon>
              <v-icon color="blue lighten-2">mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>

      <v-divider></v-divider>

    </div>

    </v-list>
    <div
      v-else
      class="no-tasks"
    >
    <v-icon
      size="100px"
      color="primary"
    >
    mdi-check
    </v-icon>
    <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    name: 'ToDo',
    data () {
      return {
        newTaskTitle: '',
        tasks: []
      }
    },
    mounted: function () {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          this.tasks = response.data.slice(0,10)
        })
    },
    methods: {
      addTask() {
        let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false
      }
      this.tasks.push(newTask)
      this.newTaskTitle = ''
    },
      editTask(id){
        this.task = this.tasks[id].title
      },
      doneTask(id) {
        let task = this.tasks.filter(task => task.id === id)[0];
        task.completed = !task.completed
      },
      deleteTask(id) {
         this.tasks = this.tasks.filter(task => task.id !== id);
      },
    }
  }
</script>

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>
