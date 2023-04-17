<script lang="ts" setup></script>

<template>
  <div class="job-listing">
    <div class="heading">
      <h5>Available jobs</h5>
      <p>
        Jobs shared here are as recent as 2 weeks ago, we try to keep postings
        fresh jobs daily
      </p>
    </div>
    <ul class="job-list">
      <li class="job-post">
        <div>
          <h6>Senior product designer - Replit</h6>
          <p>First shared : 30 May 2023</p>
        </div>
        <button class="btn">Apply</button>
      </li>
      <li class="job-post">
        <div>
          <h6>Senior product designer - Replit</h6>
          <p>First shared : 30 May 2023</p>
        </div>
        <button class="btn">Apply</button>
      </li>
    </ul>
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      class="pagination-nav"
    >
      <ul class="pagination">
        <li><a href="/page-1">1</a></li>
        <li><a href="/page-2">2</a></li>
        <li><a href="/page-3">3</a></li>
        <li><a href="/page-4">4</a></li>
        <li><a href="/page-5">5</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.job-listing {
  grid-area: job-listing;
}

.heading {
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 20px;
}

.job-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 20px 0 40px;
}

.pagination a {
  width: 24px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.pagination a:hover {
  background: #000;
  color: #fff;
}

@media screen and (min-width: 600px) {
  .job-list,
  .pagination-nav {
    margin-right: 80px;
  }
}
</style>
