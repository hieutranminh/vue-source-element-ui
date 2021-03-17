<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link
      :to="{name: 'home.index'}"
      class="brand-link text-center">
      <img
        src="../assets/images/logo-default.svg"
        alt="Logo">
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">
              <i class="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">
              <i class="nav-icon fas fa-tree" />
              <p>
                UI Elements
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a
                  href="pages/UI/general.html"
                  class="nav-link">
                  <i class="far fa-circle nav-icon" />
                  <p>General</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link">
              <i class="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>

</style>
