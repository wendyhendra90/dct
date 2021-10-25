import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregis=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    const data={
      username:this.formregis.get('username')?.value,
      password:this.formregis.get('password')?.value,
      role:'user'
    }
    console.warn(data)
    if(confirm("Apakah data sudah benar?")){
      this.http.post('https://hercules.aturtoko.id/dct/public/register', data).subscribe((res:any)=>
          { console.log(res);
            if(res.success){
              alert("Data berhasil diregis");
              this.router.navigate(['/doneregis']);
            }else{
              alert("Error: "+res.message+"\nHubungi Admin");
            }
          },(err:any)=>{
            console.error(err);
          })

      
    }else{
      alert("Silahkan perbaiki datanya")
    }
  }
}
