<template>
  <div class="main-layout">
    <!-- HEADER -->
    <Header />

    <!-- SIDEBAR -->
    <Sidebar />

    <!-- Content will be placed here -->
    <slot />
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'DefaultLayout',

  components: {
    Sidebar,
    Header
  },

  data () {
    return {
      menuCollapsed: false
    }
  },

  methods: {
    /**
     * Will log the user out.
     */
    logout () {
      this.$store.dispatch('auth/logout')
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu () {
      this.menuCollapsed = !this.menuCollapsed
    }
  }
}
</script>
