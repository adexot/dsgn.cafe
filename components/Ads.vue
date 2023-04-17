<script lang="ts" setup></script>

<template>
  <div class="ads">
    <div class="ads-box">Ads space</div>
  </div>
</template>

<style scoped>
.ads {
  grid-area: ads;
}
.ads-box {
  background: #fafafa;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 600px) {
  .ads {
    padding: 0 40px;
    border-left: 1px solid #f2f2f2;
  }
}
</style>
