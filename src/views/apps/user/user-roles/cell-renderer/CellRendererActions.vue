<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <!-- <feather-icon icon="Edit3Icon" svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer" @click="editRecord" /> -->
      <feather-icon icon="Trash2Icon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" />
    </div>
</template>

<script>
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
      this.$router.push(`/apps/user/user-edit/${this.params.data.id}`).catch(() => {})
 
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
        text: `You are about to delete "${this.params.data.name}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.showDeleteSuccess()
             let payload={
              id:this.params.data.id
              }
         this.$store.dispatch("userManagement/deleteRole",payload)
         .then(()   => {   
           this.$router.push('/apps/user/roles')
           this.showDeleteSuccess() })
         .catch(err => { console.error(err)       })
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    }, 
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  }
}
</script>
