/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  
  {
    url: null,
    name: 'Dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard',
   url: '/dashboard/analytics',
   name: 'Analytics',
   slug: 'dashboard-analytics',
   i18n: 'Dashboard'
  },

  {
    url: null,
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Sliders',
    submenu: [
      {
        url: '/app/sliders',
        name: 'List',
        slug: 'app-sliders',
        i18n: 'List'
      },
    
    ]
  },
  {
    url: null,
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Roles',
    submenu: [
      {
        url: '/apps/user/roles',
        name: 'List',
        slug: 'app-user-list',
        i18n: 'List'
      },
    
    ]
  },
  {
    url: null,
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Subadmin',
    submenu: [
      {
        url: '/apps/user/subadmin',
        name: 'List',
        slug: 'app-user-list',
        i18n: 'List'
      },
    
    ]
  },
  {
    url: '/apps/cms/pages',
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Pages',
  },
  {
    url: '/apps/cms/setting',
    name: 'User',
    icon: 'UserIcon',
    i18n: 'Settings',
  },

  {
    url: null,
    name: 'Order',
    icon: 'UserIcon',
    i18n: 'Order',
    submenu: [
      {
        url: '/apps/order/order-list',
        name: 'List',
        slug: 'app-user-edit',
        i18n: 'List'
      },
      {
        url: '/apps/user/user-view/268',
        name: 'View',
        slug: 'app-user-view',
        i18n: 'View'
      },
      {
        url: '/apps/user/user-edit/268',
        name: 'Edit',
        slug: 'app-user-edit',
        i18n: 'Edit'
      }
    ]
  }
    ,  
      {
        url: null,
        name: 'Definations',
        icon: 'ShoppingCartIcon',
        i18n: 'Definations',
        submenu: [
          {
            url: '/',
            name: 'Packages',
            slug: 'ecommerce-shop',
            i18n: 'Packages'
          },
          {
            url: '/',
            name: 'Services',
            slug: 'ecommerce-item-detail-view',
            i18n: 'Services'
          },
        ]
      },
      // {
      //   url: null,
      //   name: 'Orders',
      //   icon: 'ShoppingCartIcon',
      //   i18n: 'Orders',
      //   submenu: [
      //     {
      //       url: '/',
      //       name: 'Packages',
      //       slug: 'ecommerce-shop',
      //       i18n: 'View Orders'
      //     },
         
      //   ]
      // },
      {
        url: null,
        name: 'Definations',
        icon: 'ShoppingCartIcon',
        i18n: 'Reports',
        submenu: [
          {
            url: '/',
            name: 'daily',
            slug: 'ecommerce-shop',
            i18n: 'Daily'
          },
          {
            url: '/',
            name: 'weekly',
            slug: 'ecommerce-item-detail-view',
            i18n: 'Weekly'
          },
          {
            url: '/',
            name: 'Services',
            slug: 'ecommerce-item-detail-view',
            i18n: 'Monthly'
          },
        ]
      }
        ]

