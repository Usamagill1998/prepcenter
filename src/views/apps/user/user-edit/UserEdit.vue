
<template>
  <div id="page-user-edit">

                          <vs-button @click="addPhoneNumber()" icon-pack="feather" icon="icon-edit" class="mr-4">Add</vs-button>

    <vx-card class="mt-4" >

    
  <div>
    <vs-table :data="users">
      <template slot="header">
      
      </template>
      <template slot="thead">
        <vs-th>
          #
        </vs-th>
        <vs-th>
          Description
        </vs-th>
        <vs-th>
                    Categorey

        </vs-th>
        <vs-th>
          Quantity
        </vs-th>
         <vs-th>
          Bundle Up
        </vs-th>
         <vs-th>
          No In Pile
        </vs-th>
        <vs-th>
          Total
        </vs-th>
        <vs-th>
          Bubble Wrap
        </vs-th>
        <vs-th>
          Remove
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr  v-for="(phone,index) in phone" :key="index">
          <vs-td >
            1
          </vs-td>
          <vs-td >
                  <vs-input class="w-full mt-4"   v-validate="'required|alpha_spaces'"  />
          </vs-td>
          <vs-td >
                    <!-- <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" /> -->
          <v-select :options="[{label: 'Test1', code: 'ca'}]"></v-select>
          </vs-td>
          <vs-td >
                          <vs-input class="w-full mt-4"  v-model="phone.number" v-validate="'required|alpha_spaces'"  />
          </vs-td>
           <vs-td >
                    <!-- <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" /> -->
          <v-select :options="[{label: 'Test1', code: 'ca'}]"></v-select>
          </vs-td>
           <vs-td >
          <vs-input class="w-full mt-4"   v-validate="'required|alpha_spaces'"  />
          </vs-td>
           <vs-td >  
          <vs-input class="w-full mt-4"   v-validate="'required|alpha_spaces'"  />
          </vs-td>
           <vs-td >
                    <!-- <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" /> -->
          <v-select :options="[{label: 'Test1', code: 'ca'}]"></v-select>
          </vs-td>
            <vs-td >
                    <!-- <v-select v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" /> -->
         <vs-icon  @click="removePhoneNumber(index)" icon="delete" color="primary" size="large"></vs-icon>
          </vs-td>
<!-- icon="UsersIcon" -->
        </vs-tr>
      </template>
    </vs-table>
  </div> 

    </vx-card> 
   

  </div>
</template>

<script>
import UserEditTabAccount     from './UserEditTabAccount.vue'
import UserEditTabInformation from './UserEditTabInformation.vue'
import UserEditTabSocial      from './UserEditTabSocial.vue'
import vSelect from 'vue-select'

// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import Button from '../../../components/vuesax/button/Button.vue'

export default {
  components: {
    UserEditTabAccount,
    UserEditTabInformation,
    UserEditTabSocial,
    Button,
    vSelect
  },
  data () {
    return {
        users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ],
      user_data: null,
      user_not_found: false,
      // number:0,
      phone:[
       {    
            number:0,
            contactTypeId: '',
           
          },
          
      ],

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 0
    }
  },
  watch: {
    activeTab () {
      this.fetch_user_data(this.$route.params.userId)
    }
  },
  methods: {

    addPhoneNumber() {
    this.phone.push(
      {
        number:0,
        contactTypeId: '',
      }
    )
  },
  get(){
    console.log(this.phone.map(x=>x))
  }
,
  removePhoneNumber(phoneGroup) {
    if (phoneGroup > 0) { 
      this.phone.splice(phoneGroup,1);
    }
  } 
  ,
    fetch_user_data (userId) {
      this.$store.dispatch('userManagement/fetchUser', userId)
        .then(res => { this.user_data = res.data })
        .catch(err => {
          if (err.response.status === 404) {
            this.user_not_found = true
            return
          }
          console.error(err) 
        })
    }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
    this.fetch_user_data(this.$route.params.userId)
  }
}

</script>
