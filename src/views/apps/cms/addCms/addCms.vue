<template>
  <div id="user-edit-tab-info">
  <vx-card>

      <div class="vx-row mt-4"> 
          <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label class="vs-input--label"><strong>Name</strong> <span class="text-danger"></span></label>
                           <vs-input class="w-full" v-model="Name" name="Name" />
        </div>
      </div> 
      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label icon-pack="feather" icon="icon-home" icon-no-border class="vs-input--label"><strong>Description</strong> <span class="text-danger"></span></label>
                 <vs-input class="w-full" v-model="description" name="Email" />
        </div>
      </div>
      <div class="vx-col md:w-1/3 w-full">
        <div class="mt-4">
          <label class="vs-input--label"><strong>Order</strong> <span class="text-danger"></span></label>
                           <vs-input class="w-full" v-model="order" name="Email" />

        </div>
      </div>
    </div>
           <div class="vx-row mt-4"> 
           <label>Page Content</label>
      			<quill-editor v-model="content"
		            ref="myQuillEditor"
		            class="editor">
			   	</quill-editor>
           </div>




      




     <div class="vx-row">
      <div class="vx-col w-full">      
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button size="mediam"  class="ml-4 mt-2"  :disabled="isDisabled" @click="SavePage">Save Changes</vs-button>

          <vs-button size="mediam" icon-pack="feather" icon="icon-x-circle" class="ml-4 mt-2" color="danger" @click="ReturnBack">Cancel</vs-button>
<!--          <vs-button icon-pack="feather" icon="icon-x-circle" class="ml-4 mt-2" type="border" color="danger" @click="reset_data">Reset</vs-button>-->
        </div>
      </div>
    </div>
  </vx-card>

</div>

</template>

<script>
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import axios from '@/axios.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'



import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    vSelect,
    flatPickr,  
    quillEditor
  },
  props: {
    data: {
      // type: Object,
      // required: true

      Name:'',
      description:'',
      order:'',
      content:''
    }
  },
  data:()=>({


    Role:'',
    arrayDataCategorey:[],
    Name:'',
    Email:'',
    Contact:'',
    Password:'',
    SubCategorey:'',
      value1:'',
      addCondition:false,
    users:[
      {
        "id": 1,
        "name": "Average",
        "username": "Bret",
        "email": "01",
        "website": "MMS",
      },
      {
        "id": 2,
        "name": "Average",
        "username": "Antonette",
        "email": "02",
        "website": "MMS",
      },
      {
        "id": 3,
        "name": "Average",
        "username": "Samantha",
        "email": "02",
        "website": "AM",
      },
      {
        "id": 4,
        "name": "Average",
        "username": "Karianne",
        "email": "02",
        "website": "AM",
      },
      
    ]
  }),
 computed: {
     usersData () {
      return this.$store.state.userManagement.roles
    }
 },

  methods: {




     async SavePage(){
		    	let valid = await this.$validator.validate();
		    	if(valid){
			    		this.$vs.loading();
              let payload={
              name:this.Name,
              description:this.description,
              content:this.content,
              order:this.order
              } 
		        this.$store.dispatch('userManagement/AddCmsPages',payload)
               .then(() => { 
                 this.$vs.loading.close() 
            		 this.$router.push('/apps/cms/pages');
                 })
         .catch(error => {
          this.$vs.loading.close()
        })
		    	}
		    },
      save_changes() {

           

         
     
                this.$validator.validateAll().then(result => {
                    if (result) {
                       const obj = {

        sub_category_name:this.SubCategorey,
        task_category_id :this.Categorey

         }
                        axios.post('/api/add-task-sub-category',
                        
                        obj,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then((response) => {
                   
                 this.alertMessage('green','success',response.data.Message)
                  
                  
                  this.$router.push('/TaskManagement/subcategorey/list')


                              console.log(response)
      
                        }).catch((error) => {})
                    } else {
                        // this.alertMessage('primary','info',"Kindly fill the required filed first");
                    }
                })
            },



      onChange(current) {
      console.log('onChange:', current);
      this.current = current;
    },
       onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
   
  },
  created () {
             if (!moduleUserManagement.isRegistered) {

      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    } 
    // let payload = {
    //      token : activeUserInfo.token
    //   }

    			    		this.$vs.loading();
      this.$store.dispatch('userManagement/fetchRoles').then((res) => { 
           this.arrayDataCategorey  = this.$store.state.userManagement.roles
                            this.$vs.loading.close() 

              console.log(res)
            }).catch(err => {
                                            this.$vs.loading.close() 
                console.error(err) })
//             this.arrayDataCategorey = res.data
   
  }

}
</script>

<style lang="scss">
.ql-container{
  min-height: inherit;
}
  .add_form_tab ul li{
    margin-top: 0;
  }
  .text-danger.text-sm{  
    padding-left: 5px;
  }    
    .date_lable{
      margin-top: 12px;
    }
    .vuesax-app-is-ltr .vs-input--label {
      margin-bottom: 0px;
      display: block;
      justify-content: center;
      align-items: center;
    }
    label.text-sm {
      margin-bottom: 7px;
      display: block;
    }
    .vs-input--label {
      display: block;
      margin-bottom: 7px;
    }
</style>
