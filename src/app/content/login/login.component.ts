import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formregis=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const data={
      username:this.formregis.get('username')?.value,
      password:this.formregis.get('password')?.value
    }
    console.warn(data)

  }
}
