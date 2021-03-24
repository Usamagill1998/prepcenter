/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'
import axiosUrl from '../../../src/axios'
const baseURL = "http://prepcenter.techhivedemo.xyz"
 const token=   localStorage.getItem('accessToken')
 export default {
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  
  fetchUsers ({ commit }) {
    return new Promise((resolve, reject) => {
       
      let payload={
        token : token
      } 
      axios.post(baseURL+'/api/cms/slider',payload)
      .then((response) => {

          commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchRoles ({ commit }) {
    return new Promise((resolve, reject) => {
       
      let payload={
        token : token
      } 
      axios.post(baseURL+'/api/users/roles',payload)
      .then((response) => {
          commit('SET_ROLES', response.data.data.roles)
          resolve(response)   
        })
        .catch((error) => { reject(error) }) 
    })
  },

  fetchSubAdmins({ commit }) {
    return new Promise((resolve, reject) => {
      let payload={
        token : token
      } 
      axios.post(baseURL+'/api/users/subadmins',payload)
      .then((response) => {
          commit('SET_SUBADMINS', response.data.data.subadmins)
          resolve(response)   
        })
        .catch((error) => { reject(error) }) 
    })
    },

    fetchCmsPages({ commit }) {
      return new Promise((resolve, reject) => {
        let payload={
          token : token
        } 
        axios.post(baseURL+'/api/cms/pages',payload)
        .then((response) => {
            commit('SET_PAGES', response.data.data.pages)
            resolve(response)   
          })
          .catch((error) => { reject(error) }) 
      })
      },


   AddSlider ({ commit },payload) {
    return new Promise((resolve, reject) => {
      axios.post(baseURL+'/api/cms/slider/add',payload)
      .then((response) => {

        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },
  updateSetting ({ commit },payload) {
    return new Promise((resolve, reject) => {
      axios.post(baseURL+'/api/cms/site/settings/update',payload)
      .then((response) => {
        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },

  AddRoles({ commit },payload) { 
    return new Promise((resolve, reject) => {
      payload['token'] = token
      axios.post(baseURL+'/api/users/roles/add',payload)
      .then((response) => {
     //    router.push(router.currentRoute.query.to || '/apps/user/roles')
        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },

  AddSubAdmin({ commit },payload) { 
    return new Promise((resolve, reject) => {
      payload['token'] = token
      axios.post(baseURL+'/api/users/subadmins/add',payload)
      .then((response) => {
     //    router.push(router.currentRoute.query.to || '/apps/user/roles')
        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },
  AddCmsPages({ commit },payload) { 
    return new Promise((resolve, reject) => {
      payload['token'] = token
      axios.post(baseURL+'/api/cms/pages/add',payload)
      .then((response) => {
     //    router.push(router.currentRoute.query.to || '/apps/user/roles')
        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        }) 
        .catch((error) => { reject(error) })
    })
  },

   deleteSlider({ commit },payload) { 
    return new Promise((resolve, reject) => {
      payload['token'] = token
      axios.post(baseURL+`/api/cms/slider/delete/${payload}`)
      .then((response) => {
     //    router.push(router.currentRoute.query.to || '/apps/user/roles')
        //  commit('SET_USERS', response.data.data.sliders)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    }) 
  }, 


   fetchSettings({ commit }) {
    return new Promise((resolve, reject) => {
      let payload={
        token :token
      } 
      axios.post(baseURL+'/api/cms/site/settings',payload)
      .then((response) => {
          commit('SET_SETTINGS', response.data.data.settings)
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },


  fetchUser (context, userId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/user-management/users/${userId}`)
        .then((response) => {
          resolve(response) 
        })
        .catch((error) => { reject(error) })
    })
  },
  removeRecord ({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/user-management/users/${userId}`)
        .then((response) => {
          commit('REMOVE_RECORD', userId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
