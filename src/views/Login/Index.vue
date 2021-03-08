<template>
  <VLayout
    id="login"
    class="login"
  >
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">
          {{ $t('auth.success') }}
        </h3>
      </div>
      <!-- /.card-header -->
      <!-- form start -->
      <form class="form-horizontal">
        <div class="card-body">
          <div class="form-group row">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
            >Email</label>
            <div class="col-sm-10">
              <input
                id="inputEmail3"
                type="email"
                class="form-control"
                placeholder="Email"
              >
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword3"
              class="col-sm-2 col-form-label"
            >Password</label>
            <div class="col-sm-10">
              <input
                id="inputPassword3"
                type="password"
                class="form-control"
                placeholder="Password"
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-sm-2 col-sm-10">
              <div class="form-check">
                <input
                  id="exampleCheck2"
                  type="checkbox"
                  class="form-check-input"
                >
                <label
                  class="form-check-label"
                  for="exampleCheck2"
                >Remember me</label>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          <button
            type="submit"
            class="btn btn-info"
          >
            Sign in
          </button>
          <button
            type="submit"
            class="btn btn-default float-right"
          >
            Cancel
          </button>
        </div>
        <!-- /.card-footer -->
      </form>
    </div>
  </VLayout>
</template>

<script>
/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login.
 */

import VLayout from '@/layouts/Auth.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'LoginIndex',

  /**
   * The components the page can use.
   */
  components: {
    VLayout,
  },

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  /**
   * The methods the page can use.
   */
  methods: {
    /**
     * Will log the user in.
     *
     * @param {Object} user The user to be logged in.
     */
    login(user) {
      this.$store.dispatch('auth/login', user);
    },
  },
};
</script>

<style lang="scss" scoped>
  #login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
