<script lang="ts" setup></script>

<template>
  <div class="grid">
    <Intro />
    <DayJob />
    <JobListing />
    <Ads />
  </div>
</template>

<style scoped>
@media screen and (min-width: 600px) {
  .grid {
    min-height: 100vh;
    display: grid;
    grid-template-areas:
      'day-job intro'
      'job-listing ads';
    grid-template-rows: 25% 1fr;
    grid-template-columns: 60% 1fr;
    margin-left: 10%;
  }
}
@media screen and (min-width: 900px) {
  .grid {
    margin-left: 20%;
  }
}
</style>
