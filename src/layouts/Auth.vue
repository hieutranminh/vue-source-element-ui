<template>
  <div class="auth-layout">
    <!-- Content will be placed here -->
    <slot />
  </div>
</template>

<script>
/* ============
 * Auth Layout
 * ============
 *
 * Used for the register and login pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: 'AuthLayout',
};
</script>
