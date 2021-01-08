<template>
  <a-layout id="home">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-content class="height100vh">
        <a-row class="height100">
          <a-col class="black" :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
            Col
          </a-col>
          <a-col
            class="blue padding5"
            :xs="20"
            :sm="16"
            :md="12"
            :lg="8"
            :xl="16"
          >
            Col
          </a-col>
          <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="4">
            Col
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
