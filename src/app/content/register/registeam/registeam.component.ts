import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitter';

@Component({
  selector: 'app-registeam',
  templateUrl: './registeam.component.html',
  styleUrls: ['./registeam.component.css']
})
export class RegisteamComponent implements OnInit {
  formregis=new FormGroup({
    teamclassification: new FormControl(''),
    teamname: new FormControl(''),
    teamcategory: new FormControl(''),
    photo:new FormControl('')
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
      teamclassification:this.formregis.get('teamclassification')?.value,
      teamname:this.formregis.get('teamname')?.value,
      teamcategorys:this.formregis.get('teamcategory')?.value,
      photo:this.formregis.get('photo')?.setValue(File)
    }
    console.warn(data)
    if(confirm("Apakah data sudah benar?")){
      alert("Data berhasil");
      this.router.navigate(['/doneregis']);
    }else{
      alert("Silahkan perbaiki datanya")
    }
    // this.http.post('https://emaillead.aturtoko.id/api/v1/subscriber', data).subscribe((res:any)=>
    //     { console.log(res);
    //       if(res.success){
    //           this.router.navigate(['/done',{nama:this.aFormGroup.get('name')?.value,
    //             email:this.aFormGroup.get('email')?.value}]);
    //         // setTimeout(() => {
    //         //   console.log('sleep');
    //         //   //put ur code here
    //         //   // And any other code that should run only after 5s
    //         // }, 5000);
    //       }else{
    //         alert("Error: "+res.message+"\nHubungi Admin")//confirm|alert
    //       }
    //     },(err:any)=>{
    //       console.error(err);
    //       console
    //     }
    //   )
  }
}
