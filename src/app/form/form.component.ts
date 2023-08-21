import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm:FormGroup;
  formData:any[]=[];
  
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.myForm=this.fb.group(
      {
        uname:['',Validators.required],
        startLocation:['',Validators.required],
        destination:['',Validators.required],
        car:['',Validators.required],
       // seatsAvailable:['',Validators.required],
        seatsAvailable:['',Validators.required]
      }
    )
  }
  onSubmit(){
    if(this.myForm?.valid){
      const formData1=this.myForm.value;
      this.formData.push(formData1);
      alert("Name : "+formData1.uname+"\n"+"Start Location : "+formData1.startLocation+"\n"+"destination : "+formData1.destination+"\n"+"Car : "+formData1.car+"\n"+"Seats Available : "+formData1.seatsAvailable);
      alert("Form Submitted");
    }
    else{
      alert("Form is Invalid");
    }
  }
}
