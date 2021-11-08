import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    if(this.formregis.get('username')?.value!='' && this.formregis.get('password')?.value!=''){
      const data={
        username:this.formregis.get('username')?.value,
        password:this.formregis.get('password')?.value
      }
      console.warn(data);
      this.http.post('https://hercules.aturtoko.id/dct/public/login', data).subscribe((res:any)=>
          { console.log(res);
            if(res.token!=''||res.token!=null){
              localStorage.setItem('token', res.token);
              if(this.formregis.get('username')?.value=='admindct'){
                localStorage.setItem('role','admin')
              }else{
                localStorage.setItem('role','user')
              }
              
              setTimeout(() =>
              {
                this.router.navigate(['']).then(()=>{
                  window.location.reload();
                });
              },
              500);
            }else{
              alert("Error: "+res.message+"\nHubungi Admin");
            }
            
          },(err:any)=>{
            alert('Wrong username or password')
            console.error(err);
          })
    }else{
      alert('Username or Password is empty');
    }
  }
}
