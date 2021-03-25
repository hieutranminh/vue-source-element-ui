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
            v-for="item of NAVIGATIONS"
            :key="item.id"
            class="nav-item">
            <!--Not dropdown-->
            <router-link
              v-if="!item.dropdown"
              :key="item.id"
              :to="{name: item.routeName}"
              active-class="active"
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
                class="nav-link"
                :class="{'active': $route.name.includes(item.title)}">
                <i
                  class="nav-icon"
                  :class="item.icon" />
                <p>
                  {{ $t('navigation.'+item.title) }}
                  <i class="fas fa-angle-left right" />
                </p>
              </a>

              <!--Dropdown items-->
              <ul class="nav nav-treeview">
                <li
                  v-for="subItem in item.dropdownItems"
                  :key="subItem.id"
                  class="nav-item">
                  <router-link
                    :to="{name: subItem.routeName}"
                    active-class="active"
                    :exact="true"
                    class="nav-link">
                    <i
                      class="nav-icon"
                      :class="subItem.icon" />
                    <p v-text="$t('navigation.'+subItem.title)" />
                  </router-link>
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
    $('[data-widget="treeview"]')
      .Treeview('init')
  }
}
</script>

<style lang="scss" scoped>

</style>
