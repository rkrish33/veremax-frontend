import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import MetisMenu from "metismenujs/dist/metismenujs";

import { activateMenuItems, resetMenuItems } from "./utils";
import { MENU } from "./menu";
import { MenuItem } from "./menu.model";
import { RoleService } from "../../../../_service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isCondensed: boolean;
  @Input() mode: string;
  sidebarScrollRef: any;

  menu: any;
  type: any;
  menuItems = [];

  @ViewChild("sideMenu", { static: false }) sideMenu: ElementRef;
  rolee: any;

  constructor(router: Router, private role: RoleService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  ngOnInit() {
    console.log("Menu Comp nnennttt");
    this.initialize();
  }

  ngAfterViewInit() {
    // activate menu
    console.log("Ng on Inittt changesss");

    this._initMenu();
  }

  /**
   * On prop change, look for layout settings
   */
  ngOnChanges() {
    console.log("Ng on changesss");

    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this._initMenu();
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  /**
   * Initizes metis menu
   */
  _initMenu() {
    if (this.mode === "horizontal") {
      const menuRef = new MetisMenu(this.sideMenu.nativeElement).on(
        "shown.metisMenu",
        (event) => {
          window.addEventListener("click", function menuClick(e) {
            if (!event.target.contains(e.target)) {
              menuRef.hide(event.detail.shownElement);
              window.removeEventListener("click", menuClick);
            }
          });
        }
      );
    } else {
      this.menu = new MetisMenu(this.sideMenu.nativeElement);
    }
    this._activateMenuDropdown();
  }

  /**
   * Activate the parent dropdown
   * TODO: This is hard-coded check - change to some common way
   *
   *
   *
   */
  _activateMenuDropdown() {
    const activeClass = this.mode === "horizontal" ? "active" : "mm-active";
    const dropdownActiveClass =
      this.mode === "horizontal" ? "active" : "mm-show";

    resetMenuItems(activeClass, dropdownActiveClass);
    if (this.mode === "horizontal") {
      resetMenuItems("mm-active", "mm-show");
    }
    activateMenuItems(activeClass, dropdownActiveClass);
  }

  /**
   * Initilize
   */
  initialize(): void {
    this.type = this.role.getLoginType();
    //this.type=1
    console.log("type", this.type);
    this.rolee = this.role.getroleid();
    console.log("roleeeeee", this.rolee);
    // this.menuItems = MENU;
    this.menuItems = [
      // {
      //   label:"Veremax Admin",
      //   isTitle: true,
      //   hidden: this.type == 1 ? false : true,
      // },
      // {
      //   label: "Admin",
      //   icon: "user",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "Expense Type1",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/expensetype1/addexpenseType1",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/expensetype1/listexpenseType1",
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Claim Type 1',
      //       subItems:
      //         [
      //           {
      //             label: 'Add',
      //             link: '/pages/claimtype1/addclaimtype1',
      //           },
      //           {
      //             label: 'List',
      //             link: '/pages/claimtype1/listclaimtype1',
      //           },
      //         ]

      //     },
      //   ],
      // },

      // {
      //   label: "Project",
      //   icon: "key",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "Add",
      //       link: "/pages/administration/add-project",
      //     },
      //     {
      //       label: "List",
      //       link: "/pages/administration/list-project",
      //     },
      //     {
      //       label: "Hierarchical Level",
      //       link: "/pages/administration/select-designation",
      //     },
      //   ],
      // },

      // {
      //   label: "Project Mapping",
      //   icon: "file",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "Add Project Employee",
      //       link: "/pages/empolyeemaster/projectLevel",
      //     },
      //     {
      //       label: "List Project Employee",
      //       link: "/pages/empolyeemaster/listpro_level",
      //     },
      //   ],
      // },
      // {
      //   label: "PR Type",
      //   icon: "file",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "PR Type",
      //       subItems: [
      //         {
      //           label: "Add PR Type",
      //           link: "/pages/prtype/add-pr-type",
      //         },
      //         {
      //           label: "List PR Type",
      //           link: "/pages/prtype/list-pr-type",
      //         },
      //       ],
      //     },
      //     {
      //       label: "PR Type Menu1",
      //       subItems: [
      //         {
      //           label: "Add PR Menu1",
      //           link: "/pages/prtypemenu/add_pr_menu",
      //         },
      //         {
      //           label: "List PR Menu1",
      //           link: "/pages/prtypemenu/list-pr-menu",
      //         },
      //       ],
      //     },
      //     {
      //       label: "PR Type Menu2",
      //       subItems: [
      //         {
      //           label: "Add PR Menu2",
      //           link: "/pages/prtypemenu2/add_pr_menu2",
      //         },
      //         {
      //           label: "List PR Menu2",
      //           link: "/pages/prtypemenu2/list-pr-menu2",
      //         },
      //       ],
      //     },
      //   ],
      // },

      // {
      //   label: "Project Claim",
      //   icon: "file",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "ADD",
      //       link: "/pages/EmployClaimAdmin/addemployeeclaimadm",
      //     },
      //     {
      //       label: "LIST",
      //       link: "/pages/EmployClaimAdmin/listemployeeclaimadm",
      //     },
      //   ],
      // },

      // {
      //   label: 'Expense Role',
      //   icon: 'lock',
      //   subItems:
      //     [
      //       {
      //         label: 'Add',
      //         link: '/pages/administration/add-expense-role',
      //       },
      //       {
      //         label: 'List',
      //         link: '/pages/administration/list-expense-role',
      //       },
      //     ]
      //   },

      // {
      //   label: 'Attendance',
      //   icon: 'lock',
      //   subItems: [
      //     {
      //       label: 'ADD',
      //       link: '/pages/attendance/addattendance',
      //     },
      //     {
      //       label: 'LIST',
      //       link: '/pages/attendance/listattendance',
      //     },
      //   ]
      // },

      // {
      //   label: " Veremax Team Project",
      //   isTitle: true,
      //   hidden:
      //     this.type == 1 || this.type == 2 || this.type == 3 ? false : true,
      // },

      // {
      //   label: 'Dashboard',
      //   icon: 'home',
      //   link: '/pages',
      //   badge: {
      //     variant: 'success',
      //     text: '1',
      //   },
      // },
      
      // {
      //     label:'Business',
      //     icon:'lock',
      //     subItems:[
      //         {
      //             label:'Add Business',
      //             link:'/pages/Business/addBusiness',
      //         },
      //         {
      //             label:'List Business',
      //             link:'/pages/Business/listBusiness',
      //         },
      //     ]
      //   },
      // {
      //     label:'Employees',
      //     icon:'lock',
      //     subItems:[
      //         {
      //             label:'Add Employees',
      //             link:'/pages/Employees/addemployees',
      //         },
      //     ]
      // },
      // {
      //   label: "Profile",
      //   icon: "user-plus",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "Add",
      //       link: "/pages/usermaster/add",
      //     },
      //     {
      //       label: "LIST",
      //       link: "/pages/usermaster/list",
      //     },
      //   ],
      // },
      // {
      //   label: "Adminstration",
      //   icon: "lock",
      //   hidden: this.type == 1 || this.type == 3 ? false : true,
      //   subItems: [
      //     {
      //       label: "District",
      //       subItems: [
      //         {
      //           label: "Add",
      //           icon: "lock",
      //           link: "/pages/administration/addadminstration",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/listadminstration",
      //         },
      //       ],
      //     },

      //     {
      //       label: " Vendor Category",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-category",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-category",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Expense Type",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-exptype",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-exptype",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Client Details",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pagespages/administration/add-client",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-client",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Service Category",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-servicecat",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-servicecat",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Mept",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-mept",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-mept",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Buyer",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-buyer",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-buyer",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Payment Terms",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-paymentterms",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-paymentterms",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Employee Type",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-employeetype",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-employeetype",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Employee Claim Type",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-claimtype",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-claimtype",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Employee Designation",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add_designation",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list_designation",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Employee Department",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add_emp_department",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list_emp_department",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Vehicle Type",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-vehicletype",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-vehicletype",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Fuel Card",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-fuel-card",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-fuel-card",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Service Items",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add_serviceitem",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list_serviceitem",
      //         },
      //       ],
      //     },

      //     {
      //       label: "Role",
      //       subItems: [
      //         {
      //           label: "Add",
      //           link: "/pages/administration/add-role",
      //         },
      //         {
      //           label: "List",
      //           link: "/pages/administration/list-role",
      //         },
      //       ],
      //     },
      //   ],
      // },

      // {
      //   label: "Vendor Creation",
      //   icon: "lock",
      //   hidden: this.type == 1 || this.type == 3 ? false : true,
      //   subItems: [
      //     {
      //       label: "Add Vendor",
      //       link: "/pages/vendordetails/addvendordetails",
      //     },
      //     {
      //       label: "List Vendor",
      //       link: "/pages/vendordetails/listvendordetails",
      //     },
      //   ],
      // },

      // {
      //   label: "Vendor PO",
      //   icon: "lock",
      //   hidden: this.type == 1 || this.type == 3 ? false : true,
      //   subItems: [
      //     {
      //       label: "Add",
      //       link: "/pages/vendor/addvendor",
      //     },
      //     {
      //       label: "List",
      //       link: "/pages/vendor/listvendor",
      //     },
      //   ],
      // },

      {
        label: "Empolyee Management",
        icon: "lock",
        hidden: this.type == 1 ? false : true,
        subItems: [
          {
            label: "Employee Details",
            link: "/pages/empolyeemaster/listempolyee",
          },
        ],
      },

      // {
      //   label: "Employee Claim",
      //   icon: "lock",
      //   // hidden: this.type == 1 || this.type == 3 ? false : true,
      //   subItems: [
      //     {
      //       label: "ADD",
      //       link: "/pages/employeeclaim/addclaim",
      //     },
      //     {
      //       label: "LIST",
      //       link: "/pages/employeeclaim/listclaim",
      //     },
      //   ],
      // },

      {
        label: "Claim Management",
        icon: "user",
        hidden: this.type == 1 || this.type == 3 ? false : true,

        subItems: [
          {
            label: "Employee Claim",
            link: "/pages/Claim/Claim_Management/listempclaim",
          },
          {
            label: "Claim Report",
            link: "/pages/Claim/Claim_report/",
          },
        ],
      },

      // {
      //   label: "Fuel Topup",
      //   icon: "circle",
      //   hidden: this.type == 1 || this.type == 3 ? false : true,
      //   subItems: [
      //     {
      //       label: "ADD",
      //       link: "/pages/DailyFuelTopup/addfuel",
      //     },
      //     {
      //       label: "LIST",
      //       link: "/pages/DailyFuelTopup/listfuel",
      //     },
      //   ],
      //  },

    
      {
        label: "Vehicle Management",
        icon: "truck",
        hidden: this.type == 1 || this.type == 2 ? false : true,

        subItems: [
          {
            label: "Vehicle Registration",
            link: "/pages/Vehicle/Vehicle_Management/listvehicle",
          },
          {
            label: "Project Assigning ",
            link: "/pages/Vehicle/Vehicle_Management/listprojectvehicle",
          },

          {
            label: "Vehicle Tracker",
            link: "/pages/DailyKmUpdate/listdailykm",
          },

          {
            label: "Vehicle Service",
            link: "/pages/Vehicle/Vehicle_Management/listvehicleservice",
          },
          {
            label: "Report",
            link: "/pages/Vehicle/Vehicle_tracker_report",
          },
        ],
      },

      {
        label: "Vehicle Management",
        icon: "truck",
        hidden: this.type == 4 ? false : true,

        subItems: [
          {
            label: "Vehicle Registration",
            subItems: [
              {
                label: "Add Vehicle",
                link: "/pages/Vehicle/Vehicle_Management/addvehicle",
              },
              {
                label: "List Vehicle",
                link: "/pages/Vehicle/Vehicle_Management/listvehicle",
              },
            ],
          },

          {
            label: "Vehicle Tracker",
            subItems: [
              {
                label: "ADD",
                link: "/pages/DailyKmUpdate/adddailykm",
              },
              {
                label: "LIST",
                link: "/pages/DailyKmUpdate/listdailykm",
              },
              {
                label: "Report",
                link: "/pages/Vehicle/Vehicle_tracker_report",
              },
            ],
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

      {
        label: "Rental Management",
        icon: "home",
        hidden: this.type == 1 || this.type == 5 ? false : true,
        subItems: [
          {
            label: "House Owner Details",
            link: "/pages/Rent/Rental_Management/listrent",
          },

          {
            label: "Rent & Advance",
            link: "/pages/Rent/Rental_Management/listmonthlyrent",
          },

          {
            label: "Rental Report",
            link: "/pages/Rent/Rental_Report",
          },
        ],
      },

      // {
      //   label: 'Apps',
      //   isTitle: true
      // },
      // {
      //   label: 'Calendar',
      //   icon: 'calendar',
      //   link: '/pages/apps-calendar',
      // },
      // {
      //   label: 'Email',
      //   icon: 'inbox',
      //   subItems: [
      //     {
      //       label: 'Inbox',
      //       link: '/pages/apps/email-inbox',
      //     },
      //     {
      //       label: 'Read',
      //       link: '/pages/apps/email-read'
      //     },
      //     {
      //       label: 'Compose',
      //       link: '/pages/apps/email-compose'
      //     },
      //   ]
      // },
      // {
      //   label: 'Project',
      //   icon: 'lock',
      //   subItems: [
      //     {
      //       label: 'List',
      //       link: '/pages/apps/project-list',
      //     },
      //     {
      //       label: 'Detail',
      //       link: '/pages/apps/project-detail',
      //     },
      //   ]
      // },
      // {
      //   label: 'Tasks',
      //   icon: 'bookmark',
      //   subItems: [
      //     {
      //       label: 'List',
      //       link: '/pages/apps/task-list',
      //     },
      //     {
      //       label: 'Kanban Board',
      //       link: '/pages/apps/task-board',
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
      //       link: '/pages/other/pages-starter'
      //     },
      //     {
      //       label: 'Profile',
      //       link: '/pages/other/pages-profile'
      //     },
      //     {
      //       label: 'Activity',
      //       link: '/pages/other/pages-activity'
      //     },
      //     {
      //       label: 'Invoice',
      //       link: '/pages/other/pages-invoice'
      //     },
      //     {
      //       label: 'Pricing',
      //       link: '/pages/other/pages-pricing'
      //     },
      //     {
      //       label: 'Error 404',
      //       link: '/pages/other/pages-error-404'
      //     },
      //     {
      //       label: 'Error 500',
      //       link: '/pages/other/pages-error-500'
      //     },
      //   ]
      // },
      // {
      //   label: 'components',
      //   isTitle: true
      // },

      // {
      //   label: "UI Elements",
      //   icon: "package",
      //   hidden: this.type == 1 ? false : true,
      //   subItems: [
      //     {
      //       label: "Bootstrap UI",
      //       link: "/pages/ui/bootstrap",
      //     },
      //     {
      //       label: "Icons",
      //       link: "/pages/ui/icons",
      //       subItems: [
      //         {
      //           label: "Feather Icons",
      //           link: "/pages/ui/icon-feather",
      //         },
      //         {
      //           label: "Unicons Icons",
      //           link: "/pages/ui/icon-unicons",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Widgets",
      //       link: "/pages/ui/widgets",
      //     },
      //   ],

      //  },

      // {
      //   label: 'Forms',
      //   link: '/pages/ui/form',
      //   hidden: this.type == 1 ? false : true,

      //   icon: 'file-text',
      //   subItems: [
      //     {
      //       label: 'Basic Elements',
      //       link: '/pages/ui/forms-basic'
      //     },
      //     {
      //       label: 'Advanced',
      //       link: '/pages/ui/forms-advanced'
      //     },
      //     {
      //       label: 'Validation',
      //       link: '/pages/ui/forms-validation'
      //     },
      //     {
      //       label: 'Wizard',
      //       link: '/pages/ui/forms-wizard'
      //     },
      //     {
      //       label: 'Editor',
      //       link: '/pages/ui/forms-editor'
      //     },
      //     {
      //       label: 'File Uploads',
      //       link: '/pages/ui/forms-uploads'
      //     },
      //   ]
      // },
      // {
      //   label: 'Charts',
      //   link: '/pages/ui/charts',
      //   icon: 'pie-chart'
      // },
      // {
      //   label: 'Tables',
      //   link: '/pages/ui/tables',
      //   icon: 'lock',
      //   subItems: [
      //     {
      //       label: 'Basic',
      //       link: '/pages/ui/tables-basic'
      //     },
      //     {
      //       label: 'Advanced',
      //       link: '/pages/ui/tables-advanced'
      //     },
      //   ]
      // }
    ];
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Hides the menubar
   */
  hideMenu() {
    document.body.classList.remove("sidebar-enable");
  }
}
