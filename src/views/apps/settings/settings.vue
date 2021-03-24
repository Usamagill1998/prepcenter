


<template>
<vx-card>
<div>

		<div class="vx-row">
      		<div class="vx-col md:w-1/2 w-full">
		        <vs-input class="w-full mt-4" label="Address" v-model="address"  name="address" />
		        <span class="text-danger text-sm"  v-show="errors.has('title')">{{ errors.first('title') }}</span>
         		</div>
      		<div class="vx-col md:w-1/2 w-full">
		        <vs-input label="Logo" type="file" v-model="image" class="w-full mt-4" @change="update_avatar" accept="image/*" />
		        <div class="image-preview mt-4 text-right" v-if="imageData.length > 0">
	                <img class="preview" :src="imageData">
	            </div>
	            <div class="image-preview mt-4 text-right" v-else-if="id > 0">
	                <img class="preview" :src="'http://127.0.0.1:8000/'+image_path">
	            </div>

      		</div>
        </div>



                   <div class="vx-row mt-4"> 
          <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label class="vs-input--label"><strong>Email</strong> <span class="text-danger"></span></label>
                           <vs-input class="w-full" v-model="email" name="email" />
        </div>
      </div>
      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label icon-pack="feather" icon="icon-home" icon-no-border class="vs-input--label"><strong>Phone Number</strong> <span class="text-danger"></span></label>
                 <vs-input class="w-full" v-model="phone_no" name="phone_no" />
        </div>
      </div>

      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label icon-pack="feather" icon="icon-home" icon-no-border class="vs-input--label"><strong>Social Link Facebook</strong> <span class="text-danger"></span></label>
                 <vs-input class="w-full" v-model="fb" name="fb" />
        </div>
      </div>
      </div>

      <div class="vx-row mt-4"> 
          <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label class="vs-input--label"><strong>Social Link Twitter</strong> <span class="text-danger"></span></label>
                           <vs-input class="w-full" v-model="twitter" name="twitter" />
        </div>
      </div>
      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label icon-pack="feather" icon="icon-home" icon-no-border class="vs-input--label"><strong>Social Link Whatsapp</strong> <span class="text-danger"></span></label>
                 <vs-input class="w-full" v-model="whatsapp" name="whatsapp" />
        </div>
      </div>

      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label icon-pack="feather" icon="icon-home" icon-no-border class="vs-input--label"><strong>Social Link Instagram</strong> <span class="text-danger"></span></label>
                 <vs-input class="w-full" v-model="insta" name="insta" />
        </div>
      </div>
      </div>



      		<div class="vx-row mt-4">

			  	<vs-button class="float-right mt-3" @click="SavePage"> Save </vs-button>
      		</div>
		</div>
    </vx-card>
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
 
         address:'',
         logo:null,
         email:'',
         phone_no:'',
         fb:'',
         twitter:'',
         whatsapp:'',
         insta:'',

  
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
					this.image   = event.target.files[0]
					reader.readAsDataURL(input.files[0]);
				}
		    },
		    async SavePage(){
				 const token=   localStorage.getItem('accessToken')
		    	let valid = await this.$validator.validate();
		    	if(valid){
			    	let formData = new FormData();
			    	formData.append('address',this.address);
                    formData.append('token',token)
			    	formData.append('logo', this.image);
			    	formData.append('email', this.email);
			       	formData.append('phone_no', this.phone_no);
      			    formData.append('social_link_facebook', this.fb);
			       	formData.append('social_link_twitter', this.twitter);
			       	formData.append('social_link_instagram', this.insta);
                    formData.append('social_link_whatsapp', this.whatsapp);
			    	try{
			    		this.$vs.loading();
			    		//if(this.id > 0){
				//	this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
			    		 this.$store.dispatch('userManagement/updateSetting',formData).then(() => { 
                 this.$vs.loading.close() 
            		 this.$router.push('/');
                 })
			    	//	}else{
			    	//		await this.$store.dispatch('addPage', formData);
			    	//	}
			    		this.$vs.loading.close();
			    		// this.$router.push('/pages');
			    	}catch(err){
			    		this.$vs.loading.close();
			    		console.log('error', err);
			    	}
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
