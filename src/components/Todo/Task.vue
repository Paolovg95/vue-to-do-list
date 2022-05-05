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
            <v-btn
              @click.stop="$store.dispatch('deleteTask',task.id)"
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
</template>

<script>
export default {
  props: ['task']
}
</script>

<style>

</style>
