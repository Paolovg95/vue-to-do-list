<template>
   <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task?
        </v-card-title>
        <v-card-text>
          Edit the Task Title:
          <v-text-field v-model="taskTitle" />
          <!--  -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Emit an Event when NO is clicked. Listen event on Task.vue -->
          <v-btn
            @click="$emit('close')"
            color="red darken-1"
            text
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveTask"
            color="green darken-1"
            text
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  // Use Props Passed from Task.vue
  props: ['task'],
  // Add Local Data Property for Edit
  data() {
    return {
      taskTitle: null
    }
  },
  mounted() {
    this.taskTitle = this.task.title
  },

  methods: {
    saveTask() {
      // Pass OBJECT Payload to Mutations
      let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.commit('updateTaskTitle', payload)
      // Emit the Save button
      this.$emit('close')
    },
  },
  // Mounted Hook for the component

}
</script>
