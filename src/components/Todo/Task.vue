<template>
  <div>
      <v-list-item
        @click="$store.dispatch('doneTask',task.id)"
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
            <!-- Show the Delete Dialog if the Icon is clicked -->
            <v-btn
              @click.stop="dialogs.delete = true"
              icon>
              <v-icon color="red lighten-2">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <!-- Show the Edit Dialog if the Icon is clicked -->
            <v-btn
              @click="dialogs.edit = true"
              icon>
              <v-icon color="blue lighten-2">mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>

      <v-divider></v-divider>
      <!-- If Dialogs Delete exists, pass Task as Props -->
      <dialog-delete
        v-if="dialogs.delete"
        @close="dialogs.delete = false"
        :task="task"
      />
      <dialog-edit
        v-if="dialogs.edit"
        @close="dialogs.edit = false"
        :task="task"
      />
    </div>
</template>

<script>
export default {
  props: ['task'],

  data () {
    return {
      dialogs: {
        edit: false,
        delete: false
      }
    }
  },
  components: {
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default,
    'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default
  }
}
</script>

<style>

</style>
