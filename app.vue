<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style global>
main {
  padding: 20px;
}
@media screen and (min-width: 600px) {
  main {
    padding: 0;
  }
}

.btn {
  background: #ffffff;
  color: #555555;
  border: 1px solid #000;
  border-radius: 40px;
  padding: 8px;
  white-space: nowrap;
  cursor: pointer;
}

.btn-black {
  background: #000;
  color: #fff;
}

.btn::after {
  background: url(./arrow-black.png) no-repeat;
  content: '';
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 0 5px 0 10px;
}

.btn-black::after {
  background: url(./arrow.png) no-repeat;
}

h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
}

h6 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #555555;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
