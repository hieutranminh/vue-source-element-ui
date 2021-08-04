export default {
  methods: {
    notifySuccess (mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: 'success'
      })
    },
    notifyWarning (mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: 'warning'
      })
    },
    notifyError (mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: 'error'
      })
    }
  }
}
