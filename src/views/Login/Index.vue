<template>
  <VLayout
    id="login"
    class="login"
  >
    <div class="card">
      <!--Logo-->
      <div class="card-header">
        <img
          src="../../assets/images/logo-default.svg"
          alt="logo"
        >
      </div>

      <!--Form-->
      <div class="card-body">
        <ValidationObserver
          ref="observer"
          tag="form"
          @submit.prevent="validateBeforeSubmit"
        >
          <!--Username-->
          <InputField
            v-model="form.username"
            rules="required"
            vid="username"
            size="medium"
            icon="el-icon-user"
            class="mb-3"
            :field="$t('auth.username')"
            :label="$t('auth.username')"
          />

          <!--Password-->
          <InputField
            v-model="form.password"
            rules="required"
            vid="password"
            size="medium"
            icon="el-icon-lock"
            class="mb-3"
            :field="$t('auth.password')"
            :label="$t('auth.password')"
          />
        </ValidationObserver>
      </div>
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
import InputField from '@/components/Form/InputField.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'LoginIndex',

  /**
   * The components the page can use.
   */
  components: {
    InputField,
    VLayout,
  },

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      form: {
        username: '',
        password: '',
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
    async validateBeforeSubmit() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.handleSubmit();
      }
    },

    handleSubmit() {
      console.log('Submit API');
      // this.$store.dispatch('auth/login', user);
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

    .card {
      width: 500px;
      box-shadow: none;
      &-header {
        text-align: center;
        border: none;
      }
      &-body {

      }
    }
  }
</style>
