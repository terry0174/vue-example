<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item to="/" exact exact-active-class="active">List</b-nav-item>
      <b-nav-item to="/form" active-class="active">Form</b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>