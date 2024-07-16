import { MenuItem } from "./menu.model";
 
 const type = localStorage.getItem("loginType")
  ? JSON.parse(localStorage.getItem("loginType"))
  : 0;

export const MENU: MenuItem[] = [
  {
    label: "Rajesh Roy (GM)",
    isTitle: true,
  },
  {
    label: "Admin",
    icon: "user",
    subItems: [
      {
        label: "Expense Type1",
        subItems: [
          {
            label: "Add",
            link: "/pages/expensetype1/addexpenseType1",
          },
          {
            label: "List",
            link: "/pages/expensetype1/listexpenseType1",
          },
        ],
      },
      // {
      //   label: 'Claim Type 1',
      //   subItems:
      //     [
      //       {
      //         label: 'Add',
      //         link: '/claimtype1/addclaimtype1',
      //       },
      //       {
      //         label: 'List',
      //         link: '/claimtype1/listclaimtype1',
      //       },
      //     ]

      // },
    ],
  },
  {
    label: "Project",
    icon: "key",
    subItems: [
      {
        label: "Add",
        link: "/pages/administration/add-project",
      },
      {
        label: "List",
        link: "/pages/administration/list-project",
      },
      {
        label: "Hierarchical Level",
        link: "/pages/administration/select-designation",
      },
    ],
  },
  {
    label: "Project Mapping",
    icon: "file",
    subItems: [
      {
        label: "Add Project Employee",
        link: "/pages/empolyeemaster/projectLevel",
      },
      {
        label: "List Project Employee",
        link: "/pages/empolyeemaster/listpro_level",
      },
    ],
  },
  {
    label: "PR Type",
    icon: "file",
    subItems: [
      {
        label: "PR Type",
        subItems: [
          {
            label: "Add PR Type",
            link: "/pages/prtype/add-pr-type",
          },
          {
            label: "List PR Type",
            link: "/pages/prtype/list-pr-type",
          },
        ],
      },
      {
        label: "PR Type Menu1",
        subItems: [
          {
            label: "Add PR Menu1",
            link: "/pages/prtypemenu/add_pr_menu",
          },
          {
            label: "List PR Menu1",
            link: "/pages/prtypemenu/list-pr-menu",
          },
        ],
      },
      {
        label: "PR Type Menu2",
        subItems: [
          {
            label: "Add PR Menu2",
            link: "/pages/prtypemenu2/add_pr_menu2",
          },
          {
            label: "List PR Menu2",
            link: "/pages/prtypemenu2/list-pr-menu2",
          },
        ],
      },
    ],
  },

  {
    label: "Project Claim",
    icon: "file",
    subItems: [
      {
        label: "ADD",
        link: "/pages/EmployClaimAdmin/addemployeeclaimadm",
      },
      {
        label: "LIST",
        link: "/pages/EmployClaimAdmin/listemployeeclaimadm",
      },
    ],
  },

  // {
  //   label: 'Expense Role',
  //   icon: 'lock',
  //   subItems:
  //     [
  //       {
  //         label: 'Add',
  //         link: '/administration/add-expense-role',
  //       },
  //       {
  //         label: 'List',
  //         link: '/administration/list-expense-role',
  //       },
  //     ]
  //   },

  // },
  // {
  //   label: 'Attendance',
  //   icon: 'lock',
  //   subItems: [
  //     {
  //       label: 'ADD',
  //       link: '/attendance/addattendance',
  //     },
  //     {
  //       label: 'LIST',
  //       link: '/attendance/listattendance',
  //     },
  //   ]
  // },
  {
    label: " Veremax Team Project",
    isTitle: true,
  },

  // {
  //   label: 'Dashboard',
  //   icon: 'home',
  //   link: '/pages',
  //   badge: {
  //     variant: 'success',
  //     text: '1',
  //   },
  // },
  // },
  // {
  //     label:'Business',
  //     icon:'lock',
  //     subItems:[
  //         {
  //             label:'Add Business',
  //             link:'/Business/addBusiness',
  //         },
  //         {
  //             label:'List Business',
  //             link:'/Business/listBusiness',
  //         },
  //     ]
  // },
  // {
  //     label:'Employees',
  //     icon:'lock',
  //     subItems:[
  //         {
  //             label:'Add Employees',
  //             link:'/Employees/addemployees',
  //         },
  //     ]
  // },
  {
    label: "Profile",
    icon: "user-plus",
    subItems: [
      {
        label: "Add",
        link: "/pages/usermaster/add",
      },
      {
        label: "LIST",
        link: "/pages/usermaster/list",
      },
    ],
  },
  {
    label: "Adminstration",
    icon: "lock",
    subItems: [
      {
        label: "District",
        subItems: [
          {
            label: "Add",
            icon: "lock",
            link: "/pages/administration/addadminstration",
          },
          {
            label: "List",
            link: "/pages/administration/listadminstration",
          },
        ],
      },

      {
        label: " Vendor Category",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-category",
          },
          {
            label: "List",
            link: "/pages/administration/list-category",
          },
        ],
      },
      {
        label: "Expense Type",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-exptype",
          },
          {
            label: "List",
            link: "/pages/administration/list-exptype",
          },
        ],
      },

      {
        label: "Client Details",
        subItems: [
          {
            label: "Add",
            link: "/pagespages/administration/add-client",
          },
          {
            label: "List",
            link: "/pages/administration/list-client",
          },
        ],
      },

      {
        label: "Service Category",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-servicecat",
          },
          {
            label: "List",
            link: "/pages/administration/list-servicecat",
          },
        ],
      },

      {
        label: "Mept",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-mept",
          },
          {
            label: "List",
            link: "/pages/administration/list-mept",
          },
        ],
      },

      {
        label: "Buyer",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-buyer",
          },
          {
            label: "List",
            link: "/pages/administration/list-buyer",
          },
        ],
      },

      {
        label: "Payment Terms",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-paymentterms",
          },
          {
            label: "List",
            link: "/pages/administration/list-paymentterms",
          },
        ],
      },

      {
        label: "Employee Type",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-employeetype",
          },
          {
            label: "List",
            link: "/pages/administration/list-employeetype",
          },
        ],
      },
      {
        label: "Employee Claim Type",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-claimtype",
          },
          {
            label: "List",
            link: "/pages/administration/list-claimtype",
          },
        ],
      },
      {
        label: "Vehicle Type",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-vehicletype",
          },
          {
            label: "List",
            link: "/pages/administration/list-vehicletype",
          },
        ],
      },
      {
        label: "Fuel Card",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-fuel-card",
          },
          {
            label: "List",
            link: "/pages/administration/list-fuel-card",
          },
        ],
      },

      {
        label: "Role",
        subItems: [
          {
            label: "Add",
            link: "/pages/administration/add-role",
          },
          {
            label: "List",
            link: "/pages/administration/list-role",
          },
        ],
      },
    ],
  },

  {
    label: "Vendor Creation",
    icon: "lock",
    subItems: [
      {
        label: "Add Vendor",
        link: "/pages/vendordetails/addvendordetails",
      },
      {
        label: "List Vendor",
        link: "/pages/vendordetails/listvendordetails",
      },
    ],
  },
  {
    label: "Vendor PO",
    icon: "lock",
    subItems: [
      {
        label: "Add",
        link: "/pages/vendor/addvendor",
      },
      {
        label: "List",
        link: "/pages/vendor/listvendor",
      },
    ],
  },
  {
    label: "Empolyee Master",
    icon: "lock",
    subItems: [
      {
        label: "Add",
        link: "/pages/empolyeemaster/addemployee",
      },
      {
        label: "LIST",
        link: "/pages/empolyeemaster/listempolyee",
      },
    ],
  },
  {
    label: "Employee Claim",
    icon: "lock",
    subItems: [
      {
        label: "ADD",
        link: "/pages/employeeclaim/addclaim",
      },
      {
        label: "LIST",
        link: "/pages/employeeclaim/listclaim",
      },
    ],
  },

  {
    label: "Fuel Topup",
    icon: "circle",
    subItems: [
      {
        label: "ADD",
        link: "/pages/DailyFuelTopup/addfuel",
      },
      {
        label: "LIST",
        link: "/pages/DailyFuelTopup/listfuel",
      },
    ],
  },
  {
    label: "Daily Km Update",
    icon: "circle",
    subItems: [
      {
        label: "ADD",
        link: "/pages/DailyKmUpdate/adddailykm",
      },
      {
        label: "LIST",
        link: "/pages/DailyKmUpdate/listdailykm",
      },
    ],
  },
  {
    label: 'Vehicle Management',
    icon: 'file',
    subItems:
      [
        {
          label: 'Vehicle Registration',
          subItems:
       [
        {
          label: 'Add Vehicle',
          link:'/Vehicle/Vehicle_Management/addvehicle' ,

        },
        {
          label: 'List Vehicle',
          link: '/Vehicle/Vehicle_Management/listvehicle',
        },
       ]
      },
        {
          label: 'Project Assigning ',
          subItems:
            [
              {
                label: 'Project-Vehicle',
                link:'/prtypemenu/add_pr_menu' ,
      
              },
              {
                label: 'List',
                link: '/prtypemenu/list-pr-menu',
              },
            ]
        },
        {
          label: 'Vehicle Service',
          subItems:
          
            [
            
              {
                label: 'Add Vehicle Service',
                link:'/prtypemenu2/add_pr_menu2' ,
      
              },
              {
                label: 'List Vehicle Service',
                link: '/prtypemenu2/list-pr-menu2',
              },
            ]
        },
      ]
  },
  {
    label: "Vehicle Report",
    icon: "truck",
    subItems: [
      // {
      //   label: 'ADD',
      //   link: '/pages/VehicleReport/addvehiclereport',
      // },
      {
        label: "LIST",
        link: "/pages/VehicleReport/listvehiclereport",
      },
    ],
  },
  // {
  //   label: 'Rent Details',
  //   icon: 'lock',
  //   subItems: [
  //     {
  //       label: 'ADD',
  //       link: '/pages/rent/addrent',
  //     },
  //     {
  //       label: 'LIST',
  //       link: '/pages/rent/listrent',
  //     },
  //   ]
  // },

  // {
  //   label: 'Apps',
  //   isTitle: true
  // },
  // {
  //   label: 'Calendar',
  //   icon: 'calendar',
  //   link: '/apps-calendar',
  // },
  // {
  //   label: 'Email',
  //   icon: 'inbox',
  //   subItems: [
  //     {
  //       label: 'Inbox',
  //       link: '/apps/email-inbox',
  //     },
  //     {
  //       label: 'Read',
  //       link: '/apps/email-read'
  //     },
  //     {
  //       label: 'Compose',
  //       link: '/apps/email-compose'
  //     },
  //   ]
  // },
  // {
  //   label: 'Project',
  //   icon: 'lock',
  //   subItems: [
  //     {
  //       label: 'List',
  //       link: '/apps/project-list',
  //     },
  //     {
  //       label: 'Detail',
  //       link: '/apps/project-detail',
  //     },
  //   ]
  // },
  // {
  //   label: 'Tasks',
  //   icon: 'bookmark',
  //   subItems: [
  //     {
  //       label: 'List',
  //       link: '/apps/task-list',
  //     },
  //     {
  //       label: 'Kanban Board',
  //       link: '/apps/task-board',
  //     },
  //   ]
  // },
  // {
  //   label: 'Custom',
  //   isTitle: true
  // },
  // {
  //   label: 'Pages',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       label: 'Starter',
  //       link: '/other/pages-starter'
  //     },
  //     {
  //       label: 'Profile',
  //       link: '/other/pages-profile'
  //     },
  //     {
  //       label: 'Activity',
  //       link: '/other/pages-activity'
  //     },
  //     {
  //       label: 'Invoice',
  //       link: '/other/pages-invoice'
  //     },
  //     {
  //       label: 'Pricing',
  //       link: '/other/pages-pricing'
  //     },
  //     {
  //       label: 'Error 404',
  //       link: '/other/pages-error-404'
  //     },
  //     {
  //       label: 'Error 500',
  //       link: '/other/pages-error-500'
  //     },
  //   ]
  // },
  // {
  //   label: 'components',
  //   isTitle: true
  // },
  {
    label: "UI Elements",
    icon: "package",
    subItems: [
      {
        label: "Bootstrap UI",
        link: "/pages/ui/bootstrap",
      },
      {
        label: "Icons",
        link: "/pages/ui/icons",
        subItems: [
          {
            label: "Feather Icons",
            link: "/pages/ui/icon-feather",
          },
          {
            label: "Unicons Icons",
            link: "/pages/ui/icon-unicons",
          },
        ],
      },
      {
        label: "Widgets",
        link: "/ui/widgets",
      },
    ],
  },
  // {
  //   label: 'Forms',
  //   link: '/ui/form',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       label: 'Basic Elements',
  //       link: '/ui/forms-basic'
  //     },
  //     {
  //       label: 'Advanced',
  //       link: '/ui/forms-advanced'
  //     },
  //     {
  //       label: 'Validation',
  //       link: '/ui/forms-validation'
  //     },
  //     {
  //       label: 'Wizard',
  //       link: '/ui/forms-wizard'
  //     },
  //     {
  //       label: 'Editor',
  //       link: '/ui/forms-editor'
  //     },
  //     {
  //       label: 'File Uploads',
  //       link: '/ui/forms-uploads'
  //     },
  //   ]
  // },
  // {
  //   label: 'Charts',
  //   link: '/ui/charts',
  //   icon: 'pie-chart'
  // },
  // {
  //   label: 'Tables',
  //   link: '/ui/tables',
  //   icon: 'lock',
  //   subItems: [
  //     {
  //       label: 'Basic',
  //       link: '/ui/tables-basic'
  //     },
  //     {
  //       label: 'Advanced',
  //       link: '/ui/tables-advanced'
  //     },
  //   ]
  // }
];
