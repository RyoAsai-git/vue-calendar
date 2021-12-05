<template>
  <div>
    <h1 class="text-h1">Calendar</h1>
      <v-list>
        <v-list-item v-for="event in events" :key="event.id">
          {{ event.name }}
        </v-list-item>
      </v-list>
    <v-btn type="submit" @click="fetchEvents()">fetchEvents</v-btn>

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
