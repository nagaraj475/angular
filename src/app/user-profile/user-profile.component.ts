import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileModel } from '../model/userProfileModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  addressForm: FormGroup;
  educationForm: any;
  profileForm: FormGroup;
  profileSection = true;
  educationSection = false;
  addressSection = false;
  formHide = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      nationality: [''],
      email: ['']
    });
    this.educationForm = this.formBuilder.group({
      univName: [''],
      degree: [''],
      majorName: [''],
      marks: ['']
    });
    this.addressForm = this.formBuilder.group({
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode:['']
    });
  }
  get f() { return this.profileForm.controls , this.educationForm.controls, this.addressForm.controls; }
  userDetails = new UserProfileModel('Nagaraj', 'Selvaraj', 'United States', 'test@test.com','Anna University','Bachelor','Computer Science','75', '2091 north street','Apt 290', 'troy','Mi','48084' );

  nationalities = ['Select', 'United States', 'United Kingdom', 'Iceland', 'South Korea'];
  degrees = ['Select', 'Bachelor', 'Master', 'PhD']
  onProfile() {
    this.profileSection = false;
    this.educationSection = true;
    this.addressSection = false;
  }
  onEducation() {
    this.profileSection = false;
    this.educationSection = false;
    this.addressSection = true;
  }
  onAddress() {
    this.profileSection = false;
    this.educationSection = false;
    this.addressSection = true;
  }
  cancel() {
    this.profileSection = true;
    this.educationSection = false;
    this.addressSection = false;
  }
  previous(state){
    if (state == 'addressSection'){
      this.onProfile();
    }
    else{
      this.profileSection = true;
      this.educationSection = false;
      this.addressSection = false;
    }
  }
  onFinish(){
    this.profileSection = true;
    this.educationSection = true;
    this.addressSection = true;
    this.formHide = true;
  }
}
