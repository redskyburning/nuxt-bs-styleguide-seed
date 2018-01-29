<script src="./foo.js"></script>
<style lang="scss" src="./foo.scss"></style>

<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Foo!
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="/bar"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
        <router-link to="/bar">bar</router-link>
      </div>
    </div>
  </section>
</template>


