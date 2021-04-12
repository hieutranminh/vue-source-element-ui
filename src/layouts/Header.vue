<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="pushmenu"
          href="#"
          role="button"><i class="fas fa-bars" /></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <!--Icon Dropdown-->
        <a
          class="nav-link d-flex align-items-center"
          data-toggle="dropdown"
          href="#">
          <i class="far fa-user" />
        </a>

        <!--Dropdown item-->
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="media p-3 align-items-center">
            <img
              src="../assets/images/img-default.jpeg"
              alt="User Avatar"
              class="img-size-50 mr-3 img-circle">

            <div class="media-info">
              <h3
                class="text-lg mb-0"
                v-text="$t('auth.no_name')" />

              <b
                class="text-sm text-success"
                v-text="'Administrator'" />
            </div>
          </div>

          <!--Line-->
          <div class="dropdown-divider" />

          <!--Actions-->
          <div class="dropdown-footer d-flex justify-content-between">
            <button
              class="btn btn-sm bg-gradient-primary w-100"
              @click.prevent="goProfile"
              v-text="$t('auth.profile')" />

            <button
              class="btn btn-sm bg-gradient-warning w-100 ml-3"
              @click.prevent="handleLogout"
              v-text="$t('auth.logout')" />
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Header',

  methods: {
    goProfile () {
      console.log('go profile')
    },

    handleLogout () {
      firebase.auth().signOut().then(res => {
        this.$router.replace({ name: 'login.index' }).catch(() => {})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
