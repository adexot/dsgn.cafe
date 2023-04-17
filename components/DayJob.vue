<script lang="ts" setup></script>

<template>
  <div class="box">
    <div>
      <h5>Job of the Day</h5>
      <p>Senior product designer at Replit</p>
    </div>

    <button class="btn btn-black">Apply</button>
  </div>
</template>

<style scoped>
.box {
  grid-area: day-job;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 19.5px;
  margin-bottom: 40px;
}

@media screen and (min-width: 600px) {
  .box {
    margin-right: 60px;
    margin-bottom: 0;
  }
}
</style>
