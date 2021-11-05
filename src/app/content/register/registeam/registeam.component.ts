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
    team_classification: new FormControl(''),
    team_name: new FormControl(''),
    team_birth_category: new FormControl(''),
    files:new FormControl('')
  });
  photo: string ;
  images: any ;

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formregis.get('files')?.setValue(file);
    }
  
    //const reader = new FileReader();
    // if(event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.photo = reader.result as string;
    //     this.formregis.patchValue({
    //       files: reader.result
    //     });
    //   };
    // }


    // reader.onload = (event: any) => {
    //   this.images.push(event.target.result);

    //   this.formregis.patchValue({
    //     files: this.images
    //   });
    // }

    // reader.readAsDataURL(event.target.files);

  }
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    const formData = new FormData();
    formData.append('team_classification', this.formregis.get('team_classification')?.value)
    formData.append('team_name', this.formregis.get('team_name')?.value)
    formData.append('team_birth_category', this.formregis.get('team_birth_category')?.value)
    formData.append('files', this.formregis.get('files')?.value)
    
    // const data={
    //   team_classification:this.formregis.get('teamclassification')?.value,
    //   team_name:this.formregis.get('teamname')?.value,
    //   team_birth_category:this.formregis.get('teamcategory')?.value
    // }
    if(confirm("Is the data correct?"+" (this data cannot be changed after inputted)")){
      this.http.post('https://hercules.aturtoko.id/dct/public/registeam', formData).subscribe((res:any)=>
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
