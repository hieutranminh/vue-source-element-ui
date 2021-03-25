<template>
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 p-3 bg-white">
    <h4
      class="mb-2 mb-md-0"
      v-text="$t('breadcrumb.'+this.$route.meta.title)" />

    <el-breadcrumb
      v-if="breadcrumbs.length"
      separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="index">
        <router-link
          :to="{name: item.name}"
          v-text="$t('breadcrumb.'+item.title)" />
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',

  computed: {
    breadcrumbs () {
      return this.$route.meta.breadcrumbs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
