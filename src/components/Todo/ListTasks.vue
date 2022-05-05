<template>
  <v-list
      flat
    >
  <task
    v-for="task in tasks"
    :key="task.id"
    :task="task"
  />
  </v-list>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted() {
      this.$store.dispatch('setTasks')
      // Dispatch triggers the Action inside the Store
    },
  computed: {
    ...mapState([
      'tasks'
    ]),
  },
  components: {
    'task': require('@/components/Todo/Task.vue').default
  }
}
</script>

<style>

</style>
