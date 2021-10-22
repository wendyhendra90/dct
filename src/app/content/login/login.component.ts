import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitter';
import { __values } from 'tslib';

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
    private router:Router,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    const data={
      username:this.formregis.get('username')?.value,
      password:this.formregis.get('password')?.value
    }
    console.warn(data);
    if(this.formregis.get('username')?.value=='admin'){
      localStorage.setItem('tes','abc');localStorage.setItem('role','admin')
    }else{
      localStorage.setItem('tes','abc');localStorage.setItem('role','user')
    }
    
    setTimeout(() =>
    {
      this.router.navigate(['']).then(()=>{
        window.location.reload();
      });
    },
    500);
  }
}
