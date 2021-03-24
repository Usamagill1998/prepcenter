


<template>
<vx-card>
<div>

		<div class="vx-row">
      		<div class="vx-col md:w-1/2 w-full">
		        <vs-input class="w-full mt-4" label="Title" v-model="title"  name="title" />
		        <span class="text-danger text-sm"  v-show="errors.has('title')">{{ errors.first('title') }}</span>
      			<vs-input class="w-full mt-4" label="Sub Title"  v-model="slug" name="slug" />
      		</div>
      		<div class="vx-col md:w-1/2 w-full">
		        <vs-input label="Slider Image" type="file" v-model="feature_image" class="w-full mt-4" @change="update_avatar" accept="image/*" />
		        <div class="image-preview mt-4 text-right" v-if="imageData.length > 0">
	                <img class="preview" :src="imageData">
	            </div>
	            <div class="image-preview mt-4 text-right" v-else-if="id > 0">
	                <img class="preview" :src="'http://127.0.0.1:8000/'+image_path">
	            </div>

      		</div>
      		<div class="vx-col sm:w-1/1 mt-4">
      			<label>Page Content</label>
      			<quill-editor v-model="Description"
		            ref="myQuillEditor"
		            class="editor">
			  	</quill-editor>
			  	<vs-button class="float-right mt-3" @click="SavePage"> Save </vs-button>
      		</div>
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
				 const token=   localStorage.getItem('accessToken')
		    	let valid = await this.$validator.validate();
		    	if(valid){
			    	let formData = new FormData();
			    	formData.append('title', this.title);
					    //    payload.token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wcmVwY2VudGVyLnRlY2hoaXZlZGVtby54eXpcL2FwaVwvbG9naW4iLCJpYXQiOjE2MTUzOTI1OTksImV4cCI6MTYxODAyMDU5OSwibmJmIjoxNjE1MzkyNTk5LCJqdGkiOiJTREUwcVRUR3d4NFR2RU15Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.tEYhsgFT4AGl3PD3xC-SNa8madiPcbvhuiPnvudOOZ4'
                    formData.append('token',token)
			    	formData.append('subtitle', this.slug);
			    	formData.append('image', this.image);
			       	//formData.append('id', this.id);
			    	try{
			    		this.$vs.loading();
			    		//if(this.id > 0){
				//	this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
			    		 this.$store.dispatch('userManagement/AddSlider',formData).then(() => { 
                 this.$vs.loading.close() 
            		 this.$router.push('/app/sliders');
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
