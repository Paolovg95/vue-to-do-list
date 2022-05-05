<template>
   <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Delete Task?
        </v-card-title>
        <v-card-text>Are you sure you want to delete this Task?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
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
