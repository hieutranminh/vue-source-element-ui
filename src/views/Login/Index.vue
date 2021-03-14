<template>
  <VLayout
    id="login"
    class="login">
    <div class="card">
      <!--Logo-->
      <div class="card-header">
        <img
          src="../../assets/images/logo-default.svg"
          alt="logo">
      </div>

      <!--Form-->
      <div class="card-body">
        <ValidationObserver
          ref="observer"
          tag="form"
          @submit.prevent="validateBeforeSubmit">
          <!--Username-->
          <InputField
            v-model="form.login_id"
            rules="required"
            vid="username"
            size="medium"
            icon="el-icon-user"
            class="mb-3"
            :field="$t('auth.username')"
            :label="$t('auth.username')" />

          <!--Password-->
          <InputField
            v-model="form.login_password"
            rules="required"
            vid="password"
            size="medium"
            icon="el-icon-lock"
            type="password"
            :field="$t('auth.password')"
            :label="$t('auth.password')" />

          <!--Submit-->
          <button
            class="btn btn-block bg-gradient-primary font-weight-bold"
            :disabled="isSubmit"
            :class="{'disabled': isSubmit}"
            type="submit">
            {{ $t('auth.login') }}
          </button>
        </ValidationObserver>
      </div>
    </div>
  </VLayout>
</template>

<script>
import { mapActions } from 'vuex'
import VLayout from '@/layouts/Auth'
import InputField from '@/components/Form/InputField'

export default {
  name: 'LoginIndex',

  components: {
    InputField,
    VLayout
  },

  data () {
    return {
      isSubmit: false,
      form: {
        company_code: '123123123',
        login_id: '123123123',
        login_password: '123123123'
      }
    }
  },

  methods: {
    ...mapActions('auth', ['login']),

    async validateBeforeSubmit () {
      const isValid = await this.$refs.observer.validate()

      if (isValid) {
        this.isSubmit = true

        this.handleSubmit()
      }
    },

    handleSubmit () {
      this.login(this.form).then((res) => {
        this.isSubmit = false

        if (res && res.token) {
          this.$router.push({ name: 'home.index' })
        }
        // check submit error
      })
    }
  }
}
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
        button {
          margin-top: 40px;
        }
      }
    }
  }
</style>
