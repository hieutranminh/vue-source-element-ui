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
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'DefaultLayout',

  components: {
    Sidebar,
    Header,
    Breadcrumb
  }
}
</script>
