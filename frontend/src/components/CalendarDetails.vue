<template>
  <div>
    <h1>CalendarDetails</h1>
    <div v-for="event in events" :key="event.id">
      <h2>{{ event.name }}</h2>
      <p>start: {{ event.start }}</p>
      <p>end: {{ event.end }}</p>
      <p>description: {{ event.description }}</p>
    </div>

    <button type="submit" @click="fetchEvents()">fetchEvents</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CalendarDetails',
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
