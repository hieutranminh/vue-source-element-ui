<template>
  <section
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
          <!--Email-->
          <InputField
            v-model="form.email"
            rules="required"
            vid="email"
            size="medium"
            suffix-icon="el-icon-user"
            class="mb-3"
            :field="$t('auth.email')"
            :label="$t('auth.email')" />

          <!--Password-->
          <InputField
            v-model="form.password"
            rules="required"
            vid="password"
            size="medium"
            suffix-icon="el-icon-lock"
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
  </section>
</template>

<script>
import firebase from 'firebase/app'
import InputField from '@/components/Form/InputField'

export default {
  name: 'LoginIndex',

  components: {
    InputField
  },

  data () {
    return {
      isSubmit: false,
      form: {
        email: 'admin@gmail.com',
        password: '123123'
      }
    }
  },

  methods: {
    async validateBeforeSubmit () {
      const isValid = await this.$refs.observer.validate()

      if (isValid) {
        this.isSubmit = true

        this.handleSubmit()
      }
    },

    handleSubmit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(res => {
          console.log(res)
          this.isSubmit = false

          this.$router.push({ name: 'home.index' }).catch(() => {})
        })
        .catch(err => {
          this.isSubmit = false

          alert(err.message)
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
