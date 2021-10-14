import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';

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
  });
  constructor(
  ) { }

  ngOnInit(): void {
  }
  getval(){
    const data={
      name:this.formregis.get('teamclassification')?.value,
      email:this.formregis.get('teamname')?.value,
      phone_number:this.formregis.get('teamcategory')?.value,
    }
    console.warn(data)

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
