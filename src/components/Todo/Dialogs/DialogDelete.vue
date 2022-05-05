<template>
   <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Delete Task?
        </v-card-title>
        <v-card-text>Are you sure you want to delete this Task?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Emit an Event when NO is clicked. Listen event on Task.vue -->
          <v-btn
            @click="$emit('close')"
            color="red darken-1"
            text
          >
            NO
          </v-btn>
          <v-btn
            @click="$store.dispatch('deleteTask', task.id)"
            color="green darken-1"
            text
          >
            YES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  // Use Props Passed from Task.vue
  props: ['task']
}
</script>

<style>

</style>
