<template>
  <div class="main-layout wrapper">
    <!-- HEADER -->
    <Header />

    <!-- SIDEBAR -->
    <Sidebar />

    <!-- Content will be placed here -->
    <div class="content-wrapper">
      <!--BREADCRUMB-->
      <Breadcrumb />

      <!--Pages-->
      <div class="content">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/layouts/Header'
import Sidebar from '@/layouts/Sidebar'
import Breadcrumb from '@/layouts/Breadcrumb'

export default {
  name: 'Index',

  components: {
    Sidebar,
    Header,
    Breadcrumb
  }
}
</script>
