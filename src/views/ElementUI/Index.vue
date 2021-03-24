<template>
  <VLayout>
    <router-view />
  </VLayout>
</template>

<script>
import VLayout from '@/layouts/Default'

export default {
  name: 'ElementUIIndex',

  components: {
    VLayout
  }
}
</script>
