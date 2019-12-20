<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item to="/" exact exact-active-class="active">List</b-nav-item>
      <b-nav-item to="/user" active-class="active">Form</b-nav-item>
      <b-nav-item to="/login" exact-active-class="active">Login</b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>