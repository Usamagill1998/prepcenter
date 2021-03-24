
<template>
<div>
		<div class="vx-row">
      		<div class="vx-col md:w-1/1 w-full">
		        <vs-input class="w-full mt-4" label="Role Name" v-model="title" v-validate="'required|min:10'" name="title" @change="createSlug" />
 		        <span class="text-danger text-sm"  v-show="errors.has('title')">{{ errors.first('title') }}</span>
      		</div>
      		
      		<div class="vx-col sm:w-1/1 mt-4">
      		
			  	<vs-button class="float-right mt-3" @click="SavePage"> Save </vs-button>
      		</div>
		</div>
	</div>
</template>

<script>
import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	 
	import { quillEditor } from 'vue-quill-editor'
import vSelect from 'vue-select' 
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'


export default {
  components: {
    vSelect,
    quillEditor,
  }, 
  data () {
    return {
 
      	id: 0,
				title: '',
				slug: '',
				content: '',
				feature_image: null,
				imageData: '',
				image: null,
				image_path: null,




      statusOptions: [
        { label: 'Active',  value: 'active' },
        { label: 'Blocked',  value: 'blocked' },
        { label: 'Deactivated',  value: 'deactivated' }
      ],
      roleOptions: [
        { label: 'Admin',  value: 'admin' },
        { label: 'User',  value: 'user' },
        { label: 'Staff',  value: 'staff' }
      ] 
    }
  },

  created () {
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    } 
    // let payload = {
    //      token : activeUserInfo.token
    //   }
    //   this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
      } 
      ,
  
  methods: {

    update_avatar (event) {
				var input = event.target;
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					reader.onload = (e) => {
						this.imageData = e.target.result;
					}
					this.image = event.target.files[0]
					reader.readAsDataURL(input.files[0]);
				}
		    },
		    async SavePage(){
		    	let valid = await this.$validator.validate();
		    	if(valid){
			    		this.$vs.loading();
              let payload={
              name: this.title
              } 
			    		 this.$store.dispatch('userManagement/AddRoles',payload)
               .then(() => { 
                 this.$vs.loading.close() 
            		 this.$router.push('/apps/user/roles');
                 })
         .catch(error => {
          this.$vs.loading.close()
        })
		    	}
		    },
		    createSlug(){
		    	let str = this.title.replace(/^\s+|\s+$/g, ''); // trim
			    str = str.toLowerCase();
			  
			    // remove accents, swap ñ for n, etc
			    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
			    var to   = "aaaaeeeeiiiioooouuuunc------";
			    for (var i=0, l=from.length ; i<l ; i++) {
			        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
			    }

			    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
			        .replace(/\s+/g, '-') // collapse whitespace and replace by -
			        .replace(/-+/g, '-'); // collapse dashes

			    this.slug = str;
		    },
		},
    capitalize (str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
    },
    
    save_changes () {
      /* eslint-disable */
      if (!this.validateForm) return

      // Here will go your API call for updating data
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data () {
      this.data_local = JSON.parse(JSON.stringify(this.data))
    },
    // update_avatar () {
    //   // You can update avatar Here
    //   // For reference you can check dataList example
    //   // We haven't integrated it here, because data isn't saved in DB
    // }
  }

</script>
