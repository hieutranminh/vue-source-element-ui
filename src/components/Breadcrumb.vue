<template>
  <div class="d-flex justify-content-between align-items-center mb-3 p-3 bg-white">
    <h4
      class="mb-0"
      v-text="'Home'" />

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        homepage
      </el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">management</a></el-breadcrumb-item>
      <el-breadcrumb-item>list</el-breadcrumb-item>
      <el-breadcrumb-item>detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss" scoped>

</style>
