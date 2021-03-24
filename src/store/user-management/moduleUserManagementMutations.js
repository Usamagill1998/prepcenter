/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_USERS (state, users) {
    state.users = users
  },

  SET_ROLES (state, roles) {
    state.roles = roles
  },
  SET_SUBADMINS (state, subadmins) {
    state.subAdmins = subadmins
  },

  SET_SETTINGS (state, settings) {
    state.settings = settings
  },

  SET_PAGES (state, pages) {
    state.pages = pages
  },

  REMOVE_RECORD (state, itemId) {
    const userIndex = state.users.findIndex((u) => u.id === itemId)
    state.users.splice(userIndex, 1)
  }
}
