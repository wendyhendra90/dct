import { HttpClient } from '@angular/common/http';
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
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

  }
  // photo: File | undefined;

  // onfileselected(event:any){
  //   console.log(event);
  //   this.photo=<File>event.target.files[0];
  // }
  onSubmit(){
    const data={
      team_classification:this.formregis.get('teamclassification')?.value,
      team_name:this.formregis.get('teamname')?.value,
      team_birth_category:this.formregis.get('teamcategory')?.value
    }
    console.warn(data)
    if(confirm("Is the data correct?"+" (this data cannot be changed after inputted)")){
      this.http.post('https://hercules.aturtoko.id/dct/public/registeam', data).subscribe((res:any)=>
          { console.log(res);
            if(res.success){
              alert("Success input data");
              this.router.navigate(['/doneregis']);
            }else{
              alert("Error: "+res.message+"\nContact Admin");
            }
          },(err:any)=>{
            console.error(err);
          })
    }else{
      alert("Make sure your data is correct")
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
