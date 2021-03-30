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
          <div class="row">
            <div class="col-12">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--FOOTER-->
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header'
import Sidebar from '@/layouts/Sidebar'
import Breadcrumb from '@/layouts/Breadcrumb'
import Footer from '@/layouts/Footer'

export default {
  name: 'Index',

  components: {
    Footer,
    Sidebar,
    Header,
    Breadcrumb
  }
}
</script>
