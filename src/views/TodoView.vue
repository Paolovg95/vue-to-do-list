<template>
  <div class="home">
    <field-add-task/>
    <list-tasks
    />
    <no-tasks
      v-if="$store.state.tasks.length === 0 "
    />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: { // Import Field Text Component
      'field-add-task': require('@/components/Todo/FieldAddTask.vue')
      .default,
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
      'no-tasks': require('@/components/Todo/NoTasks.vue').default,
    },
  }
</script>
