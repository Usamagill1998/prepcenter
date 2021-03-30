<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="Trash2Icon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" />
    </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

export default {
  name: 'CellRendererActions',
  created () {
             if (!moduleUserManagement.isRegistered) {

      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
     },
  methods: {
    editRecord () {
      this.$router.push(`/apps/user/user-edit/${  268}`).catch(() => {})

      /*
              Below line will be for actual product
              Currently it's commented due to demo purpose - Above url is for demo purpose

              this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
            */
    },
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.params.data.id}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      // this.showDeleteSuccess() 
      /* UnComment below lines for enabling true flow if deleting user */
       this.$store.dispatch("userManagement/deleteSlider", this.params.data.id)
         .then(()   => { 
           this.$router.push('/app/sliders')
           this.showDeleteSuccess() })
         .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Slider Deleted',
        text: 'The selected slider was successfully deleted'
      })
    }
  }
}
</script>
