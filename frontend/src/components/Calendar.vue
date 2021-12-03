<template>
  <div>
    <h1>Calendar</h1>
    <p>events:</p>
    <p>{{ events }}</p>
    <button type="submit" @click="fetchEvents()">fetchEvents</button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data: () => ({
    events: [],
  }),
  methods: {
    fetchEvents() {
      // GETリクエストを送信し、取得データをevents変数に代入する
      axios
        .get('http://localhost:3000/events')
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>