<template>
   <v-snackbar
    v-model="$store.state.snackbar.show"
    >
    <!-- SnackBar Text from State -->
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
