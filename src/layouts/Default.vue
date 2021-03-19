<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <b-navbar class="is-fixed-top p-5 navbar" :transparent="true">
        <template #brand>
          <g-image
            alt="Lightweight UI components for Vue.js based on Bulma"
            width="180px"
          />
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <g-link class="link" to="/">Home</g-link>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <g-link class="link" to="/about/">About</g-link>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <g-link class="link" to="/">ePD Team</g-link>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <g-link class="link" to="/about/">Announcements</g-link>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <g-link class="link" to="/">Services</g-link>
          </b-navbar-item>

          <b-navbar-dropdown label="More">
            <b-navbar-item> Training Courses </b-navbar-item>
            <b-navbar-item href="#"> Publications </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary"> Contact A Scientist </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
