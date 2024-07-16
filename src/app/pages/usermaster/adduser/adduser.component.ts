import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  NgForm,
  MaxLengthValidator,
  FormGroupName,
  FormControl,
} from "@angular/forms";
import { UserMasterService } from "src/_service/user-master.service";
import { AdministrationService } from "src/_service/administration.service";
// import { ITreeOptions } from 'angular-tree-component';
import { ITreeOptions, TreeModel } from "@circlon/angular-tree-component";
import { EditorComponent } from "../../ui/form/editor/editor.component";
import { toJS } from "mobx";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { RoleService } from "src/_service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  @ViewChild("tree", { static: false }) public tree;
  id;
  onReset;
  submit: boolean;
  roleUserForm: FormGroup;
  edit: any;
  getId;

  options: ITreeOptions = {
    useCheckbox: true,
  };

  nodes = [
    {
      name: "User Master",
      children: [
        {
          name: "Add",
          id: 1,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 21, name: "Edit" },
                { id: 22, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 3,
        },
      ],
    },
    {
      name: "Adminstration",
      children: [
        {
          name: "Add",
          id: 10,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 11, name: "Edit" },
                { id: 13, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 14,
        },
      ],
    },
    {
      name: "Vendor Creation",
      children: [
        {
          name: "Add",
          id: 15,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 16, name: "Edit" },
                { id: 17, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 18,
        },
      ],
    },
    {
      name: "Vendor PO",
      children: [
        {
          name: "Add",
          id: 19,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 20, name: "Edit" },
                { id: 21, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 22,
        },
      ],
    },
    {
      name: "Employee Master",
      children: [
        {
          name: "Add",
          id: 23,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 24, name: "Edit" },
                { id: 25, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 26,
        },
      ],
    },
    {
      name: "Spare Master",
      children: [
        {
          name: "Add",
          id: 27,
        },
        {
          name: "List",
          children: [
            {
              name: "Permission",
              children: [
                { id: 28, name: "Edit" },
                { id: 29, name: "Delete" },
              ],
            },
          ],
        },
        {
          name: "Edit",
          id: 30,
        },
      ],
    },
    {
      name: "Approval Request",
      children: [
        {
          name: "Stock Inward Request",
          id: 31,
        },
        {
          name: "Material Indent Request",
          id: 32,
        },
      ],
    },
    {
      name: "Purchase Order",
      children: [
        {
          name: "Add",
          id: 33,
        },
        {
          name: "List",
          id: 34,
        },
      ],
    },
    {
      name: "Reports",
      children: [
        {
          name: "Add",
          id: 35,
        },
        {
          name: "List",
          id: 36,
        },
      ],
    },
    {
      name: "Uploads",
      children: [
        {
          name: "Add",
          id: 37,
        },
        {
          name: "List",
          id: 38,
        },
      ],
    },
    {
      name: "Rent Details",
      children: [
        {
          name: "Add",
          id: 39,
        },
        {
          name: "List",
          id: 40,
        },
      ],
    },
     {
      name: 'Claim Management',
      children: [
        {
          name: 'Add Employee Claim', id: 55
        },
        {
          name: 'List Employee Claim', id:56
        },
        {
          name: ' Claim Report', id:57
        },
      ],
    },

    {
      name: "Vehicle Management",
      children: [
        {
          name: "Vehicle Registration",
          children: [
            {
              name: "Add Vehicle registration",
              id: 41,
            },
            {
              name: "List Vehicle registration",
              id: 42,
            },
          ],
        },
        {
          name: "Project Assigning ",
          children: [
            {
              name: "Assign Project-Vehicle",
              id: 43,
            },
            {
              name: "List",
              id: 44,
            },
          ],
        },

        {
          name: "Vehicle Tracker",
          children: [
            {
              name: "ADD",
              id: 45,
            },
            {
              name: "LIST",
              id: 45,
            },
            {
              name: "Report",
              id: 47,
            },
          ],
        },

        {
          name: "Vehicle Service",
          children: [
            {
              name: "Add Vehicle Service",
              id: 48,
            },

            {
              name: "List Vehicle Service",
              id: 49,
            },
          ],
        },
      ],
    },
    {
      name: "Rental Management",
      children: [
        {
          name: "House Owner Details",
          children: [
            {
              name: "Add House Owner",
              id: 50,
            },
            {
              name: "List House Owner",
              id: 51,
            },
          ],
        },
        {
          name: "Rent and Advance ",
          children: [
            {
              name: "Add Rent/Advance ",
              id: 52,
            },
            {
              name: "List  Rent/Advance",
              id: 53,
            },
          ],
        },

        {
          name: "Rental Report",
          id: 54,
        },
      ],
    },
  ];
  result: Object;
  Roles: any;
  toastalert: any;

  constructor(
    public formBuilder: FormBuilder,
    private AdminSer: AdministrationService,
    private router: Router,
    public role: RoleService,
    private toast: ToastrService,
    private aroute: ActivatedRoute
  ) {
    {
      // this.edit = JSON.parse(localStorage.getItem('profile_e'))
    }
  }

  async ngOnInit() {
    this.aroute.queryParams.subscribe((params) => {
      this.getId = params.role_id;
    });
    this.createForm();

    if (this.getId) {
      this.getprofile();
      this.createForm();
      // this.selectnodes(this.edit['menu_role'])
    }
  }

  async getprofile() {
    this.result = await this.AdminSer.editRole({ role_id: this.getId });
    console.log("get data", this.result);

    if (this.result) {
      this.createForm();
      this.selectnodes(this.result[0]["menu_role"]);
    }
  }
  // get form() {
  //   return this.roleUserForm.controls;

  // }
  get f() {
    return this.roleUserForm.controls;
  }

  async onSubmit() {
    console.log(this.result);
    console.log(this.getId);
    console.log(this.tree, "hii");
    if (this.roleUserForm.invalid) {
      this.submit = true;
      return;
    }
    var method,
      val = this.roleUserForm.value,
      issue = false;
    // console.log(val)

    val["menu_role"] = this.selectednodes();
    this.result = await this.AdminSer.addRole(val);
    if (this.result[0].err_code == 0) {
      this.toast.success(this.result[0].msg);
      } else{
        this.toast.warning(this.result[0].msg);
      }   
       val["menu_role"].forEach((item) => {
      if ((item + "").includes("404")) {
        issue = true;
      }
    });

    issue ? val["menu_role"].push(404) : "";
    if (val["menu_role"].length == 0) {
      this.toastalert("Pls Select Profile Role");
      return;
    }

    console.log("777");

    // if (this.result) {
    //   val['role_id'] = this.result[0]['role_id_pk'];
    //   console.log(val)
    // }
    //   method = 'updateRole'
    //   let res = await this.AdminSer[method](val)
    //   console.log(res)
    //   alert(res[0].msg)
    //   this.toastalert(result['msg'], result['status']);
    //   if (res['status'] == 1) {
    //     this.router.navigate(['/pages/'])
    //   }
    // }
    // toastalert(msg, status = 0) {
    //   const toast: Toast = {
    //     type: status == 1 ? 'success' : 'warning',
    //     title: status == 1 ? 'Success' : 'Failure',
    //     body: msg,
    //     timeout: 3000,
    //     showCloseButton: true,
    //     bodyOutputType: BodyOutputType.TrustedHtml,
    //   };
    //   this.alert.popAsync(toast);
    // }
  }

  selectednodes() {
    // console.log('kio', this.tree);
    const selectedNodes = [];
    Object.entries(toJS(this.tree.treeModel.selectedLeafNodeIds)).forEach(
      ([key, value]) => {
        // console.log(key, value);
        if (value === true) {
          selectedNodes.push(parseInt(key));
        }
      }
    );
    return selectedNodes;
  }

  selectnodes(item) {
    let data = JSON.parse(item);

    let index: number = data.indexOf(404);
    if (index !== -1) {
      data.splice(index, 1);
    }
    // console.log(data.length);

    for (var i = 0; i < data.length; ++i) {
      // console.log("data", data[i])
      // console.log("rrrrrrrrrrrrrr", this.tree);
      let leaf = this.tree.treeModel.getNodeById(JSON.parse(data[i]));
      // console.log(leaf)
      if (leaf) leaf.setIsSelected(true);
    }
  }
  createForm() {
    this.roleUserForm = new FormGroup({
      profile: new FormControl(
        this.result ? this.result[0]["role_name"] : "",
        Validators.required
      ),
      description: new FormControl(
        this.result ? this.result[0]["description"] : "",
        Validators.required
      ),
    });
  }
}
