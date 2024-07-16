import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expense-role',
  templateUrl: './add-expense-role.component.html',
  styleUrls: ['./add-expense-role.component.scss']
})
export class AddExpenseRoleComponent implements OnInit {
  expeenseForm: FormGroup;
  submit:boolean=false;id;
  constructor() { }

  ngOnInit() {
    this.createForm()
  }
  get f() {
    return this.expeenseForm.controls;
  }
    async onSubmit() {
      console.log('po',this.expeenseForm.value);
      
     
      if(this.expeenseForm.value['bill']=='')
      {
          alert("Bill Image Must Be Upload")
          return
      }
      if (this.expeenseForm.invalid) {
        this.submit = true;
         return;
       }
      console.log('wel Come');
      
    }
    createForm() {
      this.expeenseForm = new FormGroup({
        expeenseid: new FormControl('', Validators.required),
        manager: new FormControl('',Validators.required),
        expense: new FormControl('',Validators.required),
        bill: new FormControl('',Validators.required)
      });
    }
    onReset(r:FormGroup):void{
      r.reset()
      this.submit =false;
    }
  }


  