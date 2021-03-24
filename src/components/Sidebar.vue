<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link
      :to="{name: 'home.index'}"
      class="brand-link text-center">
      <span class="brand-text font-weight-light d-inline-block">
        <img
          src="../assets/images/logo-default.svg"
          alt="Logo">
      </span>
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
          <li
            v-for="(item, index) of NAVIGATIONS"
            :key="index"
            class="nav-item">
            <!--Not dropdown-->
            <router-link
              v-if="!item.dropdown"
              :key="item.id"
              :to="{name: item.routeName}"
              class="nav-link">
              <i
                class="nav-icon"
                :class="item.icon" />
              <p v-text="$t('navigation.'+item.title)" />
            </router-link>

            <!--Dropdown-->
            <template v-else>
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
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import $ from 'jquery'
import { NAVIGATIONS } from '@/enum/navigations'

export default {
  name: 'Sidebar',

  data () {
    return {
      NAVIGATIONS
    }
  },

  mounted () {
    console.log('abc')
    $('[data-widget="treeview"]')
      .Treeview('init')
  }
}
</script>

<style lang="scss" scoped>

</style>
