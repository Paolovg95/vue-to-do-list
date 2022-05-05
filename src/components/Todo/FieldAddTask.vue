<template>
  <v-text-field
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      class="pa-7"
      label="Add Task"
      append-icon="mdi-plus"
      clearable
    >
    </v-text-field>
</template>

<script>
export default {
  data () {
    return {
      newTaskTitle: '',
    }
  },
  methods: {
    addTask() { // Local Method
      this.$store.dispatch('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    }
  }
}
</script>

<style>

</style>
