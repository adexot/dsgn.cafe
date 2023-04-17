<script lang="ts" setup></script>

<template>
  <div class="intro">
    <h5>Dsgn.cafe</h5>
    <p>
      Dsgn.cafe curates design related jobs from different sources, we try to
      keep the postings recent, jobs posted older than 2 weeks do not show
    </p>
  </div>
</template>

<style scoped>
.intro {
  grid-area: intro;
  padding-bottom: 20px;
}

@media screen and (min-width: 600px) {
  .intro {
    padding: 40px;
    border-left: 1px solid #f2f2f2;
  }
}
</style>
