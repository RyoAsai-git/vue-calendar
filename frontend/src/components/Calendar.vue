<template>
  <div>
    <v-sheet height="100vh">
      <v-calendar></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calendar',

  computed: {
    // 状態を呼び出す
    ...mapGetters('events', ['events']),
  },
  methods: {
    // 状態を変化させる
    ...mapActions('events', ['fetchEvents']),
  },
};
</script>
